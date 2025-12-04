import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Award, BookOpen, Mic, Newspaper, TrendingUp } from "lucide-react";
import { PersonSchema, AwardSchema, BreadcrumbSchema } from "../components/SchemaMarkup";

export const metadata: Metadata = {
  title: "Press & Media | Atlas AI Growth & Marketing Agency",
  description:
    "Media coverage, awards, and recognition for Kameel Gaines and Atlas AI. Featured in Forbes, FreightWaves, and recognized as 2025 Top Woman to Watch in Transportation.",
  keywords:
    "Atlas AI press, Kameel Gaines media, Forbes Business Council, Top Women to Watch Transportation, FreightWaves, trucking industry media",
  openGraph: {
    title: "Press & Media | Atlas AI",
    description:
      "Media coverage, awards, and recognition for Kameel Gaines and Atlas AI.",
    url: "https://www.atlasaimarketing.co/press",
    type: "website",
  },
};

const awards = [
  {
    title: "2025 Top Women to Watch in Transportation",
    organization: "Women in Trucking Association",
    year: "2025",
    description:
      "Recognized as one of the top women leaders transforming the transportation industry through innovation, advocacy, and forward-thinking leadership.",
    link: "https://www.womenintrucking.org/press-releases/women-in-trucking-association-names-2025-top-women-to-watch-in-transportation",
  },
  {
    title: "Forbes Business Council Member",
    organization: "Forbes",
    year: "2023-Present",
    description:
      "Exclusive invitation-only community for successful business leaders and entrepreneurs. Published 10+ thought leadership articles on Forbes.com.",
    link: "https://www.forbes.com/councils/forbesbusinesscouncil/people/kameelgaines/",
  },
];

const forbesArticles = [
  {
    title:
      "Resilience In Leadership: Empowering Trucking CEOs To Overcome 2025 Challenges",
    date: "Feb 18, 2025",
    views: "239",
    link: "https://www.forbes.com/councils/forbesbusinesscouncil/people/kameelgaines/",
  },
  {
    title:
      "Professionalizing Trucking Is Crucial—Here's What Truck Drivers Can Do",
    date: "Nov 7, 2024",
    views: "598",
    link: "https://www.forbes.com/councils/forbesbusinesscouncil/people/kameelgaines/",
  },
  {
    title:
      "What Trucking Industry Leaders Need To Know About The FMCSA's New Rule For CDL Holders",
    date: "Oct 16, 2024",
    views: "935",
    link: "https://www.forbes.com/councils/forbesbusinesscouncil/people/kameelgaines/",
  },
  {
    title:
      "From Tokenism To True Inclusion: The Essential Role Of Equity In DEI",
    date: "Aug 26, 2024",
    views: "1,396",
    link: "https://www.forbes.com/councils/forbesbusinesscouncil/people/kameelgaines/",
  },
  {
    title:
      "How Multimedia Storytelling Revolutionizes Truck Driver Recruiting",
    date: "Jul 15, 2024",
    views: "236",
    link: "https://www.forbes.com/councils/forbesbusinesscouncil/people/kameelgaines/",
  },
  {
    title: "Why Diverse Leadership In The Trucking Industry Is Important",
    date: "Jun 3, 2024",
    views: "1,010",
    link: "https://www.forbes.com/councils/forbesbusinesscouncil/people/kameelgaines/",
  },
];

const mediaFeatures = [
  {
    publication: "FreightWaves",
    title: "Rig On Wheels Celebrates 15 Years of Driver Recruitment",
    type: "Feature Article",
    date: "2025",
    link: "https://www.freightwaves.com/news/rig-on-wheels-celebrates-15-years-of-driver-recruitment",
  },
  {
    publication: "FreightWaves - Taking the Hire Road",
    title:
      "Carriers Level Up Communication Expectations for Driver Results",
    type: "Video Interview",
    date: "2024",
    link: "https://www.freightwaves.com/news/carriers-level-up-communication-expectations-for-driver-results-taking-the-hire-road",
  },
  {
    publication: "The Inside Lane",
    title: "A Bit Chaotic",
    type: "Newsletter Feature",
    date: "2024",
    link: "https://www.theinsidelane.co/a-bit-chaotic/",
  },
  {
    publication: "Driver Wages / NTI",
    title:
      "Thriving Driver Recruiting Programs Start with Thriving Communication",
    type: "Feature Interview",
    date: "2024",
    link: "https://driverwages.com/thriving-driver-recruiting-programs-start-with-thriving-communication-kameel-gaines-talks-an-evolving-recruiting-and-retention-landscape-with-nti/",
  },
  {
    publication: "GoMotive",
    title: "Driving Women Forward: Vision 25 Panel",
    type: "Panel Discussion",
    date: "2025",
    link: "https://gomotive.com/blog/driving-women-forward-vision-25-panel/",
  },
];

