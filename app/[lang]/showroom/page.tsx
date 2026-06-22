/**
 * @file /app/[lang]/showroom/page.tsx
 * @description Main database index page for the vehicle showroom.
 * This file pulls all factory-fresh electric vehicle lines (BYD, MG, Toyota) from local data,
 * and compiles them alongside search filters, category dropdowns, and individual overview list cards.
 * It is fully localized and responsive.
 */

import { getDictionary } from "@/lib/get-dictionary";
import InventorySearch from "@/components/showroom/InventorySearch";
import InventoryVehicleCard from "@/components/showroom/InventoryVehicleCard";
import { vehicles } from "@/lib/data/vehicles";

interface PageProps {
  params: Promise<{ lang: string }>;
}

export default async function ShowroomPage({ params }: PageProps) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  const vehicleList = Object.values(vehicles);

  return (
    <main className="flex flex-col min-h-screen pt-32 pb-20 bg-brand-obsidian">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center animate-fade-in">
        <h1 className="font-serif text-5xl md:text-6xl text-brand-gold mb-4">
          {dict.showroom?.inventory || "Inventory"}
        </h1>
        <p className="text-brand-platinum/70 max-w-2xl mx-auto">
          {dict.hero?.description || "Discover our exclusive fleet of factory-fresh electric vehicles."}
        </p>
      </div>

      <InventorySearch dictionary={dict} />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 w-full">
        {vehicleList.map((vehicle) => (
          <InventoryVehicleCard
            key={vehicle.id}
            id={vehicle.id}
            name={vehicle.name}
            imageUrl={vehicle.images.exteriorMain || vehicle.images.heroImage}
            lang={lang}
            tag1={vehicle.tag1}
            tag2={vehicle.tag2}
            specs={vehicle.summarySpecs}
            dictionary={dict}
          />
        ))}
      </section>
    </main>
  );
}
