import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    // Validate email
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address" },
        { status: 400 }
      );
    }

    // Get API key from environment variable
    const apiKey = process.env.BREVO_API_KEY;
    
    if (!apiKey) {
      console.error("BREVO_API_KEY is not set in environment variables");
      return NextResponse.json(
        { error: "Newsletter service is not configured. Please try again later." },
        { status: 500 }
      );
    }

    // Call Brevo API
    const response = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        "accept": "application/json",
        "content-type": "application/json",
        "api-key": apiKey,
      },
      body: JSON.stringify({
        email: email,
        listIds: [2], // Default list ID - you can change this in Brevo dashboard
        updateEnabled: true,
        attributes: {
          SOURCE: "Website - Insights Page",
        },
      }),
    });

    const data = await response.json();

    // Handle successful subscription
    if (response.ok || response.status === 201) {
      return NextResponse.json({
        message: "🎉 Success! You're subscribed to our newsletter.",
      });
    }

    // Handle duplicate subscription (already subscribed)
    if (data.code === "duplicate_parameter") {
      return NextResponse.json({
        message: "You're already subscribed! Check your inbox for our latest insights.",
      });
    }

    // Handle other errors
    console.error("Brevo API error:", data);
    return NextResponse.json(
      { error: data.message || "Subscription failed. Please try again later." },
      { status: response.status }
    );
  } catch (error) {
    console.error("Newsletter subscription error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
}
