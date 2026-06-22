"use client";

import React, { useEffect, useRef, useState } from "react";
import * as maptilersdk from "@maptiler/sdk";
import "@maptiler/sdk/dist/maptiler-sdk.css";

// ============================================================================
// CHARGING STATIONS MOCKUP DATA
// You can easily modify, update coordinates, or append new stations here.
// Coordinates are represented as:
//   lat: Latitude (e.g. -3.3822 for Bujumbura)
//   lng: Longitude (e.g. 29.3644 for Bujumbura)
//   status: 'Operational' (rendered with Yellow/Gold tag) or 'Expanding' (Gray)
// ============================================================================
export interface Station {
  id: string;
  name: string;
  lat: number;
  lng: number;
  status: "Operational" | "Expanding";
  connectedPoints?: number;
}

export const CHARGING_STATIONS: Station[] = [
  {
    id: "buj",
    name: "Bujumbura Hub",
    lat: -3.3822,
    lng: 29.3644,
    status: "Operational",
    connectedPoints: 50,
  },
  {
    id: "kin",
    name: "Kinshasa Superhub",
    lat: -4.4419,
    lng: 15.2663,
    status: "Operational",
    connectedPoints: 72,
  },
  {
    id: "gom",
    name: "Goma Station",
    lat: -1.6585,
    lng: 29.2205,
    status: "Expanding",
    connectedPoints: 20,
  },
];

interface InteractiveMapProps {
  apiKey: string;
  s: any;
}

