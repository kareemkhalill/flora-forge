"use client";

import { useState } from "react";
import { clsx } from "clsx";
import { CheckCircle, Warning } from "@phosphor-icons/react";
import { Button } from "@/components/ui/Button";
import { Reveal, WordReveal, Magnetic } from "@/components/motion/Motion";

interface FormData {
  date: string;
  time: string;
  guests: string;
  name: string;
  phone: string;
  email: string;
  requests: string;
}

interface FormErrors {
  [key: string]: string | undefined;
}

const timeSlots = ["11:30 AM", "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM", "5:00 PM", "5:30 PM", "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM", "9:00 PM", "9:30 PM"];
const guestOptions = ["1", "2", "3", "4", "5", "6", "7", "8"];

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};

  if (!data.date) {
    errors.date = "Please select a date";
  } else {
    const selected = new Date(data.date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (selected < today) errors.date = "Date cannot be in the past";
  }

  if (!data.time) errors.time = "Please select a time";
  if (!data.guests) errors.guests = "Please select party size";

  if (!data.name.trim()) {
    errors.name = "Please enter your name";
  } else if (data.name.trim().length < 2) {
    errors.name = "Name is too short";
  }

  if (!data.phone.trim()) {
    errors.phone = "Please enter a phone number";
  } else if (!/^[\d\s()+-]{7,}$/.test(data.phone.trim())) {
    errors.phone = "Enter a valid phone number";
  }

  if (!data.email.trim()) {
    errors.email = "Please enter your email";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) {
    errors.email = "Enter a valid email address";
  }

  return errors;
}

