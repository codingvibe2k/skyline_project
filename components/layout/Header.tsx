/**
 * @file /components/layout/Header.tsx
 * @description Localized Header/Navigation component persistent across all pages.
 * Handles the following critical layouts:
 * 1. Scroll-Aware Transparent Background: Automatically adds glass backdrop filters when the user scrolls down.
 * 2. Multi-Language Switcher Dropdown: Features active path parsing to rewrite client route prefixes (en, fr, sw, rn) preserving current query parameters.
 * 3. Mobile Hamburger Menu: Includes smooth sliding overlay layout featuring dual columns for language flags.
 * 4. Branding Integration: Displays official corporate brand insignia with link redirects returning home.
 * 5. Direct WhatsApp consultation channel with localized title strings.
 */

"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { Menu, X, Globe, ChevronDown } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

interface HeaderProps {
  lang: string;
  nav: {
    showroom: string;
    network: string;
    fleet: string;
    diplomatic: string;
    home?: string;
    services?: string;
    aboutUs?: string;
    contact?: string;
    selectLanguage?: string;
  };
}

export default function Header({ lang, nav }: HeaderProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const locales = [
    { code: "en", label: "EN" },
    { code: "fr", label: "FR" },
    { code: "sw", label: "SW" },
    { code: "rn", label: "RN" },
  ];

  const currentLocale = locales.find((l) => l.code === lang) || locales[0];

  // Scroll-aware header transparency
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      setIsScrolled(scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    // Also listen to window resize and orientation change just in case
    window.addEventListener("resize", handleScroll);

    // Add interval as fallback for some mobile browsers in iframes
    const interval = setInterval(handleScroll, 200);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      clearInterval(interval);
    };
  }, []);

  const handleLanguageChange = (newLang: string) => {
    if (!pathname) return;
    const segments = pathname.split("/");
    if (segments.length > 1) {
      const firstSegment = segments[1];
      const validLocales = ["en", "fr", "sw", "rn"];
      if (validLocales.includes(firstSegment)) {
        segments[1] = newLang;
      } else {
        segments.splice(1, 0, newLang);
      }
    }
    const newPathname = segments.join("/");
    const query = searchParams?.toString();
    const newUrl = `${newPathname}${query ? `?${query}` : ""}`;

    setIsLangDropdownOpen(false);
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
    router.push(newUrl);
  };

  const navItems = [
    { label: nav.home || "Home", href: `/${lang}` },
    { label: nav.showroom, href: `/${lang}/showroom` },
    { label: nav.services || "Services", href: `/${lang}/services` },
    { label: nav.aboutUs || "About Us", href: `/${lang}/about` },
    { label: nav.contact || "Contact", href: `/${lang}/contact` },
  ];

  const isActive = (href: string) => {
    if (!pathname) return false;
    if (href === `/${lang}`) return pathname === href;
    return pathname === href || pathname.startsWith(href + "/");
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] w-full transition-all duration-300 pointer-events-auto ${
        isScrolled
          ? "bg-brand-obsidian/60 glass-nav border-b border-brand-espresso/50 shadow-xl shadow-black/40"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo / Brand Identification */}
          <div className="flex-shrink-0 flex items-center">
            <Link
              href={`/${lang}`}
              id="header-logo"
              className="flex items-center gap-2 hover:opacity-90 transition-opacity duration-300"
              aria-label="Skyline Motors — Premium 0 Km Showroom"
            >
              <div className="relative w-16 h-16 sm:w-20 sm:h-20">
                <Image
                  src="/assets/SKYLINE_LOGO.png"
                  alt="Skyline Motors Logo"
                  fill
                  sizes="(max-width: 768px) 64px, 80px"
                  className="object-contain"
                  priority
                />
              </div>
              <span className="text-xl font-special font-extrabold tracking-wider text-brand-platinum hover:text-brand-gold transition-colors duration-300 hidden sm:block">
                Skyline <span className="text-brand-gold">Motors</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <nav
            className="hidden lg:flex items-center space-x-6"
            aria-label="Primary navigation"
          >
            {navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-medium tracking-wide uppercase transition-colors duration-300 ${
                    active
                      ? "text-brand-gold"
                      : "text-brand-platinum/80 hover:text-brand-gold"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Area — Language Switcher + CTA + Mobile Menu */}
          <div className="flex items-center space-x-3 lg:space-x-4">
            {/* Desktop Language Switcher (Hidden on Mobile) */}
            <div className="relative hidden lg:block">
              <button
                type="button"
                onClick={() => {
                  setIsLangDropdownOpen(!isLangDropdownOpen);
                  setIsMobileMenuOpen(false);
                }}
                className="flex items-center space-x-1.5 px-2 py-1.5 rounded border border-transparent bg-transparent text-sm font-semibold tracking-wider text-brand-platinum hover:text-brand-gold hover:bg-brand-espresso/50 transition-all duration-300"
                aria-label="Select language"
                aria-expanded={isLangDropdownOpen}
              >
                <Globe className="w-4 h-4 text-brand-gold" />
                <span className="inline">{currentLocale.label}</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 text-brand-platinum/50 transition-transform duration-300 ${
                    isLangDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isLangDropdownOpen && (
                <>
                  <div
                    className="fixed inset-0 z-40"
                    onClick={() => setIsLangDropdownOpen(false)}
                  />
                  <div className="absolute right-0 mt-2 w-32 rounded-lg border border-brand-espresso bg-brand-obsidian/70 backdrop-blur-xl py-2 shadow-2xl z-50">
                    {locales.map((locale) => (
                      <button
                        key={locale.code}
                        onClick={() => handleLanguageChange(locale.code)}
                        className={`w-full text-left px-4 py-2 text-sm font-semibold tracking-wider transition-colors duration-200 ${
                          lang === locale.code
                            ? "text-brand-gold bg-brand-gold/10"
                            : "text-brand-platinum/80 hover:text-brand-gold hover:bg-brand-gold/5"
                        }`}
                      >
                        {locale.label}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Universal WhatsApp CTA */}
            <a
              href="https://wa.me/25722220000"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={
                lang === "fr"
                  ? "Contactez-nous sur WhatsApp"
                  : lang === "sw"
                    ? "Wasiliana nasi kupitia WhatsApp"
                    : lang === "rn"
                      ? "Twandikire kuri WhatsApp"
                      : "Contact us on WhatsApp"
              }
              className="flex items-center justify-center w-9 h-9 sm:w-auto sm:px-4 sm:py-2 lg:px-5 lg:py-2 space-x-0 sm:space-x-2 rounded-full border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-obsidian transition-all duration-300 shadow-lg hover:shadow-brand-gold/20"
            >
              <FaWhatsapp className="w-5 h-5 sm:w-4 sm:h-4" />
              <span className="hidden sm:inline text-xs font-bold uppercase tracking-widest">
                WhatsApp
              </span>
            </a>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center ml-1">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(!isMobileMenuOpen);
                  setIsLangDropdownOpen(false);
                }}
                className="p-2 rounded text-brand-platinum/80 hover:text-brand-gold hover:bg-brand-espresso/50 focus:outline-none transition-colors duration-200"
                aria-label="Toggle navigation menu"
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[80px] z-[90] bg-brand-obsidian/95 backdrop-blur-3xl border-t border-brand-espresso shadow-2xl pointer-events-auto">
          <div className="px-4 py-8 space-y-6 h-full overflow-y-auto">
            {/* Nav Items */}
            <div className="space-y-2">
              {navItems.map((item) => {
                const active = isActive(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block px-4 py-3 rounded-lg text-base font-semibold tracking-wide uppercase transition-colors duration-200 ${
                      active
                        ? "bg-brand-gold/10 text-brand-gold border-l-4 border-brand-gold"
                        : "text-brand-platinum/80 hover:bg-brand-gold/5 hover:text-brand-gold"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>

            {/* Mobile Language Selection inside menu */}
            <div className="pt-4 border-t border-brand-espresso">
              <p className="px-4 text-xs font-bold text-brand-platinum/50 uppercase tracking-widest mb-3">
                {nav.selectLanguage || "Select Language"}
              </p>
              <div className="grid grid-cols-2 gap-2 px-2">
                {locales.map((locale) => (
                  <button
                    key={locale.code}
                    onClick={() => handleLanguageChange(locale.code)}
                    className={`flex items-center justify-center py-3 rounded-lg text-sm font-semibold tracking-wider transition-colors duration-200 ${
                      lang === locale.code
                        ? "bg-brand-gold text-brand-obsidian border border-brand-gold"
                        : "bg-brand-obsidian border border-brand-espresso text-brand-platinum hover:text-brand-gold"
                    }`}
                  >
                    {locale.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
