/**
 * @file /components/showroom/EfficiencyCalculator.tsx
 * @description Localized interactive fuel-to-electric ROI & Sustainability savings calculator.
 * Coordinates:
 * 1. An export function `calculateSavings` referencing specific vehicle efficiency profiles (Motos, Sedans, SUVs, Vans)
 *    to evaluate charging expenses vs petrol costs in central Africa.
 * 2. An input range slider tracking dynamic monthly mileage estimates.
 * 3. Dropdowns selector to cycle active vehicle body types.
 * 4. Display of formatted savings, footnotes, and full-audit triggering buttons.
 */

"use client";

import React, { useState } from "react";

export function calculateSavings(
  monthlyKm: number,
  vehicleType: string,
): string {
  const annualKm = monthlyKm * 12;

  let fuelEfficiencyPerLiter = 12; // default Sedan
  let rangePerFullCharge = 300; // default Sedan

  const type = vehicleType.toLowerCase();
  if (type.includes("moto")) {
    fuelEfficiencyPerLiter = 35;
    rangePerFullCharge = 100;
  } else if (type.includes("sedan")) {
    fuelEfficiencyPerLiter = 12;
    rangePerFullCharge = 300;
  } else if (type.includes("suv")) {
    fuelEfficiencyPerLiter = 8;
    rangePerFullCharge = 350;
  } else if (type.includes("van")) {
    fuelEfficiencyPerLiter = 6;
    rangePerFullCharge = 250;
  }

  // Fuel Price (Petrol): $1.00 USD per Liter.
  const annualFuelCost = (annualKm / fuelEfficiencyPerLiter) * 1.0;

  // Charging Cost (Electric): $2.00 USD for a "Full Charge".
  const fullChargesPerYear = annualKm / rangePerFullCharge;
  const annualElectricCost = fullChargesPerYear * 2.0;

  const annualSavings = annualFuelCost - annualElectricCost;

  // Format as a currency string
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(annualSavings);
}

interface EfficiencyCalculatorProps {
  dictionary?: Record<string, unknown>;
}

export default function EfficiencyCalculator({ dictionary }: EfficiencyCalculatorProps) {
  const [kmValue, setKmValue] = useState(3000);
  const [vehicleType, setVehicleType] = useState("Sedan");

  const dictCast = (dictionary || {}) as unknown as Record<string, Record<string, string>>;
  const calc = dictCast.efficiencyCalculator || {
    roiAnalytics: "ROI Analytics",
    sustainabilityCalculator: "Sustainability Calculator",
    selectVehicleSegment: "Select Vehicle Segment",
    commercialVan: "Commercial Logistics (Van)",
    citySedan: "City Commuter (Sedan)",
    regionalSuv: "Regional Terrain (SUV)",
    personalMoto: "Personal Commuter (Moto)",
    estimatedMonthlyKm: "Estimated Monthly Kilometers",
    annualSavingsEstimate: "Annual Savings Estimate",
    calculatedFooter: "Calculated vs. current fuel prices in Kinshasa/Bujumbura.",
    requestAudit: "Request Full Audit"
  };

  return (
    <section className="bg-surface-container-lowest py-12 sm:py-24 px-margin-mobile md:px-margin-desktop">
      <div
        className="max-w-4xl mx-auto glass-dark p-6 sm:p-12 border border-primary/30 relative shadow-2xl"
        style={{
          background: "rgba(18, 20, 20, 0.8)",
          backdropFilter: "blur(12px)",
        }}
      >
        <div className="text-center mb-8 sm:mb-12">
          <span className="text-primary text-[11px] sm:text-xs md:text-sm font-semibold tracking-[0.35em] uppercase mb-2 block animate-pulse">
            {calc.roiAnalytics}
          </span>
          <h2 className="font-headline-lg text-[18px] sm:text-[24px] md:text-[28px] lg:text-[36px] leading-[1.25] text-on-surface">
            {calc.sustainabilityCalculator}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-8">
            <div>
              <label className="block text-xs sm:text-sm font-special text-secondary uppercase mb-2 sm:mb-3">
                {calc.selectVehicleSegment}
              </label>
              <select
                value={vehicleType}
                onChange={(e) => setVehicleType(e.target.value)}
                className="w-full bg-surface border border-outline-variant/40 text-on-surface py-3 px-4 focus:border-primary focus:ring-0 rounded text-sm sm:text-base"
              >
                <option value="Van">{calc.commercialVan}</option>
                <option value="Sedan">{calc.citySedan}</option>
                <option value="SUV">{calc.regionalSuv}</option>
                <option value="Moto">{calc.personalMoto}</option>
              </select>
            </div>
            <div>
              <label className="block text-xs sm:text-sm font-special text-secondary uppercase mb-2 sm:mb-3">
                {calc.estimatedMonthlyKm}
              </label>
              <input
                className="w-full accent-primary h-2 bg-surface-container-highest rounded-full cursor-pointer"
                max="10000"
                min="1000"
                step="500"
                type="range"
                value={kmValue}
                onChange={(e) => setKmValue(parseInt(e.target.value))}
              />
              <div className="flex justify-between mt-2 text-xs sm:text-label-lg text-primary select-none">
                <span>1,000 km</span>
                <span className="font-bold">{kmValue.toLocaleString()} km</span>
                <span>10,000 km</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center bg-background border border-primary/20 p-6 sm:p-8 rounded">
            <span className="font-special text-secondary text-[11px] sm:text-xs uppercase mb-2 text-center tracking-wider">
              {calc.annualSavingsEstimate}
            </span>
            <div className="text-3xl sm:text-[42px] md:text-5xl lg:text-6xl font-display text-primary tracking-tight mb-2 font-bold">
              {calculateSavings(kmValue, vehicleType)}
            </div>
            <span className="font-special text-[11px] sm:text-base md:text-lg text-secondary-fixed-dim text-center h-12 flex items-center">
              {calc.calculatedFooter}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