const podcasts = [
  {
    show: "Transfix Supply Chain Decoded",
    episode: "Episode 12 - Women's History Month Special",
    description:
      "Discussion on women's leadership in supply chain, AI marketing, and building inclusive logistics companies.",
    date: "March 2024",
    link: "https://transfix.io/podcast/supply-chain-decoded-episode12-kameel-gaines-whm",
  },
  {
    show: "Let's Talk Supply Chain",
    episode: "Episode 429 - Women in Supply Chain",
    description:
      "Exploring the evolving role of women in supply chain leadership and the future of logistics technology.",
    date: "2024",
    link: "https://letstalksupplychain.com/episode-429-women-in-supply-chain-kameel-gaines/",
  },
  {
    show: "FreightWaves - Taking the Hire Road",
    episode: "Multiple Episodes",
    description:
      "Recurring guest discussing driver recruitment, retention strategies, and communication best practices in trucking.",
    date: "2024-2025",
    link: "https://www.freightwaves.com/news/carriers-level-up-communication-expectations-for-driver-results-taking-the-hire-road",
  },
];

export default function Press() {
  return (
    <div className="min-h-screen bg-white">
      <PersonSchema />
      <AwardSchema />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.atlasaimarketing.co" },
          { name: "Press & Media", url: "https://www.atlasaimarketing.co/press" },
        ]}
      />

      {/* Hero Section - Refined Deloitte Style */}
      <section className="relative bg-gradient-to-r from-[#003d5c] to-[#00567a] text-white py-24">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-light mb-6 tracking-tight">
              Press & Media
            </h1>
            <p className="text-xl md:text-2xl font-light text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Recognized thought leader in AI-powered marketing, logistics innovation, and diversity in transportation. Featured in Forbes, FreightWaves, and honored as 2025 Top Woman to Watch in Transportation.
            </p>
          </div>
        </div>
      </section>

      {/* As Featured In - Premium Logo Section */}
      <section className="py-16 bg-gray-50 border-y border-gray-200">
        <div className="container mx-auto px-6">
          <p className="text-center text-sm font-semibold text-gray-500 uppercase tracking-wider mb-10">
            As Featured In
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16 max-w-5xl mx-auto">
            <div className="text-3xl font-bold text-gray-700">Forbes</div>
            <div className="text-3xl font-bold text-gray-700">FreightWaves</div>
            <div className="text-2xl font-semibold text-gray-600">Women in Trucking</div>
            <div className="text-2xl font-semibold text-gray-600">Let's Talk Supply Chain</div>
            <div className="text-2xl font-semibold text-gray-600">NTI</div>
          </div>
        </div>
      </section>

      {/* Awards & Recognition - Refined Cards */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-4 tracking-tight">
              Awards & Recognition
            </h2>
            <div className="w-16 h-1 bg-[#003d5c]"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {awards.map((award, index) => (
              <Link
                key={index}
                href={award.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="bg-white border border-gray-200 rounded-sm p-10 h-full hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 bg-[#003d5c] rounded-sm flex items-center justify-center">
                        <Award className="w-7 h-7 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-semibold text-[#003d5c] mb-2">
                        {award.year}
                      </div>
                      <h3 className="text-2xl font-light text-gray-900 mb-3 group-hover:text-[#003d5c] transition-colors">
                        {award.title}
                      </h3>
                      <p className="text-gray-600 font-medium mb-3">
                        {award.organization}
                      </p>
                      <p className="text-gray-600 leading-relaxed">
                        {award.description}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Forbes Section - Elevated Design */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="flex items-center gap-4 mb-12">
            <BookOpen className="w-10 h-10 text-[#003d5c]" />
            <h2 className="text-4xl font-light text-gray-900 tracking-tight">
              Published on Forbes
            </h2>
          </div>

          <div className="bg-white border border-gray-200 rounded-sm p-10 mb-12 shadow-sm">
            <p className="text-lg text-gray-700 leading-relaxed">
              As a <strong>Forbes Business Council Member</strong>, Kameel Gaines contributes thought leadership articles on AI marketing, logistics innovation, diversity in trucking, and workforce development. Her articles have reached over <strong>7,000+ readers</strong> and continue to shape industry conversations.
            </p>
          </div>

          <div className="space-y-4">
            {forbesArticles.map((article, index) => (
              <Link
                key={index}
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <div className="bg-white border border-gray-200 rounded-sm p-8 hover:shadow-lg hover:border-[#003d5c] transition-all duration-300">
                  <div className="flex items-start justify-between gap-6">
                    <div className="flex-1">
                      <h3 className="text-xl font-light text-gray-900 mb-3 group-hover:text-[#003d5c] transition-colors leading-snug">
                        {article.title}
                      </h3>
                      <div className="flex items-center gap-6 text-sm text-gray-500">
                        <span>{article.date}</span>
                        <span>•</span>
                        <span>{article.views} views</span>
                      </div>
                    </div>
                    <div className="flex-shrink-0">
                      <div className="text-[#003d5c] opacity-0 group-hover:opacity-100 transition-opacity">
                        →
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="https://www.forbes.com/councils/forbesbusinesscouncil/people/kameelgaines/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-[#003d5c] font-semibold hover:underline"
            >
              View Full Forbes Profile →
            </Link>
          </div>
        </div>
      </section>

      {/* Media Features - Clean Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="flex items-center gap-4 mb-12">
            <Newspaper className="w-10 h-10 text-[#003d5c]" />
            <h2 className="text-4xl font-light text-gray-900 tracking-tight">
              Media Features
            </h2>
          </div>

          <div className="space-y-6">
            {mediaFeatures.map((feature, index) => (
              <Link
                key={index}
                href={feature.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <div className="bg-white border border-gray-200 rounded-sm p-8 hover:shadow-lg hover:border-[#003d5c] transition-all duration-300">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gray-100 rounded-sm flex items-center justify-center">
                        <TrendingUp className="w-6 h-6 text-[#003d5c]" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-semibold text-[#003d5c] mb-2">
                        {feature.publication}
                      </div>
                      <h3 className="text-xl font-light text-gray-900 mb-2 group-hover:text-[#003d5c] transition-colors">
                        {feature.title}
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span>{feature.type}</span>
                        <span>•</span>
                        <span>{feature.date}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Podcast Appearances */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="flex items-center gap-4 mb-12">
            <Mic className="w-10 h-10 text-[#003d5c]" />
            <h2 className="text-4xl font-light text-gray-900 tracking-tight">
              Podcast Appearances
            </h2>
          </div>

          <div className="space-y-6">
            {podcasts.map((podcast, index) => (
              <Link
                key={index}
                href={podcast.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <div className="bg-white border border-gray-200 rounded-sm p-8 hover:shadow-lg hover:border-[#003d5c] transition-all duration-300">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-[#003d5c] rounded-full flex items-center justify-center">
                        <Mic className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-light text-gray-900 mb-2 group-hover:text-[#003d5c] transition-colors">
                        {podcast.show}
                      </h3>
                      <p className="text-[#003d5c] font-medium mb-3">
                        {podcast.episode}
                      </p>
                      <p className="text-gray-600 leading-relaxed mb-3">
                        {podcast.description}
                      </p>
                      <div className="text-sm text-gray-500">{podcast.date}</div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Speaking Engagements */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="mb-12">
            <h2 className="text-4xl font-light text-gray-900 mb-4 tracking-tight">
              Speaking Engagements
            </h2>
            <div className="w-16 h-1 bg-[#003d5c]"></div>
          </div>

          <div className="space-y-8">
            {/* MATS 2025 */}
            <div className="bg-white border border-gray-200 rounded-sm p-10 shadow-sm hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-[#003d5c] rounded-sm flex items-center justify-center">
                    <Mic className="w-7 h-7 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-light text-gray-900 mb-2">
                    Mid-America Trucking Show (MATS) 2025
                  </h3>
                  <p className="text-lg text-[#003d5c] font-medium mb-4">
                    Panelist - Women's Leadership in Trucking Panel
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    <strong>First women's leadership panel in MATS' 55-year history.</strong> Moderated by Nicole C. Ward (AAWTA founder), this groundbreaking Pro Talks session brought together influential leaders to discuss key challenges and opportunities shaping the future of women in trucking, exploring strategic solutions for recruitment, retention, critical industry needs, and safety advocacy initiatives.
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <span>March 2025</span>
                    <span>•</span>
                    <span>African American Women Trucking Association</span>
                  </div>
                  <Link
                    href="https://youtu.be/7CsOF0g8uhI"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-[#003d5c] font-semibold hover:underline"
                  >
                    Watch Full Panel (49 min) →
                  </Link>
                </div>
              </div>
            </div>

            {/* WIT Accelerate */}
            <div className="bg-white border border-gray-200 rounded-sm p-10 shadow-sm hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-[#003d5c] rounded-sm flex items-center justify-center">
                    <Mic className="w-7 h-7 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-light text-gray-900 mb-2">
                    Women in Trucking Accelerate! Conference 2024
                  </h3>
                  <p className="text-lg text-[#003d5c] font-medium mb-4">
                    Featured Speaker - HERstory Series
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    <strong>"Strategies for Success in Recruitment and Leadership"</strong> - Drawing from more than 20 years of experience in recruitment and sales, coupled with her groundbreaking work with the Rig On Wheels Show, Kameel explored innovative approaches to recruitment, emphasizing how to create more inclusive and supportive environments for women.
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <span>November 2024</span>
                    <span>•</span>
                    <span>Women in Trucking Association</span>
                  </div>
                  <Link
                    href="https://www.womenintrucking.org/accelerate-conference-leadership-track"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-[#003d5c] font-semibold hover:underline"
                  >
                    View Conference Details →
                  </Link>
                </div>
              </div>
            </div>

            {/* TMSA ELEVATE */}
            <div className="bg-white border border-gray-200 rounded-sm p-10 shadow-sm hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-[#003d5c] rounded-sm flex items-center justify-center">
                    <Mic className="w-7 h-7 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-light text-gray-900 mb-2">
                    TMSA ELEVATE 2024 Conference
                  </h3>
                  <p className="text-lg text-[#003d5c] font-medium mb-4">
                    Panel Speaker
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    <strong>"People, Profit, and Purpose: Unifying Your Workforce for Business Impact"</strong> - Panel discussion on aligning business strategies and securing collaboration across all business units to support employee development and drive business growth.
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <span>June 2024</span>
                    <span>•</span>
                    <span>Transportation Marketing & Sales Association</span>
                  </div>
                  <Link
                    href="https://www.tmsatoday.org/kameel-gaines"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-[#003d5c] font-semibold hover:underline"
                  >
                    View Speaker Profile →
                  </Link>
                </div>
              </div>
            </div>

            {/* GoMotive */}
            <div className="bg-white border border-gray-200 rounded-sm p-10 shadow-sm hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-[#003d5c] rounded-sm flex items-center justify-center">
                    <Mic className="w-7 h-7 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-light text-gray-900 mb-2">
                    GoMotive Vision 25 Panel
                  </h3>
                  <p className="text-lg text-[#003d5c] font-medium mb-4">
                    Panelist
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    <strong>"Driving Women Forward"</strong> - Panel discussion on advancing women's leadership in the transportation and logistics industry.
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <span>2025</span>
                    <span>•</span>
                    <span>GoMotive</span>
                  </div>
                  <Link
                    href="https://gomotive.com/blog/driving-women-forward-vision-25-panel/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-[#003d5c] font-semibold hover:underline"
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Refined */}
      <section className="py-20 bg-gradient-to-r from-[#003d5c] to-[#00567a] text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-light mb-6 tracking-tight">
              Media Inquiries & Speaking Requests
            </h2>
            <p className="text-xl font-light text-blue-100 mb-10 leading-relaxed">
              Interested in featuring Kameel Gaines for an interview, podcast,
              or speaking engagement? We'd love to hear from you.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white px-10 py-4 rounded-sm font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg"
              style={{ color: "#003366" }}
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
