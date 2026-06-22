/**
 * @file /components/showroom/InventorySearch.tsx
 * @description Localized search filter component displayed within the showroom inventory catalog view.
 * It provides:
 * 1. A search input container flanked by a Lucide magnifying-glass icon to search descriptions.
 * 2. Categorization selector boxes (filtering by brands like BYD/MG, body types like Sedans, or operational run distances).
 * 3. Fallback translation resolutions to load text descriptions when dynamic locale dictionaries are not fully pre-loaded.
 */

"use client";

import React from "react";
import { Search } from "lucide-react";

interface InventorySearchProps {
  dictionary?: any;
}

export default function InventorySearch({ dictionary }: InventorySearchProps) {
  const show = (dictionary && dictionary.showroom) || {
    searchPlaceholder: "Search our electric collection...",
    brand: "Brand",
    bodyType: "Body Type",
    rangeFilter: "Range"
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
      <div className="bg-brand-obsidian border border-brand-espresso p-2 flex flex-col md:flex-row gap-4 items-center">
        <div className="flex-grow w-full relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-platinum/50 w-5 h-5" />
          <input
            className="w-full bg-transparent border-none focus:ring-0 pl-12 pr-4 py-3 text-brand-platinum placeholder:text-brand-platinum/50 text-sm md:text-base outline-none"
            placeholder={show.searchPlaceholder}
            type="text"
          />
        </div>
        <div className="flex gap-4 w-full md:w-auto">
          <select className="bg-brand-espresso border-none text-brand-platinum/80 text-sm py-3 pl-4 pr-10 focus:ring-1 focus:ring-brand-gold cursor-pointer w-full md:w-36 appearance-none outline-none rounded">
            <option>{show.brand}</option>
            <option>BYD</option>
            <option>MG</option>
            <option>Toyota</option>
          </select>
          <select className="bg-brand-espresso border-none text-brand-platinum/80 text-sm py-3 pl-4 pr-10 focus:ring-1 focus:ring-brand-gold cursor-pointer w-full md:w-36 appearance-none outline-none rounded">
            <option>{show.bodyType}</option>
            <option>SUV</option>
            <option>Sedan</option>
          </select>
          <select className="bg-brand-espresso border-none text-brand-platinum/80 text-sm py-3 pl-4 pr-10 focus:ring-1 focus:ring-brand-gold cursor-pointer w-full md:w-36 appearance-none outline-none rounded">
            <option>{show.rangeFilter}</option>
            <option>400+ km</option>
            <option>500+ km</option>
            <option>600+ km</option>
          </select>
        </div>
      </div>
    </section>
  );
}
