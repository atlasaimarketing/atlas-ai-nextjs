export function PersonSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Kameel E. Gaines",
    jobTitle: "Founder & Chief AI Marketing Strategist",
    worksFor: {
      "@type": "Organization",
      name: "Atlas AI Growth & Marketing Agency",
    },
    url: "https://www.atlasaimarketing.co",
    sameAs: [
      "https://www.forbes.com/councils/forbesbusinesscouncil/people/kameelgaines/",
      "https://www.linkedin.com/in/kameel-gaines/",
    ],
    award: [
      "2025 Top Women to Watch in Transportation - Women in Trucking Association",
      "Forbes Business Council Member",
    ],
    memberOf: [
      {
        "@type": "Organization",
        name: "Forbes Business Council",
        url: "https://www.forbes.com/councils/forbesbusinesscouncil/",
      },
      {
        "@type": "Organization",
        name: "Women in Trucking Association",
        url: "https://www.womenintrucking.org/",
      },
    ],
    hasOccupation: {
      "@type": "Occupation",
      name: "Marketing Strategist",
      occupationLocation: {
        "@type": "City",
        name: "Houston",
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Atlas AI Growth & Marketing Agency",
    alternateName: "Atlas AI",
    url: "https://www.atlasaimarketing.co",
    logo: "https://www.atlasaimarketing.co/assets/logo.png",
    description:
      "AI-powered marketing and growth agency specializing in logistics, transportation, and service-based businesses. Led by Forbes Business Council Member Kameel E. Gaines.",
    founder: {
      "@type": "Person",
      name: "Kameel E. Gaines",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Houston",
      addressRegion: "TX",
      addressCountry: "US",
    },
    areaServed: "United States",
    serviceType: [
      "AI-Powered Brand Systems",
      "AI-Driven Marketing & Growth",
      "Thought Leadership & Media Influence",
      "AI Integration & Automation",
      "Fractional CMO & Growth Leadership",
      "Team Training & AI Enablement",
    ],
    award: [
      "Founder recognized as 2025 Top Women to Watch in Transportation",
      "Forbes Business Council Membership",
    ],
    sameAs: [
      "https://www.forbes.com/councils/forbesbusinesscouncil/people/kameelgaines/",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function AwardSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Kameel E. Gaines",
    award: [
      {
        "@type": "Award",
        name: "2025 Top Women to Watch in Transportation",
        description:
          "Recognized as one of the top women leaders transforming the transportation industry",
        issuedBy: {
          "@type": "Organization",
          name: "Women in Trucking Association",
          url: "https://www.womenintrucking.org/",
        },
        datePublished: "2025",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ArticleSchema({ article }: { article: any }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    author: {
      "@type": "Person",
      name: "Kameel E. Gaines",
      url: "https://www.atlasaimarketing.co/about",
    },
    publisher: {
      "@type": "Organization",
      name: "Atlas AI Growth & Marketing Agency",
      logo: {
        "@type": "ImageObject",
        url: "https://www.atlasaimarketing.co/assets/logo.png",
      },
    },
    datePublished: article.publishedAt,
    dateModified: article.updatedAt || article.publishedAt,
    description: article.excerpt,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.atlasaimarketing.co/insights/${article.slug}`,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbSchema({ items }: { items: Array<{ name: string; url: string }> }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
