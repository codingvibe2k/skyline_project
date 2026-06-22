/**
 * @file /app/[lang]/about/page.tsx
 * @description Localized "About Us" page detailing Skyline Motors' mission, leadership, and partners.
 * This component handles:
 * 1. Rendering the brand background and logo assets.
 * 2. Displaying localized copywriting for mission statements.
 * 3. Incorporating interactive animations and effects (e.g. grayscale team photographs hovering to color).
 * 4. Presenting corporate electric brand partners (BYD, MG, Toyota) with routing redirection.
 * 5. Explaining long-term commitment columns (premium service, sustainability, seamless ownership) flanked by product-focused content.
 */

import { Libre_Caslon_Text, Manrope } from "next/font/google";
import Image from "next/image";
import { ChevronDown, Shield, Leaf, Handshake } from "lucide-react";
import Link from "next/link";
import { getDictionary } from "@/lib/get-dictionary";

const libreCaslon = Libre_Caslon_Text({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-libre-caslon",
});

const manrope = Manrope({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-manrope",
});

interface PageProps {
  params: Promise<{ lang: string }>;
}

export default async function AboutPage({ params }: PageProps) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  const aboutDict = dict.about || {
    title: "About Skyline Motors",
    subtitle: "Elevating Your Drive in Bujumbura, Burundi.",
    mission: "Our Mission in Bujumbura",
    missionDesc: "At Skyline Motors, our mission is to revolutionize personal mobility in Burundi by providing access to premium electric vehicles. We are committed to offering exceptional service, sustainable solutions, and a seamless ownership experience, ensuring our customers pay less and drive better. We are proud to bring the future of driving to Bujumbura.",
    leadership: "The Leadership Team",
    leadershipDesc: "The visionary minds behind Burundi's premium automotive experience.",
    unwaveringCommitment: "Our Unwavering Commitment",
    premiumService: "Premium Service",
    premiumServiceDesc: "White-glove treatment at every touchpoint, from consultation to long-term maintenance.",
    sustainableSolutions: "Sustainable Solutions",
    sustainableSolutionsDesc: "Driving the transition to green energy in Burundi without compromising on performance or luxury.",
    seamlessOwnership: "Seamless Ownership",
    seamlessOwnershipDesc: "Flexible financing, comprehensive warranties, and an effortless ecosystem for the discerning driver."
  };

  const rolesMap = {
    en: {
      gm: "GENERAL MANAGER",
      sales: "SALES DIRECTOR",
      service: "SERVICE MANAGER",
      learnMore: "Learn More"
    },
    fr: {
      gm: "DIRECTEUR GÉNÉRAL",
      sales: "DIRECTRICE COMMERCIALE",
      service: "CHEF DE SERVICE",
      learnMore: "En savoir plus"
    },
    sw: {
      gm: "MENEJA MKUU",
      sales: "MKURUGENZI WA MAUZO",
      service: "MENEJA WA HUDUMA",
      learnMore: "Soma Zaidi"
    },
    rn: {
      gm: "UMURONGOZI MUKURU",
      sales: "UMURONGOZI W'UKUDANDAZA",
      service: "UMURONGOZI W'IBIKORWA",
      learnMore: "Raba ibindi"
    }
  } as any;

  const currentRoles = rolesMap[lang] || rolesMap.en;

  const brandDescriptions = {
    en: {
      byd: "Leading the way in battery technology and sustainable mobility solutions globally.",
      mg: "Combining British heritage with cutting-edge innovation for the modern Burundian driver.",
      toyota: "Pioneering electrification with the reliability and performance you've trusted for decades.",
      brandTitle: "Our Electric Brand Partners"
    },
    fr: {
      byd: "Leader mondial de la technologie des batteries et des solutions de mobilité durable.",
      mg: "Alliant l'héritage britannique à l'innovation de pointe pour le conducteur burundiais moderne.",
      toyota: "Pionnier de l'électrification avec la fiabilité et les performances auxquelles vous faites confiance depuis des décennies.",
      brandTitle: "Nos Partenaires Classés Électriques"
    },
    sw: {
      byd: "Tunaongoza njia katika teknolojia ya betri na suluhisho za usafirishaji endelevu ulimwenguni.",
      mg: "Kuchanganya urithi wa Uingereza na uvumbuzi wa hali ya juu kwa dereva wa kisasa wa Burundi.",
      toyota: "Tunaongoza umeme kwa kuegemea na utendaji uliouamini kwa miongo kadhaa.",
      brandTitle: "Washirika Wetu wa Chapa za Umeme"
    },
    rn: {
      byd: "Kuyobora urugendo mu buhanga bwa bateri n'inyishu zirama z'ingendo ku isi yose.",
      mg: "Guhuza amamuko y'Abongereza n'ubuhanga buhanitse ku bwa banyongaji b'ubu mu Burundi.",
      toyota: "Kuyobora amashanyarazi mu buryo bwo kwizigirwa n'ibikorwa bishimishije umaze imyaka mirongo wizigira.",
      brandTitle: "Washirika bacu mu mashirika y'umuyagankuba"
    }
  } as any;

  const currentBrands = brandDescriptions[lang] || brandDescriptions.en;

  return (
    <main
      className={`${libreCaslon.variable} ${manrope.variable} flex flex-col bg-[#121414] text-[#E2E2E2] min-h-screen`}
    >
      {/* Hero Section */}
      <section className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/about/about_BG.png"
            alt="Showroom Background"
            fill
            className="object-cover object-center opacity-100 mix-blend-luminosity"
            referrerPolicy="no-referrer"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#121414]/10 to-[#121414]" />
        </div>
        <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-4xl mx-auto mt-20">
          <h1 className="font-['var(--font-libre-caslon)'] text-[#D4AF37] text-5xl md:text-6xl lg:text-[64px] font-normal leading-[1.1] tracking-tight mb-4">
            {aboutDict.title}
          </h1>
          <p className="font-['var(--font-libre-caslon)'] text-3xl md:text-4xl lg:text-[48px] text-[#E2E2E2] font-normal leading-[1.2]">
            {aboutDict.subtitle}
          </p>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer z-10">
          <ChevronDown className="w-8 h-8 text-[#D4AF37]" strokeWidth={1.5} />
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 md:py-32 px-4">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
          <div className="flex justify-center md:justify-end">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <Image
                src="/assets/SKYLINE_LOGO.png"
                alt="Skyline Logo"
                fill
                className="object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
          <div className="flex flex-col max-w-lg">
            <h2 className="font-['var(--font-libre-caslon)'] text-[#D4AF37] text-4xl md:text-[48px] font-normal leading-[1.2] mb-6">
              {aboutDict.mission}
            </h2>
            <p className="font-['var(--font-manrope)'] text-[#B7B5B4] text-lg leading-[1.6]">
              {aboutDict.missionDesc}
            </p>
            <div className="w-16 h-[2px] bg-[#D4AF37] mt-8" />
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-24 px-4 bg-[#1A1C1C]">
        <div className="max-w-[1280px] mx-auto flex flex-col items-center">
          <h2 className="font-['var(--font-libre-caslon)'] text-[#D4AF37] text-4xl md:text-[48px] font-normal text-center mb-4">
            {aboutDict.leadership}
          </h2>
          <p className="font-['var(--font-manrope)'] text-[#B7B5B4] text-lg text-center mb-16">
            {aboutDict.leadershipDesc}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full">
            {[
              {
                name: "Jean-Pierre Ndayishimiye",
                role: currentRoles.gm,
                img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&auto=format&fit=crop&q=80",
              },
              {
                name: "Amina Uwimana",
                role: currentRoles.sales,
                img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop&q=80",
              },
              {
                name: "David Rukundo",
                role: currentRoles.service,
                img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&auto=format&fit=crop&q=80",
              },
            ].map((person, idx) => (
              <div key={idx} className="flex flex-col group">
                <div className="relative w-full aspect-[3/4] mb-6 overflow-hidden rounded-[4px]">
                  <Image
                    src={person.img}
                    alt={person.name}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-[#D4AF37]/0 group-hover:ring-[#D4AF37]/50 transition-all duration-500 rounded-[4px]" />
                </div>
                <h3 className="font-['var(--font-libre-caslon)'] text-2xl text-[#E2E2E2] mb-1">
                  {person.name}
                </h3>
                <p className="font-['var(--font-manrope)'] text-[#D4AF37] text-sm font-semibold tracking-[0.1em] uppercase">
                  {person.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Partners */}
      <section className="py-24 px-4 bg-[#121414]">
        <div className="max-w-[1280px] mx-auto flex flex-col items-center">
          <h2 className="font-['var(--font-libre-caslon)'] text-[#D4AF37] text-4xl md:text-[48px] font-normal text-center mb-16">
            {currentBrands.brandTitle}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            {[
              {
                logo: "/assets/BYD_LOGO.png",
                name: "BYD",
                desc: currentBrands.byd,
              },
              {
                logo: "/assets/MG_LOGO.png",
                name: "MG",
                desc: currentBrands.mg,
              },
              {
                logo: "/assets/TOYOTA_LOGO.png",
                name: "Toyota",
                desc: currentBrands.toyota,
              },
            ].map((brand, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center text-center p-12 bg-[#1A1C1C] rounded-[4px] border border-transparent hover:border-[#D4AF37]/40 transition-colors duration-500 group"
              >
                <div className="relative w-32 h-16 mb-8 opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    fill
                    className="object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <p className="font-['var(--font-manrope)'] text-[#B7B5B4] text-base leading-[1.6] mb-8 flex-1">
                  {brand.desc}
                </p>
                <Link
                  href={`/${lang}/showroom?brand=${brand.name}`}
                  className="font-['var(--font-manrope)'] text-[#D4AF37] text-sm font-semibold tracking-wide flex items-center gap-2 group/link"
                >
                  {currentRoles.learnMore}
                  <span className="group-hover/link:translate-x-1 transition-transform">
                    →
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Unwavering Commitment */}
      <section className="py-24 px-4 bg-gradient-to-br from-[#1A1C1C] to-[#121414]">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col order-2 lg:order-1 px-5">
            <h2 className="font-['var(--font-libre-caslon)'] text-[#D4AF37] text-4xl md:text-[56px] leading-[1.1] font-normal mb-12">
              {aboutDict.unwaveringCommitment.split(" ").slice(0, 2).join(" ")}
              <br />
              {aboutDict.unwaveringCommitment.split(" ").slice(2).join(" ")}
            </h2>

            <div className="flex flex-col gap-10">
              <div className="flex gap-6">
                <div className="mt-1">
                  <Shield
                    className="w-8 h-8 text-[#D4AF37]"
                    strokeWidth={1.5}
                  />
                </div>
                <div>
                  <h3 className="font-['var(--font-libre-caslon)'] text-2xl text-[#E2E2E2] mb-2">
                    {aboutDict.premiumService}
                  </h3>
                  <p className="font-['var(--font-manrope)'] text-[#B7B5B4] text-base leading-[1.6]">
                    {aboutDict.premiumServiceDesc}
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="mt-1">
                  <Leaf className="w-8 h-8 text-[#D4AF37]" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-['var(--font-libre-caslon)'] text-2xl text-[#E2E2E2] mb-2">
                    {aboutDict.sustainableSolutions}
                  </h3>
                  <p className="font-['var(--font-manrope)'] text-[#B7B5B4] text-base leading-[1.6]">
                    {aboutDict.sustainableSolutionsDesc}
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="mt-1">
                  <Handshake
                    className="w-8 h-8 text-[#D4AF37]"
                    strokeWidth={1.5}
                  />
                </div>
                <div>
                  <h3 className="font-['var(--font-libre-caslon)'] text-2xl text-[#E2E2E2] mb-2">
                    {aboutDict.seamlessOwnership}
                  </h3>
                  <p className="font-['var(--font-manrope)'] text-[#B7B5B4] text-base leading-[1.6]">
                    {aboutDict.seamlessOwnershipDesc}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative order-1 lg:order-2">
            <div className="relative aspect-square max-w-md mx-auto lg:max-w-none lg:w-full overflow-hidden rounded-[4px] border border-[#D4AF37]/20 p-2">
              <div className="relative w-full h-full rounded-[4px] overflow-hidden">
                <Image
                  src="/assets/about/Power_Stations.png"
                  alt="Premium Car Interior Steering Wheel"
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-[#D4AF37]/30" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
