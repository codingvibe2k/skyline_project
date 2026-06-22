/**
 * @file /components/showroom/InventoryVehicleCard.tsx
 * @description Card component for rendering localized vehicle summaries on index catalogs.
 * It features:
 * 1. Aspect-ratio image thumbnails equipped with visual scale transforms and status tags (e.g. Pristine, 0km).
 * 2. Horizontally scrollable summary performance metrics (Range, Battery, Power).
 * 3. Double action controls:
 *    - 'Explore Vehicle' routing directly to dynamic details views.
 *    - 'Reserve Now' opening instant WhatsApp chat queries with pre-populated vehicle purchase contexts.
 */

import React from "react";
import Image from "next/image";
import Link from "next/link";

interface InventoryVehicleCardProps {
  id: string;
  name: string;
  lang: string;
  imageUrl: string;
  tag1: string;
  tag2?: string;
  specs: {
    label: string;
    value: string;
    unit: string;
  }[];
  dictionary: {
    showroom: {
      exploreVehicle: string;
      reserveNow?: string;
      reserved?: string;
    };
  };
}

export default function InventoryVehicleCard({
  id,
  name,
  lang,
  imageUrl,
  tag1,
  tag2,
  specs,
  dictionary,
}: InventoryVehicleCardProps) {
  return (
    <article className="group bg-brand-obsidian border border-transparent hover:border-brand-gold transition-all duration-500 rounded-sm mx-4 md:mx-[50px]">
      <div className="relative overflow-hidden aspect-[21/9] w-full">
        <Image
          src={imageUrl}
          alt={name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          referrerPolicy="no-referrer"
          unoptimized
        />
        <div className="absolute top-6 left-6 flex gap-2">
          {tag1 && (
            <span className="px-3 py-1 bg-brand-obsidian/60 backdrop-blur-md border border-brand-espresso text-brand-gold text-[10px] sm:text-xs uppercase tracking-widest">
              {tag1}
            </span>
          )}
          {tag2 && (
            <span className="px-3 py-1 bg-brand-obsidian/60 backdrop-blur-md border border-brand-espresso text-brand-platinum/70 text-[10px] sm:text-xs uppercase tracking-widest hidden sm:inline-block">
              {tag2}
            </span>
          )}
        </div>
      </div>
      
      <div className="p-6 sm:p-10 flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8">
        <div className="space-y-4 flex-grow w-full">
          <h2 className="font-display text-2xl sm:text-3xl md:text-5xl text-brand-gold">{name}</h2>
          <div className="flex flex-row flex-nowrap items-center gap-6 sm:gap-12 border-t border-brand-espresso pt-6 w-full overflow-x-auto scrollbar-none">
            {specs.map((spec, index) => (
              <div key={index} className="shrink-0">
                <p className="text-brand-platinum/50 text-[10px] sm:text-xs uppercase mb-1 tracking-widest whitespace-nowrap">
                  {spec.label}
                </p>
                <p className="text-brand-platinum font-sans text-xl sm:text-3xl font-medium whitespace-nowrap">
                  {spec.value} <span className="text-xs sm:text-base font-normal text-brand-platinum/50">{spec.unit}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full lg:w-auto pt-6 lg:pt-0 shrink-0">
          <Link
            href={`/${lang}/showroom/${id}`}
            className="px-4 sm:px-8 py-2.5 sm:py-4 bg-brand-gold text-brand-obsidian text-xs sm:text-sm font-semibold uppercase tracking-widest hover:brightness-110 transition-all active:scale-95 text-center flex-grow whitespace-nowrap rounded-sm"
          >
            {dictionary.showroom.exploreVehicle || "Explore Vehicle"}
          </Link>
          <a
            href={`https://wa.me/25722220000?text=${encodeURIComponent(name)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 sm:px-8 py-2.5 sm:py-4 border border-brand-gold text-brand-gold text-xs sm:text-sm font-semibold uppercase tracking-widest hover:bg-brand-gold hover:text-brand-obsidian transition-all active:scale-95 text-center flex-grow whitespace-nowrap rounded-sm"
          >
            {dictionary.showroom.reserveNow || "Reserve Now"}
          </a>
        </div>
      </div>
    </article>
  );
}
