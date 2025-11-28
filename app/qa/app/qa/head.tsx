export default function Head() {
  const faqs = [
    {
      question: "What does Atlas AI do as an AI growth and marketing agency?",
      answer: "Atlas AI builds brand systems, marketing workflows, and AI-enabled automation that help logistics and service-based companies grow with less complexity. The focus is on clear messaging, SEO, content development, and practical AI tools that support consistent and effective marketing."
    },
    {
      question: "Who does Atlas AI serve?",
      answer: "We primarily serve logistics companies, freight brokers, trucking operations, supply chain businesses, and service-based B2B companies. Our industry expertise allows us to understand your challenges and speak your language."
    },
    {
      question: "How is Atlas AI different from traditional marketing agencies?",
      answer: "We combine 15+ years of logistics industry experience with cutting-edge AI tools. We're not just marketers—we're industry insiders who understand your world. Our approach integrates AI automation, data-driven strategy, and hands-on execution to deliver faster results with lower costs."
    },
    {
      question: "Does Atlas AI offer AI training for teams?",
      answer: "Yes! We provide custom AI workshops, hands-on training sessions, and ongoing enablement to help your team leverage AI tools confidently. We build capabilities that drive immediate results, not just theory."
    },
    {
      question: "Does our team need AI experience before working with Atlas AI?",
      answer: "Not at all. We meet you where you are. Whether your team is AI-curious or already experimenting with tools, we tailor our approach to your current level and build from there."
    },
    {
      question: "What services does Atlas AI offer?",
      answer: "We offer AI-powered brand systems, AI-driven marketing and growth, thought leadership and media influence, AI integration and automation, fractional CMO services, and team training. Visit our Services page for detailed information on each offering."
    },
    {
      question: "How long does it take to see results?",
      answer: "Initial improvements can be seen within 30-60 days, with significant growth typically occurring within 3-6 months. Timeline varies based on your starting point, goals, and the services you choose."
    },
    {
      question: "How much does it cost to work with Atlas AI?",
      answer: "Investment varies based on scope, services, and business needs. We create custom packages tailored to your specific goals and budget. Schedule a discovery call to discuss pricing options that work for your business."
    },
    {
      question: "Does Atlas AI work with businesses outside the logistics industry?",
      answer: "While logistics is our specialty, we also work with service-based B2B companies, professional services, and businesses looking to integrate AI into their marketing and operations. If you value industry expertise and AI-driven growth, we can help."
    },
    {
      question: "How do we get started?",
      answer: "Schedule a complimentary discovery call to discuss your goals, challenges, and how Atlas AI can support your growth. We'll explore your needs and determine if we're a good fit. From there, we'll create a custom plan tailored to your business."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    } ))
  };

  return (
    <>
      <title>FAQ - Atlas AI | Frequently Asked Questions</title>
      <meta name="description" content="Get answers to common questions about Atlas AI's AI-powered marketing, branding, automation, and growth services for logistics and service-based companies." />
      <meta name="keywords" content="Atlas AI FAQ, AI marketing questions, logistics marketing, AI automation, brand systems, fractional CMO, AI training" />
      
      {/* Open Graph */}
      <meta property="og:title" content="FAQ - Atlas AI | Frequently Asked Questions" />
      <meta property="og:description" content="Get answers to common questions about Atlas AI's AI-powered marketing, branding, automation, and growth services for logistics and service-based companies." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.atlasaimarketing.co/qa" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="FAQ - Atlas AI | Frequently Asked Questions" />
      <meta name="twitter:description" content="Get answers to common questions about Atlas AI's AI-powered marketing, branding, automation, and growth services for logistics and service-based companies." />
      
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema ) }}
      />
    </>
  );
}
