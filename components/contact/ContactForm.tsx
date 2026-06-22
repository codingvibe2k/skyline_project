/**
 * @file /components/contact/ContactForm.tsx
 * @description Standard reusable client-side Contact Form component.
 * This form is configured with full-width fields including:
 * 1. Name and Email input rows with hover borders.
 * 2. Selectable corporate subject matters (procurement, servicing, fleet, technical, partnerships).
 * 3. Text area message input.
 * 4. Required digital data consent validation check.
 * 5. Visual response loaders showing submitting and successful status phases.
 */

"use client";

import React, { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">(
    "idle",
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    setTimeout(() => {
      setStatus("success");
      const form = e.target as HTMLFormElement;
      setTimeout(() => {
        setStatus("idle");
        form.reset();
      }, 3000);
    }, 1500);
  };

  return (
    <form className="space-y-8" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-2">
          <label className="block font-special uppercase text-on-surface-variant tracking-wider">
            Name
          </label>
          <input
            type="text"
            placeholder="John Doe"
            required
            className="w-full bg-surface-container-highest border border-outline-variant/50 p-4 text-on-surface focus:outline-none focus:border-primary transition-colors placeholder:text-on-surface-variant/30"
          />
        </div>
        <div className="space-y-2">
          <label className="block font-label-sm uppercase text-on-surface-variant tracking-wider">
            Email Address
          </label>
          <input
            type="email"
            placeholder="john@example.com"
            required
            className="w-full bg-surface-container-highest border border-outline-variant/50 p-4 text-on-surface focus:outline-none focus:border-primary transition-colors placeholder:text-on-surface-variant/30"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="block font-label-sm uppercase text-on-surface-variant tracking-wider">
          Subject
        </label>
        <select
          className="w-full bg-surface-container-highest border border-outline-variant/50 p-4 text-on-surface focus:outline-none focus:border-primary transition-colors appearance-none cursor-pointer"
          defaultValue="Vehicle Procurement"
        >
          <option value="Vehicle Procurement">Vehicle Procurement</option>
          <option value="Service Appointment">Service Appointment</option>
          <option value="Fleet Solutions">Fleet Solutions</option>
          <option value="Technical Support">Technical Support</option>
          <option value="Partnerships">Partnerships</option>
        </select>
      </div>

      <div className="space-y-2">
        <label className="block font-label-sm uppercase text-on-surface-variant tracking-wider">
          Message
        </label>
        <textarea
          rows={6}
          required
          placeholder="Details of your inquiry..."
          className="w-full bg-surface-container-highest border border-outline-variant/50 p-4 text-on-surface focus:outline-none focus:border-primary transition-colors placeholder:text-on-surface-variant/30 resize-none"
        ></textarea>
      </div>

      <div className="flex items-center gap-4 py-4">
        <input
          type="checkbox"
          id="consent"
          required
          className="w-5 h-5 accent-primary bg-surface-container border-outline-variant rounded-sm cursor-pointer"
        />
        <label
          htmlFor="consent"
          className="text-label-sm text-on-surface-variant cursor-pointer"
        >
          I agree to the processing of my personal data according to the privacy
          policy.
        </label>
      </div>

      <button
        type="submit"
        disabled={status !== "idle"}
        className={`w-full py-5 font-label-lg uppercase tracking-[0.2em] transition-all flex justify-center items-center gap-3 ${
          status === "idle"
            ? "bg-primary text-on-primary hover:brightness-110 active:scale-[0.98] cursor-pointer"
            : status === "submitting"
              ? "bg-primary/80 text-on-primary cursor-wait"
              : "bg-green-600 text-white"
        }`}
      >
        {status === "idle" && (
          <>
            Submit Portfolio Inquiry
            <span className="material-symbols-outlined">send</span>
          </>
        )}
        {status === "submitting" && "Sending..."}
        {status === "success" && "Message Received"}
      </button>
    </form>
  );
}
