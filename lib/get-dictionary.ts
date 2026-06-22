/**
 * @file /lib/get-dictionary.ts
 * @description Localized Dynamic Translation JSON dictionary loading system.
 * This establishes:
 * 1. An export Type `Dictionary` matched to the comprehensive base English JSON definitions schema.
 * 2. Promise-wrapped lazy file loaders mapping the active locale codes (en, fr, sw, rn) to their respective dictionary payloads.
 * 3. Standard fallback resolution returning standard English mappings if requested files fail resolution.
 */

import type enDictionary from "@/dictionaries/en.json";

export type Dictionary = typeof enDictionary;

const dictionaries = {
  en: () => import("@/dictionaries/en.json").then((module) => module.default),
  fr: () => import("@/dictionaries/fr.json").then((module) => module.default),
  sw: () => import("@/dictionaries/sw.json").then((module) => module.default),
  rn: () => import("@/dictionaries/rn.json").then((module) => module.default),
};

export const getDictionary = async (locale: string): Promise<Dictionary> => {
  const loader = dictionaries[locale as keyof typeof dictionaries] || dictionaries.en;
  return loader();
};
