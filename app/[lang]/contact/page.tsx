/**
 * @file /app/[lang]/contact/page.tsx
 * @description Server-side gateway page for the Contact Form.
 * This file retrieves the language params from Next.js server context, dynamically
 * loads the corresponding language dictionary, and safely renders the client-side
 * interactive ContactPageClient page component.
 */

import { getDictionary } from "@/lib/get-dictionary";
import ContactPageClient from "./ContactPageClient";

interface PageProps {
  params: Promise<{ lang: string }>;
}

export default async function ContactPage({ params }: PageProps) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return <ContactPageClient lang={lang} dict={dict} />;
}
