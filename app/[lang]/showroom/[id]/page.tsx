/**
 * @file /app/[lang]/showroom/[id]/page.tsx
 * @description Dynamic localized single vehicle details page.
 * Given a dynamic route param ID (e.g. 'seal', 'tang', etc.), it coordinates the following:
 * 1. Resolves vehicle data from local memory storage layout or falls back to standard 404.
 * 2. Establishes fluid display text scaling matching branding specs (Libre Caslon Text + Manrope).
 * 3. Mounts an immersive hero intro section including flagship statistics (acceleration, aerodynamics, range).
 * 4. Showcases high-voltage Blade Battery safety features (thermal, longevity, puncture proof) accompanied by reactive lists.
 * 5. Uses InteractiveGallery to enable user-controlled viewing of exterior/interior detail grids.
 * 6. Installs persistent chat helper anchor linking to WhatsApp agents.
 */

/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Play, CheckCircle, Zap, BatteryCharging, Thermometer, RefreshCw, Beaker } from "lucide-react";
import InteractiveGallery from "@/components/showroom/InteractiveGallery";
import { vehicles } from "@/lib/data/vehicles";
import { notFound } from "next/navigation";

export default async function VehicleDetail({ params }: { params: Promise<{ id: string, lang: string }> }) {
  const { id, lang } = await params;

  // Retrieve vehicle data
  const vehicle = vehicles[id as keyof typeof vehicles];
  if (!vehicle) {
    notFound();
  }

  // Fallback to English if layout language isn't explicitly defined in vehicle i18n
  const t = (vehicle.i18n as any)[lang] || vehicle.i18n.en;
  const { images, specs } = vehicle;

  const configMessages: Record<string, string> = {
    en: `Hello, I would like to configure the ${vehicle.name}.`,
    fr: `Bonjour, je souhaite configurer la ${vehicle.name}.`,
    sw: `Habari, nataka kusanidi ${vehicle.name}.`,
    rn: `Yambu, ndashaka guhindura ${vehicle.name}.`
  };
  const whatsappMessage = configMessages[lang] || configMessages.en;

  const textStyles = {
    displayLg: "text-[32px] sm:text-[42px] md:text-[52px] lg:text-[64px] leading-[1.2] lg:leading-[1.1] tracking-[-0.02em] font-normal font-display-lg",
    headlineLg: "text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px] leading-[1.3] lg:leading-[1.2] font-normal font-headline-lg",
    headlineMd: "text-[18px] sm:text-[22px] md:text-[26px] lg:text-[32px] leading-[1.4] lg:leading-[1.3] font-normal font-headline-md",
    bodyLg: "text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] leading-[1.6] font-normal font-body-lg",
    bodyMd: "text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] leading-[1.6] font-normal font-body-md",
    labelLg: "text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] leading-[1.4] tracking-[0.08em] sm:tracking-[0.1em] font-semibold font-label-lg",
    labelSm: "text-[10px] sm:text-[11px] lg:text-[12px] leading-[1.4] tracking-[0.05em] font-medium font-label-sm",
  };

  return (
    <div className="bg-surface text-on-surface">
      {/* Floating WhatsApp Icon */}
      <a
        className="fixed bottom-8 right-8 z-[60] w-14 h-14 bg-surface-container border border-primary/40 rounded-full flex items-center justify-center text-primary shadow-lg hover:scale-110 transition-all gold-glow group"
        href={`https://wa.me/25722220000?text=${encodeURIComponent(`Hello, I am interested in the ${vehicle.name}.`)}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg
          className="w-8 h-8 fill-current"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"></path>
        </svg>
      </a>

      {/* 1. Immersive Hero */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div
            className="w-full h-full bg-cover bg-center"
            title="Vehicle Hero"
            style={{
              backgroundImage: `url("${images.heroImage}")`,
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50"></div>
        </div>
        <div className="relative z-10 max-w-[1280px] mx-auto px-4 md:px-16 w-full pt-16 sm:pt-0">
          <div className="max-w-2xl transform translate-y-4 sm:translate-y-0">
            <h1 className={`${textStyles.displayLg} text-on-background mb-4 leading-tight`}>
              {t.hero.title}<br />
              <span className="text-primary italic">{t.hero.subtitle}</span>
            </h1>
            <p className={`${textStyles.bodyLg} text-on-surface-variant mb-6 md:mb-10`}>
              {t.hero.description}
            </p>
            <div className="grid grid-cols-3 gap-4 sm:gap-8 border-l border-primary/30 pl-4 sm:pl-8 mb-6 md:mb-10">
              <div>
                <div className={`${textStyles.headlineMd} text-primary`}>{specs.acceleration}</div>
                <div className={`${textStyles.labelSm} uppercase text-on-surface-variant`}>
                  {t.hero.accelLabel}
                </div>
              </div>
              <div>
                <div className={`${textStyles.headlineMd} text-primary`}>{specs.range}</div>
                <div className={`${textStyles.labelSm} uppercase text-on-surface-variant`}>
                  {t.hero.rangeLabel}
                </div>
              </div>
              <div>
                <div className={`${textStyles.headlineMd} text-primary`}>{specs.cdValue}</div>
                <div className={`${textStyles.labelSm} uppercase text-on-surface-variant`}>
                  {t.hero.cdLabel}
                </div>
              </div>
            </div>
            <div className="flex flex-row flex-nowrap gap-2 sm:gap-4 w-full sm:w-auto">
              <a
                href={`https://wa.me/25722220000?text=${encodeURIComponent(whatsappMessage)}`}
                target="_self"
                className={`flex-1 sm:flex-initial text-center justify-center items-center px-3 sm:px-8 py-2.5 sm:py-4 bg-primary text-on-primary ${textStyles.labelLg} uppercase tracking-wider sm:tracking-widest gold-glow transition-all whitespace-nowrap`}
              >
                {t.hero.btnConfigure}
              </a>
              <button className={`flex-1 sm:flex-initial text-center justify-center items-center px-3 sm:px-8 py-2.5 sm:py-4 gold-border text-primary ${textStyles.labelLg} uppercase tracking-wider sm:tracking-widest hover:bg-primary/10 transition-all whitespace-nowrap`}>
                {t.hero.btnDiscover}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Narrative Intro */}
      <section className="pt-24 md:pt-32 pb-12 bg-surface-container-lowest">
        <div className="max-w-[1280px] mx-auto px-[16px] md:px-[64px]">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div className="space-y-8">
              <span className={`${textStyles.labelLg} text-primary tracking-widest uppercase`}>
                {t.philosophy.label}
              </span>
              <h2 className={`${textStyles.headlineLg} text-on-background`}>
                {t.philosophy.title}
              </h2>
              <p className={`${textStyles.bodyLg} text-on-surface-variant leading-relaxed`}>
                {t.philosophy.description}
              </p>
              <p className={`${textStyles.bodyMd} text-on-surface-variant/80 italic`}>
                {t.philosophy.quote}
              </p>
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-primary/10 -m-4 transition-transform group-hover:translate-x-2 group-hover:translate-y-2"></div>
              <div
                className="aspect-[4/3] bg-cover bg-center relative z-10 border border-outline-variant/30 shadow-2xl"
                style={{
                  backgroundImage: `url("${images.philosophyImage}")`,
                }}
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Video Showcase */}
      <section className="bg-background pt-12 pb-10">
        <div className="max-w-[1280px] mx-auto px-[16px] md:px-[64px] text-center mb-16">
          <h2 className={`${textStyles.headlineLg} mb-4`}>{t.video.title}</h2>
          <div className="w-24 h-px bg-primary mx-auto mb-8"></div>
        </div>
        <div className="max-w-[1600px] mx-auto px-[16px] md:px-[40px] lg:px-[64px]">
          <div className="relative aspect-[4/3] md:aspect-video group overflow-hidden bg-surface-container shadow-2xl rounded-xl">
            <div className="absolute inset-0 flex items-center justify-center z-20">
                <button className="w-14 h-14 md:w-20 md:h-20 rounded-full border-2 border-primary flex items-center justify-center group-hover:scale-110 transition-transform bg-background/20 backdrop-blur-sm">
                  <Play className="text-primary w-6 h-6 md:w-10 md:h-10 ml-0.5 md:ml-1" fill="currentColor" />
                </button>
            </div>
            <div
              className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-[2000ms]"
              style={{
                backgroundImage: `url("${images.videoPoster}")`,
              }}
            ></div>
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
        </div>
      </section>

      {/* 4. Exterior Aesthetics */}
      <section className="pt-10 pb-24 md:pb-32 overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-[16px] md:px-[64px]">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
              <span className={`${textStyles.labelLg} text-primary tracking-widest uppercase mb-4 block`}>
                {t.exterior.label}
              </span>
              <h2 className={`${textStyles.headlineLg}`}>{t.exterior.title}</h2>
            </div>
            <p className={`max-w-md ${textStyles.bodyMd} text-on-surface-variant md:text-right mt-6 md:mt-0`}>
              {t.exterior.description}
            </p>
          </div>
          <div className="grid grid-cols-12 gap-6 items-stretch">
            <div className="col-span-12 md:col-span-7">
              <div
                className="h-[400px] md:h-[600px] bg-cover bg-center rounded-lg border border-outline-variant/20 shadow-xl"
                style={{
                  backgroundImage: `url("${images.exteriorMain}")`,
                }}
              ></div>
            </div>
            <div className="col-span-12 md:col-span-5 flex flex-col gap-6">
              <div className="bg-surface-container p-8 md:p-12 flex-1 flex flex-col justify-center border-l-4 border-primary">
                <h3 className={`${textStyles.headlineMd} mb-4`}>{t.exterior.feature1Title}</h3>
                <p className={`${textStyles.bodyMd} text-on-surface-variant`}>
                  {t.exterior.feature1Desc}
                </p>
              </div>
              <div className="bg-surface-container-highest p-8 md:p-12 flex-1 flex flex-col justify-center">
                <h3 className={`${textStyles.headlineMd} mb-4`}>{t.exterior.feature2Title}</h3>
                <p className={`${textStyles.bodyMd} text-on-surface-variant`}>
                  {t.exterior.feature2Desc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Technical Prowess (Blade Battery) */}
      <section className="py-32 bg-surface-container-lowest relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/3 h-full opacity-10"></div>
        <div className="max-w-[1280px] mx-auto px-[16px] md:px-[64px] relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div className="order-1 lg:order-1">
              <div className="relative">
                <div className="absolute -inset-8 bg-primary/5 rounded-full blur-3xl"></div>
                <div
                  className="aspect-square bg-cover bg-center relative z-10 filter brightness-90 contrast-110"
                  style={{
                    backgroundImage: `url("${images.batteryBg}")`,
                  }}
                ></div>
              </div>
            </div>
            <div className="order-2 lg:order-2 space-y-8">
              <span className={`${textStyles.labelLg} text-primary tracking-widest uppercase`}>
                {t.battery.label}
              </span>
              <h2 className={`${textStyles.headlineLg}`}>{t.battery.title}</h2>
              <p className={`${textStyles.bodyLg} text-on-surface-variant leading-relaxed`}>
                {t.battery.description}
              </p>
              <div className="space-y-6">
                {t.battery.features.map((item: any, index: number) => {
                  const Icon =
                    item.icon === "verified" ? CheckCircle :
                    item.icon === "bolt" ? Zap :
                    item.icon === "battery_charging_full" ? BatteryCharging :
                    item.icon === "thermostat" ? Thermometer :
                    item.icon === "update" ? RefreshCw :
                    item.icon === "science" ? Beaker : CheckCircle;
                  return (
                    <div key={index} className="flex items-start gap-4">
                      <Icon className="text-primary w-6 h-6 mt-1 shrink-0" />
                      <div>
                        <h4 className={`${textStyles.labelLg} text-on-background mb-1`}>{item.title}</h4>
                        <p className={`${textStyles.bodyMd} text-on-surface-variant/70`}>
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Performance Visualization */}
      <section className="py-24 bg-background">
        <div className="max-w-[1280px] mx-auto px-[16px] md:px-[64px]">
          <div className="bg-surface-container p-8 md:p-16 relative overflow-hidden gold-border">
            <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className={`${textStyles.headlineLg} mb-6`}>{t.performance.title}</h2>
                <p className={`${textStyles.bodyLg} text-on-surface-variant mb-8`}>
                  {t.performance.description}
                </p>
                <ul className="space-y-4">
                  {t.performance.bullets.map((bullet: string, index: number) => (
                    <li key={index} className="flex items-center gap-3 text-primary">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full"></span> {bullet}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex justify-center">
                <div className="text-center">
                  <div className="inline-block p-8 border-2 border-primary/20 rounded-full mb-4">
                    <div className="font-display-lg text-[80px] text-primary leading-none">{t.performance.stat}</div>
                  </div>
                  <div className={`${textStyles.labelLg} uppercase tracking-widest text-on-surface-variant`}>
                    {t.performance.statLabel}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6.1 Interactive Image Gallery */}
      <InteractiveGallery images={images.gallery} label={t.gallery.label} title={t.gallery.title} />

      {/* 7. Interior Sanctuary */}
      <section className="py-32">
        <div className="max-w-[1280px] mx-auto px-[16px] md:px-[64px]">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className={`${textStyles.headlineLg} mb-6`}>{t.interior.title}</h2>
            <p className={`${textStyles.bodyLg} text-on-surface-variant`}>
              {t.interior.description}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.interior.features.map((item: any, i: number) => (
              <div key={i} className="space-y-6 group">
                <div
                  className="aspect-square bg-cover bg-center rounded-lg border border-outline-variant/30 group-hover:border-primary transition-colors cursor-pointer"
                  style={{ backgroundImage: `url("${images.interior[i]}")` }}
                ></div>
                <h3 className={`${textStyles.headlineMd}`}>{item.title}</h3>
                <p className={`${textStyles.bodyMd} text-on-surface-variant`}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Safety & Intelligence */}
      <section className="py-32 bg-surface-container-high">
        <div className="max-w-[1280px] mx-auto px-[16px] md:px-[64px] grid md:grid-cols-2 gap-6 items-center">
          <div className="space-y-12">
            <h2 className={`${textStyles.headlineLg}`}>{t.safety.title}</h2>
            <div className="grid grid-cols-1 gap-8">
              {t.safety.features.map((item: any, idx: number) => (
                <div key={idx} className="bg-surface p-8 gold-border">
                  <span className="material-symbols-outlined text-primary mb-4 text-3xl">{item.icon}</span>
                  <h4 className={`${textStyles.labelLg} uppercase mb-2`}>{item.title}</h4>
                  <p className={`${textStyles.bodyMd} text-on-surface-variant`}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-[500px]"></div>
        </div>
      </section>

      {/* 9. Heritage & Partnership */}
      <section className="py-24 border-y border-outline-variant/20">
        <div className="max-w-[1280px] mx-auto px-[16px] md:px-[64px]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="max-w-xl">
              <h2 className={`${textStyles.headlineMd} mb-4 uppercase tracking-wider`}>
                {t.heritage.title}
              </h2>
              <p className={`${textStyles.bodyMd} text-on-surface-variant italic`}>
                {t.heritage.description}
              </p>
            </div>
            <div className="w-64 h-32 flex items-center justify-center p-8 bg-surface-container rounded-lg">
              <img
                alt="Brand Logo"
                className="w-full h-auto object-contain filter brightness-125 saturate-50 contrast-125"
                src={images.brandLogo}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Seal the Excellence (WhatsApp CTA) */}
      <section className="py-24 bg-surface-container-low border-b border-outline-variant/10">
        <div className="max-w-[1280px] mx-auto px-[16px] md:px-[64px] text-center">
          <h2 className={`${textStyles.headlineLg} text-on-background mb-6`}>{t.ctaSupport.title}</h2>
          <p className={`${textStyles.bodyLg} text-on-surface-variant max-w-2xl mx-auto mb-12`}>
            {t.ctaSupport.description}
          </p>
          <a
            className={`inline-flex items-center space-x-4 px-10 py-5 bg-surface border-2 border-primary text-primary ${textStyles.labelLg} uppercase tracking-widest hover:bg-primary hover:text-on-primary transition-all gold-glow`}
            href={`https://wa.me/25722220000?text=${encodeURIComponent(`Hello, I have an inquiry about the ${vehicle.name}.`)}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              className="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"></path>
            </svg>
            <span>{t.ctaSupport.btn}</span>
          </a>
        </div>
      </section>

      {/* 10. Conversion Hook (CTA) */}
      <section className="relative py-40 overflow-hidden bg-surface-container-lowest">
        <div className="absolute inset-0 z-0">
          <div
            className="w-full h-full bg-cover bg-center opacity-40 grayscale hover:grayscale-0 transition-all duration-1000"
            style={{
              backgroundImage: `url("${images.ctaBg}")`,
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-b from-surface-container-lowest via-transparent to-surface-container-lowest"></div>
        </div>
        <div className="relative z-10 max-w-[1280px] mx-auto px-[16px] md:px-[64px] text-center">
          <h2 className={`${textStyles.displayLg} text-primary mb-8 tracking-tighter`}>
            {t.ctaEnd.title}
          </h2>
          <p className={`${textStyles.headlineMd} text-on-background mb-16 max-w-2xl mx-auto`}>
            {t.ctaEnd.description}
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <a
              className={`group relative px-12 py-5 bg-primary text-on-primary ${textStyles.labelLg} uppercase tracking-widest overflow-hidden transition-all`}
              href={`https://wa.me/25722220000?text=${encodeURIComponent(vehicle.name)}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="relative z-10">{t.ctaEnd.btnPrimary}</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </a>
            <a
              className={`px-12 py-5 gold-border text-primary ${textStyles.labelLg} uppercase tracking-widest hover:bg-primary/5 transition-all`}
              href={`/${lang}/contact`}
            >
              {t.ctaEnd.btnSecondary}
            </a>
          </div>
          <p
            className={`mt-12 ${textStyles.labelSm} text-on-surface-variant uppercase tracking-[0.3em]`}
          >
            {t.ctaEnd.footer}
          </p>
        </div>
      </section>
    </div>
  );
}
