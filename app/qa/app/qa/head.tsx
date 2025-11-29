export default function Head() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What does Atlas AI do as an AI growth and marketing agency?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Atlas AI builds brand systems, marketing workflows, and practical AI tools that help logistics companies, freight brokers, trucking carriers, and service-based businesses grow with more clarity and less complexity. We focus on messaging, positioning, SEO, automation, and execution systems that support long-term growth."
        }
      },
      {
        "@type": "Question",
        "name": "Who does Atlas AI serve?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Atlas AI partners with logistics and service-based organizations including trucking companies, freight brokerages, fleet owners, 3PLs, warehousing teams, and professional service companies. We work with teams that want better branding, clearer messaging, and AI-powered marketing systems without needing a full internal department."
        }
      },
      {
        "@type": "Question",
        "name": "How is Atlas AI different from traditional marketing agencies?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most agencies focus on producing content. Atlas AI focuses on building the systems behind the content. This includes messaging frameworks, brand positioning, SEO strategy, automation, AI workflows, content planning, and fractional CMO support. Instead of chasing trends, we give you a repeatable structure that supports consistent revenue and easier execution."
        }
      },
      {
        "@type": "Question",
        "name": "Does Atlas AI offer AI training for teams?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We provide hands-on AI training that helps your team work faster and stay consistent. Training includes workflow design, templates, guided exercises, and customized systems that make everyday marketing tasks simpler and more efficient."
        }
      },
      {
        "@type": "Question",
        "name": "Does our team need AI experience before working with Atlas AI?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. Your team does not need any AI experience before working with us. We handle setup, workflow creation, integration, and training. Everything is designed to be simple, practical, and easy for your team to use right away."
        }
      },
      {
        "@type": "Question",
        "name": "What services does Atlas AI offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Atlas AI provides a full suite of brand and marketing system services including: Brand clarity and messaging systems, AI-powered marketing workflows, SEO and website optimization, Content strategy and planning, Fractional CMO support, Team AI enablement and training, and Automation and workflow design. These systems are built to bring more consistency, stronger positioning, and a clear path to growth."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take to see results?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most clients begin seeing clarity, alignment, and better execution within the first 30 to 90 days. For SEO, automation, or brand redevelopment, results build over time as systems are implemented and your team begins using them consistently."
        }
      },
      {
        "@type": "Question",
        "name": "How much does it cost to work with Atlas AI?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Project engagements begin around $3,000. Monthly support starts around $1,500. Fractional CMO retainers begin at $3,000 per month. Most client engagements fall in the low to mid five-figure range depending on the depth of strategy, implementation, and ongoing support."
        }
      },
      {
        "@type": "Question",
        "name": "Does Atlas AI work with companies outside the logistics industry?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. While logistics is our specialty, our brand and marketing systems work for any service-based business that needs stronger messaging, better execution, and practical AI support. We partner with consulting firms, agencies, healthcare organizations, and professional service teams as well."
        }
      },
      {
        "@type": "Question",
        "name": "How do we get started?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can schedule a discovery call through the contact page. During the call, we review your goals, current systems, brand positioning, and operational structure. Then we recommend the best next step and outline what your custom AI-powered marketing system would look like."
        }
      }
    ]
  };

  return (
    <>
      <title>FAQ - Atlas AI Growth & Marketing Agency | Frequently Asked Questions</title>
      <meta
        name="description"
        content="Common questions about Atlas AI's brand systems, AI-powered marketing workflows, SEO services, and fractional CMO support for logistics and service-based businesses."
      />
      <meta
        name="keywords"
        content="Atlas AI FAQ, AI marketing agency questions, logistics marketing, freight broker marketing, trucking marketing, AI training, fractional CMO, brand systems"
      />
      <meta property="og:title" content="FAQ - Atlas AI Growth & Marketing Agency" />
      <meta
        property="og:description"
        content="Get answers to common questions about Atlas AI's services, pricing, and approach to AI-powered marketing for logistics and service-based businesses."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.atlasaimarketing.co/qa" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema ) }}
      />
    </>
  );
}