export default function InteractiveMap({ apiKey, s }: InteractiveMapProps) {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<maptilersdk.Map | null>(null);
  const [selectedStation, setSelectedStation] = useState<Station | null>(null);

  const hasValidKey =
    Boolean(apiKey) && apiKey !== "YOUR_API_KEY" && apiKey.trim() !== "";

  useEffect(() => {
    if (!hasValidKey) return;

    // Set the MapTiler API Key
    maptilersdk.config.apiKey = apiKey.trim();

    if (map.current) return; // Prevent double initialization
    if (!mapContainer.current) return;

    try {
      // Initialize MapTiler Map (STREETS visual style is highly modern and responsive)
      const mapInstance = new maptilersdk.Map({
        container: mapContainer.current,
        style: maptilersdk.MapStyle.STREETS.DARK,
        center: [22.5, -2.8], // Centralized viewing for East/Central Africa (Burundi / DRC)
        zoom: 4.5,
      });

      map.current = mapInstance;

      // Add zoom and rotation controls to the top-right
      mapInstance.addControl(new maptilersdk.NavigationControl(), "top-right");

      // Process and attach custom styled markers for each station
      CHARGING_STATIONS.forEach((station) => {
        const isOperational = station.status === "Operational";

        // Create a custom modern HTML marker
        const markerElement = document.createElement("div");
        markerElement.className =
          "relative flex items-center justify-center cursor-pointer group";
        markerElement.style.width = "32px";
        markerElement.style.height = "32px";

        // Outer pulsing ring for active operational ports
        if (isOperational) {
          const radarRing = document.createElement("span");
          radarRing.className =
            "absolute inline-flex h-full w-full rounded-full bg-[#f2ca50] opacity-40 animate-ping";
          markerElement.appendChild(radarRing);
        }

        // Inner solid badge container
        const badgeContainer = document.createElement("div");
        badgeContainer.className =
          "relative flex items-center justify-center w-8 h-8 rounded-full shadow-lg border-2 transition-all duration-300 transform group-hover:scale-110";
        badgeContainer.style.backgroundColor = isOperational
          ? "#f2ca50"
          : "#4b5563";
        badgeContainer.style.borderColor = "#1e2020";

        // Charging Bolt Icon / Dot
        const iconContainer = document.createElement("span");
        iconContainer.className =
          "material-symbols-outlined text-[16px] select-none";
        iconContainer.style.color = "#1e2020";
        iconContainer.innerText = "bolt";
        badgeContainer.appendChild(iconContainer);
        markerElement.appendChild(badgeContainer);

        // Tooltip description
        const tooltip = document.createElement("div");
        tooltip.className =
          "absolute -top-10 left-1/2 transform -translate-x-1/2 bg-[#1e2020] text-[#f2ca50] text-[11px] font-bold py-1 px-2.5 rounded shadow-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all pointer-events-none border border-[#f2ca50]/20 z-50";
        tooltip.innerText = station.name;
        markerElement.appendChild(tooltip);

        // Bind interactive Popup layout
        const popupContent = `
          <div style="font-family: inherit; padding: 6px 4px; min-width: 155px; text-align: left;">
            <h4 style="font-size: 14px; font-weight: 700; margin: 0 0 6px 0; color: #1e2020; border-bottom: 1px solid #e5e7eb; padding-bottom: 4px;">
              ${station.name}
            </h4>
            <div style="display: flex; align-items: center; gap: 6px; margin-bottom: 6px;">
              <span style="display: inline-block; width: 8px; height: 8px; border-radius: 50%; background-color: ${isOperational ? "#10b981" : "#f59e0b"};"></span>
              <span style="font-size: 11px; font-weight: 600; color: #4b5563;">Status: ${station.status}</span>
            </div>
            ${
              station.connectedPoints
                ? `
              <div style="background-color: #f3f4f6; padding: 4px 6px; border-radius: 4px; font-size: 11px; font-weight: 500; color: #1f2937; display: flex; align-items: center; gap: 4px;">
                <span>🔌</span> <span>${station.connectedPoints} Connected Points</span>
              </div>
            `
                : ""
            }
          </div>
        `;

        const maptilerPopup = new maptilersdk.Popup({
          offset: 12,
          closeButton: true,
          closeOnClick: true,
        }).setHTML(popupContent);

        // Render marker wrapper
        new maptilersdk.Marker({ element: markerElement })
          .setLngLat([station.lng, station.lat])
          .setPopup(maptilerPopup)
          .addTo(mapInstance);
      });
    } catch (error) {
      console.error("Failed to initialize MapTiler map", error);
    }

    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, [apiKey, hasValidKey]);

  if (!hasValidKey) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-surface-container border border-outline-variant rounded-lg p-6 font-sans min-h-[400px]">
        <div className="text-center max-w-sm">
          <div className="flex justify-center mb-4">
            <span className="material-symbols-outlined text-[48px] text-primary">
              map
            </span>
          </div>
          <h2 className="text-xl font-bold text-white mb-2">
            MapTiler API Key Required
          </h2>
          <p className="text-sm text-gray-400 mb-6 leading-relaxed">
            We have migrated our charging grid map to <strong>MapTiler</strong>.
            Obtain a completely free key in seconds to load the fully
            interactive map.
          </p>
          <div className="text-left bg-background p-4 rounded-md text-sm text-gray-300 leading-relaxed border border-outline-variant">
            <p className="mb-2">
              <strong>Quick Setup:</strong>
            </p>
            <ol className="list-decimal pl-5 space-y-1.5 text-gray-400">
              <li>
                Open <strong>Settings</strong> (⚙️ top-right of your AI Studio
                browser)
              </li>
              <li>
                Select <strong>Secrets</strong>
              </li>
              <li>
                Create a secret named: <code>MAPTILER_API_KEY</code>
              </li>
            </ol>
          </div>
        </div>
      </div>
    );
  }

  // Quick action navigation shortcuts
  const flyToStation = (station: Station) => {
    if (map.current) {
      map.current.flyTo({
        center: [station.lng, station.lat],
        zoom: 15,
        essential: true,
      });
      setSelectedStation(station);
    }
  };

  return (
    <div className="relative w-full h-full min-h-[450px] rounded-lg overflow-hidden border border-outline-variant shadow-2xl flex flex-col md:flex-row">
      {/* Sidebar selection overlay */}
      <div className="md:absolute top-4 left-4 z-10 w-full md:w-64 bg-background/95 backdrop-blur-md rounded-lg border border-outline-variant p-4 shadow-xl pointer-events-auto">
        <h3 className="font-sans font-bold text-white text-sm mb-3 uppercase tracking-wider border-b border-outline-variant pb-2">
          {s.findStation || "Charging Station Finder"}
        </h3>
        <div className="space-y-2 max-h-[160px] md:max-h-[220px] overflow-y-auto">
          {CHARGING_STATIONS.map((station) => (
            <button
              key={station.id}
              onClick={() => flyToStation(station)}
              type="button"
              className={`w-full text-left p-2.5 rounded-md transition-all flex items-center justify-between border ${
                selectedStation?.id === station.id
                  ? "border-primary bg-primary/10 text-primary"
                  : "border-transparent hover:bg-surface-container text-gray-300 hover:text-white"
              }`}
            >
              <div className="flex flex-col">
                <span className="text-xs font-bold leading-none mb-1">
                  {station.name}
                </span>
                <span className="text-[10px] opacity-75">
                  Lat: {station.lat.toFixed(4)}, Lng: {station.lng.toFixed(4)}
                </span>
              </div>
              <span
                className={`w-2.5 h-2.5 rounded-full ${
                  station.status === "Operational"
                    ? "bg-primary"
                    : "bg-gray-500"
                }`}
              />
            </button>
          ))}
        </div>
      </div>

      {/* Main Map Container */}
      <div className="flex-grow w-full h-full relative" ref={mapContainer} />

      {/* Bottom informational bar */}
      <div className="absolute bottom-6 right-6 p-4 bg-background/95 backdrop-blur-md border border-outline-variant pointer-events-none z-10 rounded-lg shadow-xl">
        <p className="font-label-sm text-gray-400 mb-1.5 uppercase tracking-tighter">
          {s.realTimeStatus || "Real-time Status"}
        </p>
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-primary text-sm animate-pulse">
            bolt
          </span>
          <span className="text-body-md text-primary font-bold">
            {s.connectedPoints || "142 Connected Points"}
          </span>
        </div>
      </div>
    </div>
  );
}
