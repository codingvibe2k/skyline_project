/**
 * @file /app/[lang]/services/page.tsx
 * @description Localized Services & Infrastructure page.
 * This component provides depth surrounding physical vehicle ecosystems:
 * 1. Shows dynamic maps detailing localized ultra-fast charging hotspots connecting Bujumbura, Kinshasa, and Goma.
 * 2. Incorporates live status metrics demonstrating regional charger connectivity.
 * 3. Highlights household & corporate charging equipment suites (Wallbox Elite vs Portable Pro) with purchase action triggers.
 * 4. Displays technical maintenance columns, such as High-Voltage thermal adjustments, warrantied items, and trained experts.
 * 5. Embeds instant consultation channels routing to corporate advisors via WhatsApp.
 */

import Image from "next/image";
import { getDictionary } from "@/lib/get-dictionary";
import MapWrapper from "@/components/services/MapWrapper";

interface PageProps {
  params: Promise<{ lang: string }>;
}

export default async function ServicesPage({ params }: PageProps) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const mapApiKey = process.env.MAPTILER_API_KEY || process.env.NEXT_PUBLIC_MAPTILER_API_KEY || "";
  const s = dict.services || {
    heroTitle: "Powering the Heart of Africa",
    heroDesc: "Explore our rapidly expanding ultra-fast charging network across Burundi and the Democratic Republic of Congo.",
    findStation: "Find a Station",
    viewMap: "View Map",
    explore: "Explore Services",
    gridTitle: "The Regional Power Grid",
    gridDesc: "Strategically positioned hubs connecting Bujumbura to the far reaches of Kinshasa and Goma. Our grid is the backbone of African electric mobility.",
    operational: "Operational",
    operationalSub: "Active 150kW Hubs",
    expanding: "Expanding",
    expandingSub: "Site Preparation Underway",
    bujumburaHub: "Bujumbura Hub",
    kinshasaSuperhub: "Kinshasa Superhub",
    gomaStation: "Goma Station",
    realTimeStatus: "Real-time Status",
    connectedPoints: "142 Connected Points",
    infraTitle: "Ultra-Fast Infrastructure",
    techExcellence: "Technical Excellence",
    dcFastCharging: "150kW DC Fast Charging",
    thirtyMins: "30 Minutes",
    thirtyMinsDesc: "Rapid replenishment from 20% to 80% charge capacity.",
    secTitle: "24/7 Security",
    secDesc: "Monitored premises with premium lounge amenities.",
    homeSuiteTitle: "The Home Charging Suite",
    homeSuiteDesc: "Refined energy solutions for your residence or executive office.",
    installationOrder: "Order for Installation",
    portableUtility: "Ruggedized Mobile Utility",
    careTitle: "Skyline Care & Maintenance",
    precisionManuf: "High-Voltage Diagnostics",
    precisionManufDesc: "Our certified technicians utilize proprietary diagnostic tools to monitor battery health and optimize thermal management systems for the Central African climate.",
    coverageTitle: "Regional Warranty Coverage",
    coverageDesc: "A comprehensive 8-year or 160,000km warranty on all drivetrain components, backed by local support centers in Burundi and DRC.",
    certifiedTechs: "Certified Technicians",
    certifiedTechsDesc: "Ongoing specialist training ensure our team remains at the forefront of electric vehicle engineering and safety protocols.",
    supportTitle: "Immediate Charging Support",
    supportDesc: "Have questions about installation or network status? Connect directly with our regional specialists.",
    waBtn: "Consult a Charging Specialist via WhatsApp"
  };

  return (
    <div className="bg-background text-on-background font-body-md overflow-x-hidden selection:bg-primary-container selection:text-on-primary-container min-h-screen">
      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden w-full">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background z-10 animate-fade-in-slow"></div>
          <div
            className="w-full h-full bg-cover bg-center scale-105 animate-slow-zoom"
            aria-label="A cinematic, low-angle photograph of an ultra-modern electric vehicle charging hub at twilight in Bujumbura."
          >
            <Image
              src="/assets/services/services_Hero_BG.png"
              alt="Charging Station"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
        <div className="relative z-20 text-center px-margin-mobile md:px-margin-desktop max-w-4xl pt-20">
          <h1 className="font-display-lg text-headline-lg-mobile md:text-display-lg text-primary-fixed mb-6 leading-tight">
            {s.heroTitle}
          </h1>
          <p className="font-body-lg text-body-lg text-secondary-fixed mb-10 max-w-2xl mx-auto opacity-90">
            {s.heroDesc}
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <button className="bg-primary px-10 py-4 text-on-primary font-label-lg text-label-lg uppercase tracking-widest hover:bg-primary-fixed transition-colors">
              {s.findStation}
            </button>
            <button className="border border-primary px-10 py-4 text-primary font-label-lg text-label-lg uppercase tracking-widest hover:bg-primary/10 transition-colors">
              {s.viewMap}
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-5 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 animate-bounce z-20">
          <span className="font-label-sm text-label-sm text-outline tracking-widest uppercase">
            {s.explore}
          </span>
          <span className="material-symbols-outlined text-primary">
            expand_more
          </span>
        </div>
      </header>

      {/* Interactive Network Map Section */}
      <section className="py-24 bg-surface-container-lowest">
        <div className="max-w-container-max mx-auto px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
            <div className="lg:col-span-4 mb-12 lg:mb-0">
              <h2 className="font-display-lg text-headline-lg text-on-background mb-8">
                {s.gridTitle}
              </h2>
              <p className="text-on-surface-variant text-body-lg mb-8 leading-relaxed">
                {s.gridDesc}
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4 group">
                  <span className="w-3 h-3 rounded-full bg-primary shadow-[0_0_10px_#f2ca50]"></span>
                  <div>
                    <h4 className="font-label-lg text-primary uppercase">
                      {s.operational}
                    </h4>
                    <p className="text-label-sm text-outline">
                      {s.operationalSub}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="w-3 h-3 rounded-full bg-outline-variant"></span>
                  <div>
                    <h4 className="font-label-lg text-outline uppercase">
                      {s.expanding}
                    </h4>
                    <p className="text-label-sm text-outline">
                      {s.expandingSub}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-8 relative aspect-[16/10] bg-surface-container rounded-lg overflow-hidden border border-outline-variant shadow-2xl">
              <MapWrapper apiKey={mapApiKey} s={s} />
            </div>
          </div>
        </div>
      </section>

      {/* Ultra-Fast Charging Hubs Section */}
      <section className="py-24">
        <div className="max-w-container-max mx-auto px-margin-desktop">
          <div className="mb-16">
            <h2 className="font-display-lg text-headline-lg text-on-background mb-4">
              {s.infraTitle}
            </h2>
            <div className="w-24 h-1 bg-primary"></div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter">
            <div className="group relative overflow-hidden aspect-video">
              <img
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                src="https://lh3.googleusercontent.com/aida/AP1WRLvkJ3M-cF0umWumdp8pD999RBa3i031BUBDtfIpm1eQ1SP4UV8Z2EFzJPc1xOa1HUlY_EpkXNSUKkowlaTedM5eBr45YS_Ubj9GnigU3Maj7wEpphFDxyCjb7iZaKeLCE7VXLZtYkYpQpPprBWA96zyE5K5iENvc-j20kp8mujEHuJA2GDrtKDcNySpUzd4lewnjiP6UnBUNzcDh8nQaQoSwyqqTp9NjDP-dGBRZS8VzhVgzlfdAnEWTlg"
                alt="Professional architectural interior shot of a luxury EV charging lounge"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
              <div className="absolute bottom-8 left-8">
                <p className="font-label-sm text-primary uppercase mb-2">
                  {s.techExcellence}
                </p>
                <h3 className="font-headline-md text-white">
                  {s.dcFastCharging}
                </h3>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-gutter">
              <div className="bg-surface-container p-10 border border-outline-variant hover:border-primary transition-colors flex items-center gap-8">
                <div className="w-16 h-16 rounded-full border border-primary/30 flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-primary text-3xl">
                    timer
                  </span>
                </div>
                <div>
                  <h4 className="font-headline-md text-on-background mb-1">
                    {s.thirtyMins}
                  </h4>
                  <p className="text-on-surface-variant">
                    {s.thirtyMinsDesc}
                  </p>
                </div>
              </div>
              <div className="bg-surface-container p-10 border border-outline-variant hover:border-primary transition-colors flex items-center gap-8">
                <div className="w-16 h-16 rounded-full border border-primary/30 flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-primary text-3xl">
                    verified_user
                  </span>
                </div>
                <div>
                  <h4 className="font-headline-md text-on-background mb-1">
                    {s.secTitle}
                  </h4>
                  <p className="text-on-surface-variant">
                    {s.secDesc}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Home Charging Suite */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-container-max mx-auto px-margin-desktop">
          <div className="text-center mb-16">
            <h2 className="font-display-lg text-headline-lg text-on-background mb-4">
              {s.homeSuiteTitle}
            </h2>
            <p className="text-on-surface-variant font-body-lg">
              {s.homeSuiteDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Product 1 */}
            <div
              className="bg-surface p-1 rounded-lg border border-transparent shadow-[0_0_15px_rgba(242,202,80,0.1)] group overflow-hidden"
              style={{
                backgroundImage:
                  "linear-gradient(#1e2020, #1e2020), linear-gradient(to bottom right, #f2ca50, #554300)",
                backgroundClip: "content-box, border-box",
              }}
            >
              <div className="relative bg-surface rounded-lg p-12 h-full flex flex-col">
                <div className="h-64 mb-10 overflow-hidden">
                  <img
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDi_FahX38_F_e6_DVYlBLPizv8zADKvA36fqYxmpJMo2zDwzZ_2Tbu4xHSP78D8YFDKWtNjE0bWJVW51VcrawoqL1xTc4N5Yzl53vH_hS5kaB94V3SAj1WG2kigcYhyAyMxINigw5jRwtZlXj6slHntHhU6WYEtmmb7ruBf4J34UTewSsadOd8OmN3R0AD-KwoQCs5G4iiK0r2Ttu4ruuT-b-d9F-zVJ0IGv0V2AIF0CNe88r6jAJSA_bOXuT-0s_tMJnY-Al011c"
                    alt="Skyline Wallbox Elite"
                  />
                </div>
                <div className="mt-auto">
                  <div className="flex justify-between items-end mb-6">
                    <div>
                      <h3 className="font-headline-md text-primary mb-2">
                        Skyline Wallbox Elite
                      </h3>
                      <p className="text-outline uppercase font-label-sm tracking-widest">
                        22kW AC Home Charging
                      </p>
                    </div>
                    <span className="font-display-lg text-headline-md text-on-surface opacity-30 italic">
                      $1,450
                    </span>
                  </div>
                  <p className="text-on-surface-variant mb-8 leading-relaxed">
                    A high-performance charging unit designed for permanent
                    installation. Features smart integration with the Skyline
                    Mobile App for scheduling and energy management.
                  </p>
                  <button className="w-full bg-primary-container text-on-primary-container py-4 font-label-lg text-label-lg uppercase tracking-widest hover:brightness-110 transition-all">
                    {s.installationOrder}
                  </button>
                </div>
              </div>
            </div>

            {/* Product 2 */}
            <div className="bg-surface p-1 rounded-lg border border-outline-variant hover:border-primary/50 group overflow-hidden transition-all">
              <div className="bg-surface rounded-lg p-12 h-full flex flex-col">
                <div className="h-64 mb-10 overflow-hidden">
                  <img
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKUblXE9u05RklzLSZJQHYhJosIed4ewXm5zI4Pr_MGc5OVEJprW33yTZTEtNiiS3zTABF6-iBIPzYNIS_hlo3PfEOm9Jq-4zymu2IOmgduATQQbCJ7N7Nw34W-EJc01Ca7G3efKNTwtd1Rh7G3d6pKWXeaUB3MllrfW2s19b6YvUGHCoFhBzcSayIoRNRPW2D5CczWRLaK5eEF5bPfMrqjBjCffM5wM6BeZIHss4jVgVSvkYF1EhGP1HH2US4bFZNoHAsi_Wm3Hs"
                    alt="Portable Energy Pro"
                  />
                </div>
                <div className="mt-auto">
                  <div className="flex justify-between items-end mb-6">
                    <div>
                      <h3 className="font-headline-md text-primary mb-2">
                        Portable Energy Pro
                      </h3>
                      <p className="text-outline uppercase font-label-sm tracking-widest">
                        {s.portableUtility}
                      </p>
                    </div>
                    <span className="font-display-lg text-headline-md text-on-surface opacity-30 italic">
                      $850
                    </span>
                  </div>
                  <p className="text-on-surface-variant mb-8 leading-relaxed">
                    Engineered for regional travel where infrastructure may be
                    sparse. A heavy-duty, weather-sealed solution for charging
                    from standard industrial outlets.
                  </p>
                  <button className="w-full border border-primary text-primary py-4 font-label-lg text-label-lg uppercase tracking-widest hover:bg-primary/5 transition-all">
                    {s.installationOrder}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Care & Maintenance Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover opacity-20"
            src="https://lh3.googleusercontent.com/aida/AP1WRLuu3zDHuLtlaaCeqTTTFC_F1dRsvUmkLzO2NCxa8t4yXHpCgqpTJ0wdHQkViFo7-YsNX5rz-9plMQKIamOX_L-zRRPhCu4DJmoyb1-qvfuZTznILWvQLmx7LrmkQ2UAyBYt90qRBx-fBsV8aB8dTGzvLnvzwFvq6GU-a4LBHN1yRf-6XQGMVV6y4MjS9TBPXmBcTxjoVzgnLO6rIS2y7OgLAqaJMfxcQr4mEz2VMsgRpmsZBUBgU8uB8ZY"
            alt="Care and Maintenance"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-container-max mx-auto px-margin-desktop">
          <div className="max-w-2xl">
            <h2 className="font-display-lg text-headline-lg text-primary mb-10">
              {s.careTitle}
            </h2>
            <div className="space-y-12">
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <span className="material-symbols-outlined text-primary text-4xl">
                    precision_manufacturing
                  </span>
                </div>
                <div>
                  <h4 className="font-headline-md text-on-background mb-2">
                    {s.precisionManuf}
                  </h4>
                  <p className="text-on-surface-variant">
                    {s.precisionManufDesc}
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <span className="material-symbols-outlined text-primary text-4xl">
                    shield_with_heart
                  </span>
                </div>
                <div>
                  <h4 className="font-headline-md text-on-background mb-2">
                    {s.coverageTitle}
                  </h4>
                  <p className="text-on-surface-variant">
                    {s.coverageDesc}
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <span className="material-symbols-outlined text-primary text-4xl">
                    workspace_premium
                  </span>
                </div>
                <div>
                  <h4 className="font-headline-md text-on-background mb-2">
                    {s.certifiedTechs}
                  </h4>
                  <p className="text-on-surface-variant">
                    {s.certifiedTechsDesc}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Support Integration */}
      <section className="py-20 bg-primary">
        <div className="max-w-container-max mx-auto px-margin-desktop text-center">
          <span className="material-symbols-outlined text-on-primary text-6xl mb-6">
            chat_bubble
          </span>
          <h2 className="font-display-lg text-headline-lg text-on-primary mb-6">
            {s.supportTitle}
          </h2>
          <p className="font-body-lg text-on-primary/80 mb-10 max-w-xl mx-auto">
            {s.supportDesc}
          </p>
          <a
            href="https://wa.me/skyline"
            className="inline-flex items-center gap-4 bg-on-primary text-primary px-12 py-5 font-label-lg text-label-lg uppercase tracking-widest hover:bg-on-primary-fixed-variant hover:text-on-primary transition-all shadow-xl"
          >
            <span>{s.waBtn}</span>
            <span className="material-symbols-outlined">arrow_forward</span>
          </a>
        </div>
      </section>
    </div>
  );
}
