"use client";

import { useState } from "react";
import { clsx } from "clsx";
import { Calendar, Clock, Users, User, Phone, Envelope, NotePencil, CheckCircle, Warning } from "@phosphor-icons/react";
import { Button } from "@/components/ui/Button";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

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
    if (selected < today) {
      errors.date = "Date cannot be in the past";
    }
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
  const [ref, visible] = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px",
  });
  const [formData, setFormData] = useState<FormData>({
    date: "",
    time: "",
    guests: "",
    name: "",
    phone: "",
    email: "",
    requests: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const updateField = (field: keyof FormData, value: string) => {
    const updated = { ...formData, [field]: value };
    setFormData(updated);
    if (touched[field]) {
      setErrors(validate(updated));
    }
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

  if (submitted) {
    return (
      <section
        data-section="reservations"
        className="section relative"
        aria-labelledby="reservations-title"
      >
        <div className="container">
          <div className="card max-w-xl mx-auto p-8 lg:p-12 text-center">
            <div className="w-16 h-16 rounded-full bg-accent-muted flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-8 w-8 text-accent" aria-hidden="true" />
            </div>
            <h2 id="reservations-title" className="font-display text-2xl lg:text-3xl font-medium mb-3">
              Reservation confirmed
            </h2>
            <p className="text-muted mb-6">
              Thank you, {formData.name}. We&apos;ve sent a confirmation to {formData.email}.
              We look forward to welcoming you on {formData.date} at {formData.time}.
            </p>
            <Button variant="secondary" size="lg" onClick={() => setSubmitted(false)}>
              Make Another Reservation
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      ref={ref}
      className="section relative"
      aria-labelledby="reservations-title"
    >
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div className={clsx("reveal stagger-1", visible ? "visible" : "")}>
            <div className="section-header">
              <span className="eyebrow">Reservations</span>
              <h2 id="reservations-title">Reserve your table</h2>
              <p>
                Reservations open 14 days in advance. For parties of nine or more,
                or private events, please contact us directly.
              </p>
            </div>

            <dl className="mt-8 space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <dt className="text-sm font-medium text-foreground">By phone</dt>
                  <dd className="text-muted text-sm">(212) 555-0147</dd>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Envelope className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <dt className="text-sm font-medium text-foreground">By email</dt>
                  <dd className="text-muted text-sm">reserve@floraandforge.com</dd>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Users className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <dt className="text-sm font-medium text-foreground">Large parties</dt>
                  <dd className="text-muted text-sm">Events of 9+ • events@floraandforge.com</dd>
                </div>
              </div>
            </dl>
          </div>

          <form
            onSubmit={handleSubmit}
            className={clsx(
              "card p-6 lg:p-8 space-y-5",
              "reveal stagger-2",
              visible ? "visible" : ""
            )}
            noValidate
          >
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="res-date" className="block text-sm font-medium text-foreground mb-2">
                  <Calendar className="h-4 w-4 inline-block mr-1.5 -mt-0.5 text-accent" aria-hidden="true" />
                  Date
                </label>
                <input
                  id="res-date"
                  type="date"
                  value={formData.date}
                  onChange={(e) => updateField("date", e.target.value)}
                  onBlur={() => handleBlur("date")}
                  aria-invalid={touched.date && !!errors.date}
                  aria-describedby={errors.date ? "res-date-error" : undefined}
                  className={clsx("input", touched.date && errors.date && "border-destructive")}
                  min={new Date().toISOString().split("T")[0]}
                  autoComplete="off"
                />
                {touched.date && errors.date && (
                  <p id="res-date-error" className="text-xs text-destructive mt-1.5 flex items-center gap-1">
                    <Warning className="h-3.5 w-3.5" aria-hidden="true" />
                    {errors.date}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="res-time" className="block text-sm font-medium text-foreground mb-2">
                  <Clock className="h-4 w-4 inline-block mr-1.5 -mt-0.5 text-accent" aria-hidden="true" />
                  Time
                </label>
                <select
                  id="res-time"
                  value={formData.time}
                  onChange={(e) => updateField("time", e.target.value)}
                  onBlur={() => handleBlur("time")}
                  aria-invalid={touched.time && !!errors.time}
                  aria-describedby={errors.time ? "res-time-error" : undefined}
                  className={clsx("input", touched.time && errors.time && "border-destructive")}
                >
                  <option value="">Select time</option>
                  {timeSlots.map((slot) => (
                    <option key={slot} value={slot}>{slot}</option>
                  ))}
                </select>
                {touched.time && errors.time && (
                  <p id="res-time-error" className="text-xs text-destructive mt-1.5 flex items-center gap-1">
                    <Warning className="h-3.5 w-3.5" aria-hidden="true" />
                    {errors.time}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="res-guests" className="block text-sm font-medium text-foreground mb-2">
                <Users className="h-4 w-4 inline-block mr-1.5 -mt-0.5 text-accent" aria-hidden="true" />
                Party Size
              </label>
              <select
                id="res-guests"
                value={formData.guests}
                onChange={(e) => updateField("guests", e.target.value)}
                onBlur={() => handleBlur("guests")}
                aria-invalid={touched.guests && !!errors.guests}
                aria-describedby={errors.guests ? "res-guests-error" : undefined}
                className={clsx("input", touched.guests && errors.guests && "border-destructive")}
              >
                <option value="">Select party size</option>
                {guestOptions.map((num) => (
                  <option key={num} value={num}>
                    {num} {num === "1" ? "guest" : "guests"}
                  </option>
                ))}
                <option value="9+">9+ (call us)</option>
              </select>
              {touched.guests && errors.guests && (
                <p id="res-guests-error" className="text-xs text-destructive mt-1.5 flex items-center gap-1">
                  <Warning className="h-3.5 w-3.5" aria-hidden="true" />
                  {errors.guests}
                </p>
              )}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="res-name" className="block text-sm font-medium text-foreground mb-2">
                  <User className="h-4 w-4 inline-block mr-1.5 -mt-0.5 text-accent" aria-hidden="true" />
                  Name
                </label>
                <input
                  id="res-name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => updateField("name", e.target.value)}
                  onBlur={() => handleBlur("name")}
                  aria-invalid={touched.name && !!errors.name}
                  aria-describedby={errors.name ? "res-name-error" : undefined}
                  className={clsx("input", touched.name && errors.name && "border-destructive")}
                  placeholder="Your full name"
                  autoComplete="name"
                />
                {touched.name && errors.name && (
                  <p id="res-name-error" className="text-xs text-destructive mt-1.5 flex items-center gap-1">
                    <Warning className="h-3.5 w-3.5" aria-hidden="true" />
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="res-phone" className="block text-sm font-medium text-foreground mb-2">
                  <Phone className="h-4 w-4 inline-block mr-1.5 -mt-0.5 text-accent" aria-hidden="true" />
                  Phone
                </label>
                <input
                  id="res-phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => updateField("phone", e.target.value)}
                  onBlur={() => handleBlur("phone")}
                  aria-invalid={touched.phone && !!errors.phone}
                  aria-describedby={errors.phone ? "res-phone-error" : undefined}
                  className={clsx("input", touched.phone && errors.phone && "border-destructive")}
                  placeholder="(212) 555-0123"
                  autoComplete="tel"
                />
                {touched.phone && errors.phone && (
                  <p id="res-phone-error" className="text-xs text-destructive mt-1.5 flex items-center gap-1">
                    <Warning className="h-3.5 w-3.5" aria-hidden="true" />
                    {errors.phone}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="res-email" className="block text-sm font-medium text-foreground mb-2">
                <Envelope className="h-4 w-4 inline-block mr-1.5 -mt-0.5 text-accent" aria-hidden="true" />
                Email
              </label>
              <input
                id="res-email"
                type="email"
                value={formData.email}
                onChange={(e) => updateField("email", e.target.value)}
                onBlur={() => handleBlur("email")}
                aria-invalid={touched.email && !!errors.email}
                aria-describedby={errors.email ? "res-email-error" : undefined}
                className={clsx("input", touched.email && errors.email && "border-destructive")}
                placeholder="you@example.com"
                autoComplete="email"
              />
              {touched.email && errors.email && (
                <p id="res-email-error" className="text-xs text-destructive mt-1.5 flex items-center gap-1">
                  <Warning className="h-3.5 w-3.5" aria-hidden="true" />
                  {errors.email}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="res-requests" className="block text-sm font-medium text-foreground mb-2">
                <NotePencil className="h-4 w-4 inline-block mr-1.5 -mt-0.5 text-accent" aria-hidden="true" />
                Special Requests <span className="text-muted font-normal">(optional)</span>
              </label>
              <textarea
                id="res-requests"
                value={formData.requests}
                onChange={(e) => updateField("requests", e.target.value)}
                rows={3}
                className="input resize-none"
                placeholder="Allergies, celebrations, seating preferences..."
              />
            </div>

            <Button
              type="submit"
              variant="primary"
              size="lg"
              className="w-full"
              isLoading={submitting}
            >
              {submitting ? "Confirming..." : "Confirm Reservation"}
            </Button>

            <div aria-live="polite" className="sr-only">
              {submitting ? "Submitting your reservation..." : ""}
            </div>

            <p className="text-xs text-bone-muted text-center">
              By reserving, you agree to our cancellation policy. Changes within 24 hours may incur a fee.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}