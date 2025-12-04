import { Metadata } from "next";
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
    title: "Female Leaders Are Transforming the Trucking Industry",
    type: "Industry Voice Feature",
    date: "Mar 13, 2025",
    link: "https://www.theinsidelane.co/a-bit-chaotic/",
  },
  {
    publication: "National Transportation Institute",
    title:
      "Thriving Driver Recruiting Programs Start with Thriving Communication",
    type: "Featured Interview",
    date: "Sep 28, 2023",
    link: "https://driverwages.com/thriving-driver-recruiting-programs-start-with-thriving-communication-kameel-gaines-talks-an-evolving-recruiting-and-retention-landscape-with-nti/",
  },
  {
    publication: "GoMotive",
    title: "Driving Women Forward: Vision 25 Panel",
    type: "Panel Discussion",
    date: "2024",
    link: "https://gomotive.com/blog/driving-women-forward-vision-25-panel/",
  },
];

const podcasts = [
  {
    show: "Transfix - Supply Chain Decoded",
    episode: "Women's History Month: Kameel Gaines",
    number: "Episode 12",
    date: "March 2024",
    description:
      "Special Women's History Month episode discussing career journey, breaking barriers in trucking, founding Rig on Wheels, and empowering women in the supply chain industry.",
    link: "https://transfix.io/podcast/supply-chain-decoded-episode12-kameel-gaines-whm",
  },
  {
    show: "Let's Talk Supply Chain",
    episode: "Women In Supply Chain™, Kameel Gaines",
    number: "Episode 429",
    date: "Oct 7, 2024",
    description:
      "In-depth discussion about career journey, founding Rig on Wheels, innovation in recruitment, and the importance of representation for African American women in trucking.",
    link: "https://letstalksupplychain.com/episode-429-women-in-supply-chain-kameel-gaines/",
  },
  {
    show: "FreightWaves - Taking the Hire Road",
    episode: "Thriving Driver Recruiting Programs",
    host: "Leah Shaver (NTI)",
    date: "2023",
    description:
      "Discussion on evolving recruiting and retention landscape, communication strategies, and opportunities for entrepreneurs in trucking.",
    link: "https://driverwages.com/thriving-driver-recruiting-programs-start-with-thriving-communication-kameel-gaines-talks-an-evolving-recruiting-and-retention-landscape-with-nti/",
  },
];

const featuredLogos = [
  { name: "Forbes", width: 120 },
  { name: "FreightWaves", width: 140 },
  { name: "Women in Trucking", width: 100 },
  { name: "Let's Talk Supply Chain", width: 130 },
  { name: "NTI", width: 80 },
];