export function ReservationForm() {
  const [formData, setFormData] = useState<FormData>({ date: "", time: "", guests: "", name: "", phone: "", email: "", requests: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const updateField = (field: keyof FormData, value: string) => {
    const updated = { ...formData, [field]: value };
    setFormData(updated);
    if (touched[field]) setErrors(validate(updated));
  };

  const handleBlur = (field: keyof FormData) => {
    setTouched({ ...touched, [field]: true });
    setErrors(validate(formData));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate(formData);
    setErrors(validationErrors);
    setTouched(Object.keys(formData).reduce((acc, key) => ({ ...acc, [key]: true }), {}));

    if (Object.keys(validationErrors).length > 0) {
      const firstError = document.querySelector('[aria-invalid="true"]');
      firstError?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }

    setSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setSubmitting(false);
    setSubmitted(true);
  };

  const errorText = (field: string) =>
    touched[field] && errors[field] ? (
      <p id={`res-${field}-error`} className="text-xs text-destructive mt-1.5 flex items-center gap-1">
        <Warning className="h-3.5 w-3.5" aria-hidden="true" />
        {errors[field]}
      </p>
    ) : null;

  if (submitted) {
    return (
      <section data-section="reservations" className="section" aria-labelledby="reservations-title">
        <div className="container">
          <div className="max-w-xl mx-auto text-center border-t border-b border-border py-14">
            <CheckCircle className="h-10 w-10 text-accent mx-auto mb-6" aria-hidden="true" />
            <h2 id="reservations-title" className="display-2 mb-4">Reservation confirmed</h2>
            <p className="text-muted mb-8 leading-relaxed">
              Thank you, {formData.name}. We&apos;ve sent a confirmation to {formData.email}. We
              look forward to welcoming you on {formData.date} at {formData.time}.
            </p>
            <Button variant="outline" size="lg" onClick={() => setSubmitted(false)}>
              Make Another Reservation
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="reservations" className="section" aria-labelledby="reservations-title">
      <div className="container">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8">
          <div className="lg:col-span-4">
            <Reveal>
              <span className="eyebrow">Reservations</span>
            </Reveal>
            <WordReveal id="reservations-title" as="h2" className="display-2 mt-5" text="Book a table" delay={0.05} />
            <Reveal delay={0.15}>
              <p className="mt-6 text-muted text-lg leading-relaxed max-w-sm">
                The book opens fourteen days ahead. We hold a few seats at the counter for walk-ins
                every night, so it is always worth stopping by.
              </p>
            </Reveal>

            <dl className="mt-10 space-y-5 border-t border-border pt-8">
              <div>
                <dt className="text-xs uppercase tracking-wider text-muted-2">By phone</dt>
                <dd className="text-foreground mt-1">(212) 555-0147</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wider text-muted-2">By email</dt>
                <dd className="text-foreground mt-1">reserve@floraandforge.com</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wider text-muted-2">Large parties</dt>
                <dd className="text-foreground mt-1">Events of 9+ · events@floraandforge.com</dd>
              </div>
            </dl>
          </div>

          <div className="lg:col-span-1" />

          <form onSubmit={handleSubmit} className="lg:col-span-7" noValidate>
            <div className="grid grid-cols-2 gap-x-6">
              <div>
                <label htmlFor="res-date" className="field-label">Date</label>
                <input
                  id="res-date"
                  type="date"
                  value={formData.date}
                  onChange={(e) => updateField("date", e.target.value)}
                  onBlur={() => handleBlur("date")}
                  aria-invalid={touched.date && !!errors.date}
                  aria-describedby={errors.date ? "res-date-error" : undefined}
                  className={clsx("field-input", touched.date && errors.date && "border-destructive")}
                  min={new Date().toISOString().split("T")[0]}
                  autoComplete="off"
                />
                {errorText("date")}
              </div>

              <div>
                <label htmlFor="res-time" className="field-label">Time</label>
                <select
                  id="res-time"
                  value={formData.time}
                  onChange={(e) => updateField("time", e.target.value)}
                  onBlur={() => handleBlur("time")}
                  aria-invalid={touched.time && !!errors.time}
                  aria-describedby={errors.time ? "res-time-error" : undefined}
                  className={clsx("field-input", touched.time && errors.time && "border-destructive")}
                >
                  <option value="">Select time</option>
                  {timeSlots.map((slot) => (
                    <option key={slot} value={slot}>{slot}</option>
                  ))}
                </select>
                {errorText("time")}
              </div>
            </div>

            <div className="mt-6">
              <label htmlFor="res-guests" className="field-label">Party Size</label>
              <select
                id="res-guests"
                value={formData.guests}
                onChange={(e) => updateField("guests", e.target.value)}
                onBlur={() => handleBlur("guests")}
                aria-invalid={touched.guests && !!errors.guests}
                aria-describedby={errors.guests ? "res-guests-error" : undefined}
                className={clsx("field-input", touched.guests && errors.guests && "border-destructive")}
              >
                <option value="">Select party size</option>
                {guestOptions.map((num) => (
                  <option key={num} value={num}>{num} {num === "1" ? "guest" : "guests"}</option>
                ))}
                <option value="9+">9+ (call us)</option>
              </select>
              {errorText("guests")}
            </div>

            <div className="grid grid-cols-2 gap-x-6 mt-6">
              <div>
                <label htmlFor="res-name" className="field-label">Name</label>
                <input
                  id="res-name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => updateField("name", e.target.value)}
                  onBlur={() => handleBlur("name")}
                  aria-invalid={touched.name && !!errors.name}
                  aria-describedby={errors.name ? "res-name-error" : undefined}
                  className={clsx("field-input", touched.name && errors.name && "border-destructive")}
                  placeholder="Your full name"
                  autoComplete="name"
                />
                {errorText("name")}
              </div>

              <div>
                <label htmlFor="res-phone" className="field-label">Phone</label>
                <input
                  id="res-phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => updateField("phone", e.target.value)}
                  onBlur={() => handleBlur("phone")}
                  aria-invalid={touched.phone && !!errors.phone}
                  aria-describedby={errors.phone ? "res-phone-error" : undefined}
                  className={clsx("field-input", touched.phone && errors.phone && "border-destructive")}
                  placeholder="(212) 555-0123"
                  autoComplete="tel"
                />
                {errorText("phone")}
              </div>
            </div>

            <div className="mt-6">
              <label htmlFor="res-email" className="field-label">Email</label>
              <input
                id="res-email"
                type="email"
                value={formData.email}
                onChange={(e) => updateField("email", e.target.value)}
                onBlur={() => handleBlur("email")}
                aria-invalid={touched.email && !!errors.email}
                aria-describedby={errors.email ? "res-email-error" : undefined}
                className={clsx("field-input", touched.email && errors.email && "border-destructive")}
                placeholder="you@example.com"
                autoComplete="email"
              />
              {errorText("email")}
            </div>

            <div className="mt-6">
              <label htmlFor="res-requests" className="field-label">
                Special Requests <span className="normal-case text-muted-2 font-normal">(optional)</span>
              </label>
              <textarea
                id="res-requests"
                value={formData.requests}
                onChange={(e) => updateField("requests", e.target.value)}
                rows={2}
                className="field-input resize-none"
                placeholder="Allergies, celebrations, seating preferences..."
              />
            </div>

            <Magnetic className="w-full mt-9">
              <Button type="submit" variant="primary" size="lg" className="w-full" isLoading={submitting}>
                {submitting ? "Confirming..." : "Confirm Reservation"}
              </Button>
            </Magnetic>

            <div aria-live="polite" className="sr-only">
              {submitting ? "Submitting your reservation..." : ""}
            </div>

            <p className="text-xs text-muted-2 text-center mt-4">
              By reserving, you agree to our cancellation policy. Changes within 24 hours may incur a fee.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
