"use client";

import React, { useEffect, useRef, useState } from "react";
import "leaflet/dist/leaflet.css";

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
    lat: -3.3599557192429463,
    lng: 29.3445737409039,
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
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);
  const markersRef = useRef<{ [key: string]: any }>({});
  const [selectedStation, setSelectedStation] = useState<Station | null>(null);
  const [isLeafletLoaded, setIsLeafletLoaded] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Check if MapTiler API Key looks valid
  const hasValidMapTilerKey =
    Boolean(apiKey) && apiKey !== "YOUR_API_KEY" && apiKey.trim() !== "";

  useEffect(() => {
    let active = true;

    // Load Leaflet dynamically on client-side to prevent "window is not defined" error in Next SSR
    import("leaflet").then((L) => {
      if (!active) return;
      setIsLeafletLoaded(true);

      if (!mapContainerRef.current) return;
      if (mapInstanceRef.current) return; // Already initialized

      // Fix default marker icon issues in Webpack/Turbopack with Leaflet
      delete (L.Icon.Default.prototype as any)._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
        iconRetinaUrl:
          "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
        shadowUrl:
          "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
      });

      // Use MapTiler high-res vector style tiles if a key exists, otherwise fallback to friendly OpenStreetMap tiles
      const tileUrl = hasValidMapTilerKey
        ? `https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}@2x.png?key=${apiKey.trim()}`
        : "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";

      const mapOptions = {
        center: [-2.8, 22.5] as [number, number], // Focused centered view for DRC / Burundi
        zoom: 5,
        zoomControl: false, // We'll add custom positioned zoom control
        scrollWheelZoom: true,
        attributionControl: true,
      };

      const mapInstance = L.map(mapContainerRef.current, mapOptions);
      mapInstanceRef.current = mapInstance;

      // Add custom zoom controller
      L.control.zoom({ position: "topright" }).addTo(mapInstance);

      // Render the tile layer
      L.tileLayer(tileUrl, {
        attribution: hasValidMapTilerKey ? "&copy; 2026" : "&copy; 2026",
        tileSize: hasValidMapTilerKey ? 512 : 256,
        zoomOffset: hasValidMapTilerKey ? -1 : 0,
        maxZoom: 19,
      }).addTo(mapInstance);

      // Draw custom interactive HTML markers for each station
      CHARGING_STATIONS.forEach((station) => {
        const isOperational = station.status === "Operational";

        // Render custom styled pulsing HTML element with a location Pin/Icon
        const customIcon = L.divIcon({
          className: "custom-leaflet-marker-wrapper",
          html: `
            <div class="relative flex items-center justify-center" style="width: 36px; height: 36px;">
              ${isOperational ? '<span class="absolute inline-flex h-full w-full rounded-full bg-[#f2ca50] opacity-30 animate-pulse" style="animation-duration: 1.5s;"></span>' : ""}
              <div class="relative flex items-center justify-center w-10 h-9 rounded-full transition-all duration-300 hover:scale-125">
                <span class="material-symbols-outlined" style="font-family: 'Material Symbols Outlined'; font-size: 30px; color: #1e2020; font-weight: 100; user-select: none;">location_on</span>
              </div>
            </div>
          `,
          iconSize: [36, 36],
          iconAnchor: [18, 18],
        });

        // Setup Info Window / Popup Content incorporating client global styling and fonts
        const popupHTML = `
          <div style="font-family: var(--font-sans), system-ui, sans-serif; padding: 4px; min-width: 165px; text-align: left;">
            <h4 style="font-size: 14px; font-weight: 700; margin: 0 0 6px 0; color: #111827; border-bottom: 2px solid #e5e7eb; padding-bottom: 4px; font-family: var(--font-sans), sans-serif;">
              ${station.name}
            </h4>
            <div style="display: flex; align-items: center; gap: 6px; margin-bottom: 8px;">
              <span style="display: inline-block; width: 8px; height: 8px; border-radius: 50%; background-color: ${isOperational ? "#f2ca50" : "#6b7280"};"></span>
              <span style="font-size: 11px; font-weight: 600; color: #4b5563; font-family: var(--font-sans), sans-serif;">Status: ${station.status}</span>
            </div>
            ${
              station.connectedPoints
                ? `
              <div style="background-color: #f3f4f6; padding: 6px 8px; border-radius: 6px; font-size: 11px; font-weight: 600; color: #1f2937; display: flex; align-items: center; gap: 6px; font-family: var(--font-mono), monospace;">
                <span>🔌</span> <span>${station.connectedPoints} Connected Points</span>
              </div>
            `
                : ""
            }
          </div>
        `;

        const markerPopup = L.popup({
          offset: [0, -4],
          closeButton: true,
          className: "custom-leaflet-popup",
        }).setContent(popupHTML);

        const markerInstance = L.marker([station.lat, station.lng], {
          icon: customIcon,
        })
          .bindPopup(markerPopup)
          .addTo(mapInstance);

        // Track marker instance to trigger it programmatically via sidebar click
        markersRef.current[station.id] = markerInstance;

        // Custom marker click listener: Smoothly fly-to/zoom closer upon clicking location pins on the map
        markerInstance.on("click", () => {
          setSelectedStation(station);
          mapInstance.flyTo([station.lat, station.lng], 17, {
            animate: true,
            duration: 5,
          });
        });
      });
    });

    return () => {
      active = false;
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [apiKey, hasValidMapTilerKey]);

  // Handle fly tours upon sidebar selection click
  const handleFlyToStation = (station: Station) => {
    if (mapInstanceRef.current) {
      mapInstanceRef.current.flyTo([station.lat, station.lng], 17, {
        animate: true,
        duration: 5,
      });
      setSelectedStation(station);

      // Open the corresponding popup
      const marker = markersRef.current[station.id];
      if (marker) {
        marker.openPopup();
      }
    }
  };

  return (
    <div className="relative w-full h-full min-h-[480px] rounded-lg overflow-hidden border border-outline-variant shadow-2xl flex flex-col md:flex-row font-sans">
      {/* Sidebar Navigation (Collapsible) */}
      {isSidebarOpen ? (
        <div className="w-full md:w-64 bg-background/95 backdrop-blur-md border-b md:border-b-0 md:border-r border-outline-variant p-4 z-10 flex flex-col justify-between shrink-0 pointer-events-auto transition-all duration-300">
          <div>
            <div className="flex items-center justify-between border-b border-outline-variant pb-2 mb-3">
              <h3 className="font-sans font-bold text-white text-xs uppercase tracking-wider">
                {s.findStation || "Charging Station Finder"}
              </h3>
              <button
                type="button"
                onClick={() => setIsSidebarOpen(false)}
                className="text-gray-400 hover:text-primary transition-colors cursor-pointer flex items-center justify-center p-1 rounded hover:bg-surface-container"
                title="Collapse Panel"
              >
                <span className="material-symbols-outlined text-[18px]">
                  menu_open
                </span>
              </button>
            </div>

            <div className="space-y-2 max-h-[160px] md:max-h-[260px] overflow-y-auto pr-1">
              {CHARGING_STATIONS.map((station) => {
                const isActive = selectedStation?.id === station.id;
                return (
                  <button
                    key={station.id}
                    onClick={() => handleFlyToStation(station)}
                    type="button"
                    className={`w-full text-left p-2.5 rounded-md transition-all flex items-center justify-between border font-sans ${
                      isActive
                        ? "border-primary bg-primary/10 text-primary font-semibold"
                        : "border-transparent hover:bg-surface-container text-gray-300 hover:text-white"
                    }`}
                  >
                    <div className="flex flex-col">
                      <span className="text-xs font-bold leading-none mb-1">
                        {station.name}
                      </span>
                      <span className="text-[10px] opacity-75 font-mono">
                        Lat: {station.lat.toFixed(4)}, Lng:{" "}
                        {station.lng.toFixed(4)}
                      </span>
                    </div>
                    <span
                      className={`w-2.5 h-2.5 rounded-full ${
                        station.status === "Operational"
                          ? "bg-primary animate-pulse"
                          : "bg-gray-500"
                      }`}
                    />
                  </button>
                );
              })}
            </div>
          </div>

          {/* API connection indicator badges */}
          <div className="mt-4 pt-3 border-t border-outline-variant font-sans">
            {hasValidMapTilerKey ? (
              <div className="flex items-center gap-2 text-[11px] text-green-400">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                <span>Skyline engine active</span>
              </div>
            ) : (
              <div className="flex flex-col gap-1.5 p-2 bg-yellow-500/10 rounded border border-yellow-500/20">
                <div className="flex items-center gap-2 text-[10px] text-yellow-400 font-semibold mb-0.5">
                  <span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse"></span>
                  <span>OpenStreetMap fallback active</span>
                </div>
                <p className="text-[9px] text-gray-400 leading-normal">
                  To upgrade to MapTiler HD vectors, add secret named{" "}
                  <code>MAPTILER_API_KEY</code>.
                </p>
              </div>
            )}
          </div>
        </div>
      ) : (
        /* Reduced Collapsed Map Icon Mode */
        <button
          onClick={() => setIsSidebarOpen(true)}
          type="button"
          className="absolute top-4 left-4 z-20 w-11 h-11 bg-background/95 border border-outline-variant text-[#f2ca50] rounded-lg shadow-xl cursor-pointer hover:bg-primary hover:text-background flex items-center justify-center transition-all duration-300 transform hover:scale-105"
          title="Open "
        >
          <span className="material-symbols-outlined text-[22px]">map</span>
        </button>
      )}

      {/* Map Display Frame */}
      <div className="flex-grow relative h-[380px] md:h-auto min-h-[350px] bg-surface-container flex items-center justify-center">
        {!isLeafletLoaded && (
          <div className="absolute inset-0 z-50 flex items-center justify-center bg-surface-container/95 flex-col gap-3 font-sans">
            <span className="material-symbols-outlined text-[36px] text-primary animate-spin">
              progress_activity
            </span>
            <span className="text-sm text-gray-400">Booting Map Canvas...</span>
          </div>
        )}
        <div
          ref={mapContainerRef}
          className="absolute inset-0 w-full h-full"
          style={{ zIndex: 1 }}
        />
      </div>

      {/* Real-time details HUD */}
      <div className="absolute bottom-6 right-6 p-4 bg-background/95 backdrop-blur-md border border-outline-variant pointer-events-none z-10 rounded-lg shadow-2xl font-sans">
        <p className="font-label-sm text-gray-400 mb-1.5 uppercase tracking-tighter text-[10px]">
          {s.realTimeStatus || "Real-time Status"}
        </p>
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-primary text-sm animate-pulse">
            bolt
          </span>
          <span className="text-body-md text-primary font-bold font-mono">
            {s.connectedPoints || "142 Connected Points"}
          </span>
        </div>
      </div>
    </div>
  );
}
