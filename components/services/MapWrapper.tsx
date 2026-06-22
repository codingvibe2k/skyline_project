"use client";

import dynamic from "next/dynamic";

const InteractiveMap = dynamic(
  () => import("@/components/services/InteractiveMap"),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full flex items-center justify-center bg-surface-container rounded-lg p-6 font-sans text-gray-400 min-h-[450px]">
        Loading Interactive Map...
      </div>
    ),
  },
);

interface MapWrapperProps {
  apiKey: string;
  s: any;
}

export default function MapWrapper({ apiKey, s }: MapWrapperProps) {
  return <InteractiveMap apiKey={apiKey} s={s} />;
}
