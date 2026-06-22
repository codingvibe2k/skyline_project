/**
 * @file /app/[lang]/contact/ContactPageClient.tsx
 * @description Client-side component for the interactive localized Contact page.
 * It coordinates:
 * 1. An ambient cursor-tracking glow effect that moves in response to client mice.
 * 2. Form state tracking (idle, submitting, success) with auto-reset functionality.
 * 3. Structured input controls (Name, Email, Subject matching services, Message) with responsive styling.
 * 4. A rich testimonial column highlighting premium brand impact in central Africa.
 * 5. Display blocks for physical showrooms (Bujumbura, Kinshasa) alongside links to Google maps.
 */

"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface ContactPageClientProps {
  lang: string;
  dict: any;
}

export default function ContactPageClient({ lang, dict }: ContactPageClientProps) {
  const glowRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const c = dict.contact || {
    hereToHelp: "We're here to help",
    helpDesc: "Experience the future of mobility in Burundi and DRC. Our team of specialists is ready to facilitate your journey into elite electric performance.",
    nameLabel: "Name",
    namePlaceholder: "e.g. Jean-Pierre Nkurunziza",
    emailLabel: "Email address",
    emailPlaceholder: "e.g. contact@skyline-motors.com",
    messageLabel: "Message",
    messagePlaceholder: "Let us know how we can help...",
    btnSubmit: "Send message",
    testimonial: "Skyline cut project delays by 30% and transformed our regional logistics across Burundi and DRC with their impeccable EV fleet support.",
    bujumburaShowroom: "Bujumbura Showroom",
    kinshasaHub: "Kinshasa Logistics Hub",
    customerCare: "Customer Care",
    viewOnMap: "View on Map",
    liveSupport: "Live Support",
    supportSubtitle: "Available 24/7 for regional EV infrastructure support.",
    subjectLabel: "Subject",
    subjectProcurement: "Vehicle Procurement",
    subjectAppointment: "Service Appointment",
    subjectFleet: "Fleet Solutions",
    subjectSupport: "Technical Support",
    subjectPartnerships: "Partnerships",
    consent: "I agree to the processing of my personal data according to the privacy policy.",
    sending: "Sending...",
    success: "Message Received",
    submitting: "Submit Portfolio Inquiry"
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (glowRef.current) {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        glowRef.current.style.background = `radial-gradient(circle at ${x * 100}% ${y * 100}%, rgba(242, 202, 80, 0.15) 0%, rgba(18, 20, 20, 0) 60%)`;
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    setTimeout(() => {
      setStatus("success");
      const form = e.target as HTMLFormElement;
      setTimeout(() => {
        setStatus("idle");
        form.reset();
      }, 3000);
    }, 1500);
  };

  return (
    <div className="font-body-md text-base overflow-x-hidden pt-24 text-on-surface bg-surface min-h-screen">
      {/* Main Content Canvas */}
      <main className="min-h-screen pb-24 px-4 md:px-16 flex items-center justify-center relative overflow-hidden">
        {/* Atmospheric Background Element */}
        <div
          ref={glowRef}
          className="absolute inset-0 pointer-events-none transition-colors duration-200"
          style={{
            background:
              "radial-gradient(circle at 91.4626% 53.1719%, rgba(242, 202, 80, 0.1) 0%, rgba(18, 20, 20, 0) 60%)",
          }}
        ></div>

        <div className="max-w-7xl mx-auto w-full bg-surface-container-low border border-outline-variant/20 rounded-xl overflow-hidden shadow-2xl relative z-10 flex flex-col md:flex-row">
          {/* Left Side: Form */}
          <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center">
            <h1 className="font-headline-lg text-[42px] md:text-[48px] leading-[1.2] text-on-surface mb-4 tracking-tighter">
              {c.hereToHelp}
            </h1>
            <p className="font-body-lg text-[18px] text-primary mb-12 max-w-md leading-relaxed">
              {c.helpDesc}
            </p>

            <form className="space-y-8" onSubmit={handleSubmit}>
              <div className="group">
                <label
                  className="block font-special text-[12px] uppercase text-on-surface-variant mb-2 transition-colors group-focus-within:text-primary animate-fade-in"
                  htmlFor="name"
                >
                  {c.nameLabel}
                </label>
                <input
                  className="w-full bg-surface-container border border-outline-variant/30 text-on-surface px-4 py-3 rounded focus:outline-none focus:border-primary focus:shadow-[0_0_10px_rgba(242,202,80,0.2)] transition-all duration-300 placeholder:text-outline/50"
                  id="name"
                  placeholder={c.namePlaceholder}
                  type="text"
                  required
                />
              </div>
              <div className="group">
                <label
                  className="block font-special text-[12px] uppercase text-on-surface-variant mb-2 transition-colors group-focus-within:text-primary"
                  htmlFor="email"
                >
                  {c.emailLabel}
                </label>
                <input
                  className="w-full bg-surface-container border border-outline-variant/30 text-on-surface px-4 py-3 rounded focus:outline-none focus:border-primary focus:shadow-[0_0_10px_rgba(242,202,80,0.2)] transition-all duration-300 placeholder:text-outline/50"
                  id="email"
                  placeholder={c.emailPlaceholder}
                  type="email"
                  required
                />
              </div>

              <div className="group">
                <label
                  className="block font-special text-[12px] uppercase text-on-surface-variant mb-2 transition-colors group-focus-within:text-primary"
                  htmlFor="subject"
                >
                  {c.subjectLabel}
                </label>
                <select
                  className="w-full bg-surface-container border border-outline-variant/30 text-on-surface px-4 py-3 rounded focus:outline-none focus:border-primary transition-all duration-300 appearance-none cursor-pointer"
                  id="subject"
                  defaultValue="procurement"
                >
                  <option value="procurement">{c.subjectProcurement}</option>
                  <option value="appointment">{c.subjectAppointment}</option>
                  <option value="fleet">{c.subjectFleet}</option>
                  <option value="support">{c.subjectSupport}</option>
                  <option value="partnerships">{c.subjectPartnerships}</option>
                </select>
              </div>

              <div className="group">
                <label
                  className="block font-special text-[12px] uppercase text-on-surface-variant mb-2 transition-colors group-focus-within:text-primary"
                  htmlFor="message"
                >
                  {c.messageLabel}
                </label>
                <textarea
                  className="w-full bg-surface-container border border-outline-variant/30 text-on-surface px-4 py-3 rounded focus:outline-none focus:border-primary focus:shadow-[0_0_10px_rgba(242,202,80,0.2)] transition-all duration-300 placeholder:text-outline/50 resize-none"
                  id="message"
                  placeholder={c.messagePlaceholder}
                  rows={4}
                  required
                ></textarea>
              </div>

              <div className="flex items-center gap-4 py-2">
                <input
                  type="checkbox"
                  id="consent"
                  required
                  className="w-5 h-5 accent-primary bg-surface-container border-outline-variant rounded-sm cursor-pointer"
                />
                <label
                  htmlFor="consent"
                  className="text-sm text-on-surface-variant cursor-pointer select-none"
                >
                  {c.consent}
                </label>
              </div>

              <button
                className="group relative inline-flex items-center justify-center px-12 py-4 font-label-lg text-[14px] uppercase tracking-[0.2em] font-semibold bg-primary text-on-primary transition-all duration-300 hover:bg-primary-fixed-dim active:scale-95 whitespace-nowrap cursor-pointer disabled:opacity-50"
                type="submit"
                disabled={status !== "idle"}
              >
                {status === "idle" && (
                  <>
                    {c.submitting}
                    <span className="material-symbols-outlined ml-2 group-hover:translate-x-1 transition-transform tracking-normal text-[24px]">
                      arrow_forward
                    </span>
                  </>
                )}
                {status === "submitting" && c.sending}
                {status === "success" && c.success}
              </button>
            </form>
          </div>

          {/* Right Side: Impact/Testimonial */}
          <div className="w-full md:w-1/2 bg-surface-container-highest relative min-h-[400px] md:min-h-full flex flex-col justify-end p-8 md:p-16 overflow-hidden">
            <div className="absolute inset-0 z-0">
              <Image
                src="/assets/contact/Right_Side.png"
                alt="Showroom display"
                fill
                className="object-cover object-center"
                referrerPolicy="no-referrer"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(18, 20, 20, 0.9), rgba(18, 20, 20, 0.4))",
                }}
              ></div>
            </div>

            {/* Abstract Glow Overlay */}
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary/10 blur-[120px] rounded-full z-10"></div>

            <div className="relative z-10 flex flex-col h-full justify-between">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <span className="font-headline-md text-[24px] sm:text-[32px] text-primary tracking-tighter uppercase">
                    SKYLINE
                  </span>
                </div>
              </div>

              <div className="mt-auto pt-8">
                <span
                  className="material-symbols-outlined text-primary text-4xl sm:text-6xl opacity-30 mb-2 sm:mb-4"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  format_quote
                </span>
                <blockquote className="font-special text-[18px] sm:text-[22px] md:text-[28px] lg:text-[32px] text-on-surface mb-4 sm:mb-8 leading-normal sm:leading-tight">
                  &quot;{c.testimonial.split(" ").slice(0, 5).join(" ")}{" "}
                  <span className="text-primary italic">30% </span>{" "}
                  {c.testimonial.split(" ").slice(6).join(" ")}&quot;
                </blockquote>

                <div className="flex items-center gap-6 grayscale hover:grayscale-0 transition-all duration-500 opacity-80 hover:opacity-100 mt-4">
                  <div className="relative h-10 w-24">
                    <Image
                      alt="MG Logo"
                      src="/assets/MG_LOGO.png"
                      fill
                      className="object-contain"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  <div className="h-8 w-px bg-outline-variant/30"></div>

                  <div className="relative h-10 w-24">
                    <Image
                      alt="Toyota Logo"
                      src="/assets/TOYOTA_LOGO.png"
                      fill
                      className="object-contain"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Background Element */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 border border-primary/20 rotate-45 pointer-events-none opacity-20"></div>
          </div>
        </div>
      </main>

      {/* Map/Location Section */}
      <section className="max-w-7xl mx-auto my-10 px-4 md:px-16 mb-24 z-10 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-surface-container-low p-8 border border-outline-variant/10 hover:border-primary/40 transition-colors">
            <h3 className="font-label-lg text-[14px] uppercase tracking-widest text-primary mb-4 font-semibold">
              {c.bujumburaShowroom}
            </h3>
            <p className="text-on-surface-variant font-body-md text-[16px] mb-6">
              Avenue de l&apos;Indépendance, Bujumbura, Burundi
            </p>
            <a
              className="text-primary font-label-sm text-[12px] uppercase border-b border-primary/30 pb-1 hover:border-primary transition-all inline-flex items-center gap-2 font-medium"
              href="#"
            >
              {c.viewOnMap}{" "}
              <span className="material-symbols-outlined text-[16px]">
                open_in_new
              </span>
            </a>
          </div>

          <div className="bg-surface-container-low p-8 border border-outline-variant/10 hover:border-primary/40 transition-colors">
            <h3 className="font-label-lg text-[14px] uppercase tracking-widest text-primary mb-4 font-semibold">
              {c.kinshasaHub}
            </h3>
            <p className="text-on-surface-variant font-body-md text-[16px] mb-6">
              Boulevard du 30 Juin, Kinshasa, DRC
            </p>
            <a
              className="text-primary font-label-sm text-[12px] uppercase border-b border-primary/30 pb-1 hover:border-primary transition-all inline-flex items-center gap-2 font-medium"
              href="#"
            >
              {c.viewOnMap}{" "}
              <span className="material-symbols-outlined text-[12px]">
                open_in_new
              </span>
            </a>
          </div>

          <div className="bg-surface-container-low p-8 border border-outline-variant/10 hover:border-primary/40 transition-colors">
            <h3 className="font-label-lg text-[14px] uppercase tracking-widest text-primary mb-4 font-semibold">
              {c.customerCare}
            </h3>
            <p className="text-on-surface-variant font-body-md text-[16px] mb-6">
              {c.supportSubtitle}
            </p>
            <a
              className="text-primary font-label-sm text-[12px] uppercase border-b border-primary/30 pb-1 hover:border-primary transition-all inline-flex items-center gap-2 font-medium"
              href="tel:+25712345678"
            >
              {c.liveSupport}{" "}
              <span className="material-symbols-outlined text-[12px]">
                headset_mic
              </span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