export default function PressPage() {
  return (
    <div className="min-h-screen bg-white">
      <PersonSchema />
      <AwardSchema />
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://www.atlasaimarketing.co" },
        { name: "Press & Media", url: "https://www.atlasaimarketing.co/press" }
      ]} />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1e3a8a] to-[#1e40af] text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Press & Media
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
              Recognized thought leader in AI-powered marketing, logistics
              innovation, and diversity in transportation. Featured in Forbes,
              FreightWaves, and honored as 2025 Top Woman to Watch in
              Transportation.
            </p>
          </div>
        </div>
      </section>

      {/* As Featured In */}
      <section className="py-12 bg-gray-50 border-y border-gray-200">
        <div className="container mx-auto px-6">
          <p className="text-center text-sm font-semibold text-gray-600 uppercase tracking-wider mb-8">
            As Featured In
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12">
            {featuredLogos.map((logo) => (
              <div
                key={logo.name}
                className="text-gray-400 font-bold text-lg opacity-60 hover:opacity-100 transition-opacity"
              >
                {logo.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-12">
              <Award className="w-8 h-8 text-[#1e3a8a]" />
              <h2 className="text-4xl font-bold text-gray-900">
                Awards & Recognition
              </h2>
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
                  <div className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-xl hover:border-[#1e3a8a] transition-all h-full">
                    <div className="flex items-start justify-between mb-4">
                      <div className="bg-[#1e3a8a] text-white px-3 py-1 rounded text-sm font-semibold">
                        {award.year}
                      </div>
                      <TrendingUp className="w-5 h-5 text-gray-400 group-hover:text-[#1e3a8a] transition-colors" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-[#1e3a8a] transition-colors">
                      {award.title}
                    </h3>
                    <p className="text-sm font-semibold text-gray-600 mb-4">
                      {award.organization}
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      {award.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Forbes Articles */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-12">
              <BookOpen className="w-8 h-8 text-[#1e3a8a]" />
              <h2 className="text-4xl font-bold text-gray-900">
                Published on Forbes
              </h2>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-8 mb-8">
              <p className="text-lg text-gray-700 leading-relaxed">
                As a <strong>Forbes Business Council Member</strong>, Kameel
                Gaines contributes thought leadership articles on AI marketing,
                logistics innovation, diversity in trucking, and workforce
                development. Her articles have reached over{" "}
                <strong>7,000+ readers</strong> and continue to shape industry
                conversations.
              </p>
            </div>

            <div className="space-y-4">
              {forbesArticles.map((article, index) => (
                <Link
                  key={index}
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                >
                  <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg hover:border-[#1e3a8a] transition-all">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#1e3a8a] transition-colors">
                          {article.title}
                        </h3>
                        <div className="flex items-center gap-4 text-sm text-gray-600">
                          <span>{article.date}</span>
                          <span>•</span>
                          <span>{article.views} views</span>
                        </div>
                      </div>
                      <div className="text-gray-400 group-hover:text-[#1e3a8a] transition-colors">
                        →
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Link
                href="https://www.forbes.com/councils/forbesbusinesscouncil/people/kameelgaines/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#1e3a8a] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#1e40af] transition-colors"
              >
                View All Forbes Articles →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Media Features */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-12">
              <Newspaper className="w-8 h-8 text-[#1e3a8a]" />
              <h2 className="text-4xl font-bold text-gray-900">
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
                  className="group block"
                >
                  <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg hover:border-[#1e3a8a] transition-all">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-sm font-semibold text-[#1e3a8a]">
                            {feature.publication}
                          </span>
                          <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                            {feature.type}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#1e3a8a] transition-colors">
                          {feature.title}
                        </h3>
                        <p className="text-sm text-gray-600">{feature.date}</p>
                      </div>
                      <div className="text-gray-400 group-hover:text-[#1e3a8a] transition-colors">
                        →
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Podcast Appearances */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-12">
              <Mic className="w-8 h-8 text-[#1e3a8a]" />
              <h2 className="text-4xl font-bold text-gray-900">
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
                  className="group block"
                >
                  <div className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg hover:border-[#1e3a8a] transition-all">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="text-sm font-semibold text-[#1e3a8a]">
                            {podcast.show}
                          </span>
                          {podcast.number && (
                            <>
                              <span className="text-gray-400">•</span>
                              <span className="text-sm text-gray-600">
                                {podcast.number}
                              </span>
                            </>
                          )}
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-[#1e3a8a] transition-colors">
                          {podcast.episode}
                        </h3>
                        {podcast.host && (
                          <p className="text-sm font-semibold text-gray-600 mb-3">
                            Host: {podcast.host}
                          </p>
                        )}
                        <p className="text-gray-700 leading-relaxed mb-3">
                          {podcast.description}
                        </p>
                        <p className="text-sm text-gray-600">{podcast.date}</p>
                      </div>
                      <div className="text-gray-400 group-hover:text-[#1e3a8a] transition-colors">
                        →
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Speaking Engagements */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-12">
              <TrendingUp className="w-8 h-8 text-[#1e3a8a]" />
              <h2 className="text-4xl font-bold text-gray-900">
                Speaking Engagements
              </h2>
            </div>

            <div className="space-y-6">
              <div className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-all">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-[#1e3a8a] rounded-lg flex items-center justify-center">
                      <Mic className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Mid-America Trucking Show (MATS) 2025
                    </h3>
                    <p className="text-lg text-[#1e3a8a] font-semibold mb-3">
                      Panelist - Women's Leadership in Trucking Panel
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      <strong>First women's leadership panel in MATS' 55-year history.</strong> Moderated by Nicole C. Ward (AAWTA founder), this groundbreaking Pro Talks session brought together influential leaders to discuss key challenges and opportunities shaping the future of women in trucking, exploring strategic solutions for recruitment, retention, critical industry needs, and safety advocacy initiatives.
                    </p>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <span>March 2025</span>
                      <span>•</span>
                      <span>African American Women Trucking Association</span>
                    </div>
                    <Link
                      href="https://youtu.be/7CsOF0g8uhI"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-4 text-[#1e3a8a] font-semibold hover:underline"
                    >
                      Watch Full Panel (49 min) →
                    </Link>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-all">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-[#1e3a8a] rounded-lg flex items-center justify-center">
                      <Mic className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Women in Trucking Accelerate! Conference 2024
                    </h3>
                    <p className="text-lg text-[#1e3a8a] font-semibold mb-3">
                      Featured Speaker - HERstory Series
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      <strong>"Strategies for Success in Recruitment and Leadership"</strong> - Drawing from more than 20 years of experience in recruitment and sales, coupled with her groundbreaking work with the Rig On Wheels Show, Kameel explored innovative approaches to recruitment, emphasizing how to create more inclusive and supportive environments for women.
                    </p>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <span>November 2024</span>
                      <span>•</span>
                      <span>Women in Trucking Association</span>
                    </div>
                    <Link
                      href="https://www.womenintrucking.org/accelerate-conference-leadership-track"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-4 text-[#1e3a8a] font-semibold hover:underline"
                    >
                      View Conference Details →
                    </Link>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-all">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-[#1e3a8a] rounded-lg flex items-center justify-center">
                      <Mic className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      TMSA ELEVATE 2024 Conference
                    </h3>
                    <p className="text-lg text-[#1e3a8a] font-semibold mb-3">
                      Panel Speaker
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      <strong>"People, Profit, and Purpose: Unifying Your Workforce for Business Impact"</strong> - Panel discussion on aligning business strategies and securing collaboration across all business units to support employee development and drive business growth.
                    </p>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <span>June 2024</span>
                      <span>•</span>
                      <span>Transportation Marketing & Sales Association</span>
                    </div>
                    <Link
                      href="https://www.tmsatoday.org/kameel-gaines"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-4 text-[#1e3a8a] font-semibold hover:underline"
                    >
                      View Speaker Profile →
                    </Link>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-all">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-[#1e3a8a] rounded-lg flex items-center justify-center">
                      <Mic className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      GoMotive Vision 25 Panel
                    </h3>
                    <p className="text-lg text-[#1e3a8a] font-semibold mb-3">
                      Panelist
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      <strong>"Driving Women Forward"</strong> - Panel discussion on advancing women's leadership in the transportation and logistics industry.
                    </p>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <span>2025</span>
                      <span>•</span>
                      <span>GoMotive</span>
                    </div>
                    <Link
                      href="https://gomotive.com/blog/driving-women-forward-vision-25-panel/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-4 text-[#1e3a8a] font-semibold hover:underline"
                    >
                      Learn More →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#1e3a8a] to-[#1e40af] text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Media Inquiries & Speaking Requests
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Interested in featuring Kameel Gaines for an interview, podcast,
              or speaking engagement? We'd love to hear from you.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white text-[#1e3a8a] px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
              style={{ color: "#1e3a8a" }}
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
