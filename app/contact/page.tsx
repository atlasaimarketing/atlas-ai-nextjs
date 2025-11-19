import ContactForm from "@/components/ContactForm";

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-6 py-20">
        <h1 className="text-5xl font-bold mb-4">Get In Touch</h1>
        <p className="text-gray-700 mb-6 text-lg">
          Let us know how we can help you move forward with AI powered growth and branding.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-10">
          <a
            href="https://calendly.com/atlasaimarketing-info/30min"
            className="p-6 border rounded-xl hover:bg-gray-50 transition"
          >
            <h3 className="font-semibold text-xl">Schedule a Call</h3>
            <p className="text-gray-600 mt-2">Book a discovery session.</p>
          </a>

          <a href="mailto:info@atlasaimarketing.co" className="p-6 border rounded-xl hover:bg-gray-50 transition">
            <h3 className="font-semibold text-xl">Email Us</h3>
            <p className="text-gray-600 mt-2">Reach our team any time.</p>
          </a>

          <a href="tel:8325839000" className="p-6 border rounded-xl hover:bg-gray-50 transition">
            <h3 className="font-semibold text-xl">Call Us</h3>
            <p className="text-gray-600 mt-2">Speak with our support team.</p>
          </a>
        </div>

        <div className="mt-16">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
