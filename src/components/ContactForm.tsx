"use client";

import { useState } from "react";

const INDUSTRIES = [
  "HVAC",
  "Plumbing",
  "Roofing",
  "Hydrovac",
  "Electrical",
  "Landscaping / Snow Removal",
  "Pest Control",
  "Cleaning Services",
  "Other Home Services",
];

const REVENUE_RANGES = [
  "Under $500K",
  "$500K – $1M",
  "$1M – $2M",
  "$2M – $5M",
  "$5M+",
];

const PROVINCES = [
  "Alberta",
  "British Columbia",
  "Manitoba",
  "New Brunswick",
  "Newfoundland & Labrador",
  "Northwest Territories",
  "Nova Scotia",
  "Nunavut",
  "Ontario",
  "Prince Edward Island",
  "Quebec",
  "Saskatchewan",
  "Yukon",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: { preventDefault(): void; currentTarget: HTMLFormElement }) {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/mkopkovb", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setSubmitted(true);
      }
    } catch {
      // fallback: open mailto
      const name = data.get("name") as string;
      const email = data.get("email") as string;
      const industry = data.get("industry") as string;
      const years = data.get("years") as string;
      const province = data.get("province") as string;
      const revenue = data.get("revenue") as string;
      const message = data.get("message") as string;
      const body = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\nIndustry: ${industry}\nYears in Operation: ${years}\nProvince: ${province}\nApprox. Annual Revenue: ${revenue}\n\n${message}`
      );
      window.location.href = `mailto:info@levit8equity.com?subject=Business Inquiry&body=${body}`;
    } finally {
      setLoading(false);
    }
  }

  return (
    <section
      id="contact"
      style={{
        backgroundColor: "var(--navy-mid)",
        padding: "6rem 2.5rem",
        borderTop: "1px solid rgba(201,146,42,0.12)",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "4rem",
            alignItems: "start",
          }}
        >
          {/* Left — copy */}
          <div>
            <p className="section-label">Contact</p>
            <h2
              style={{
                fontFamily: "var(--font-montserrat), Montserrat, sans-serif",
                fontWeight: 800,
                fontSize: "clamp(1.8rem, 4vw, 3rem)",
                lineHeight: 1.15,
                marginBottom: "1.5rem",
              }}
            >
              Start the{" "}
              <span style={{ color: "var(--gold)" }}>Conversation</span>
            </h2>
            <p
              style={{
                color: "var(--text-muted)",
                lineHeight: 1.8,
                fontSize: "1rem",
                marginBottom: "2rem",
              }}
            >
              Fill out the form and we'll be in touch within 48 hours.
              No pressure. No commitment. Just a conversation to see if
              there's a fit.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {[
                { label: "Confidential", desc: "Your information stays private." },
                { label: "No Broker Fees", desc: "This is a direct buyer inquiry." },
                { label: "Fast Response", desc: "You'll hear back within 48 hours." },
              ].map((p) => (
                <div
                  key={p.label}
                  style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}
                >
                  <div
                    style={{
                      width: "6px",
                      height: "6px",
                      borderRadius: "50%",
                      backgroundColor: "var(--gold)",
                      marginTop: "0.45rem",
                      flexShrink: 0,
                    }}
                  />
                  <div>
                    <span
                      style={{
                        fontFamily: "var(--font-montserrat), Montserrat, sans-serif",
                        fontWeight: 700,
                        fontSize: "0.9rem",
                        color: "var(--white)",
                      }}
                    >
                      {p.label}
                    </span>{" "}
                    <span style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>
                      — {p.desc}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div>
            {submitted ? (
              <div
                style={{
                  padding: "3rem 2rem",
                  border: "1px solid var(--gold)",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-montserrat), Montserrat, sans-serif",
                    fontWeight: 800,
                    fontSize: "1.4rem",
                    marginBottom: "1rem",
                    color: "var(--gold)",
                  }}
                >
                  Message Received
                </div>
                <p style={{ color: "var(--text-muted)", lineHeight: 1.7 }}>
                  Thank you for reaching out. We'll review your message and
                  be in touch within 48 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "1.5rem 2rem",
                  }}
                >
                  <div>
                    <input
                      name="name"
                      required
                      placeholder="Your Name"
                      className="form-input"
                    />
                  </div>
                  <div>
                    <input
                      name="email"
                      type="email"
                      required
                      placeholder="Email Address"
                      className="form-input"
                    />
                  </div>

                  <div>
                    <select name="industry" required className="form-input" defaultValue="">
                      <option value="" disabled>
                        Industry
                      </option>
                      {INDUSTRIES.map((i) => (
                        <option key={i} value={i}>
                          {i}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <input
                      name="years"
                      type="number"
                      min="1"
                      placeholder="Years in Operation"
                      className="form-input"
                    />
                  </div>

                  <div style={{ gridColumn: "1 / -1" }}>
                    <select name="province" required className="form-input" defaultValue="">
                      <option value="" disabled>
                        Province / Territory
                      </option>
                      {PROVINCES.map((p) => (
                        <option key={p} value={p}>
                          {p}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div style={{ gridColumn: "1 / -1" }}>
                    <select name="revenue" className="form-input" defaultValue="">
                      <option value="" disabled>
                        Approximate Annual Revenue (optional)
                      </option>
                      {REVENUE_RANGES.map((r) => (
                        <option key={r} value={r}>
                          {r}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Tell me a bit about your business (optional)"
                    className="form-input"
                    style={{ resize: "none" }}
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-cta"
                    style={{
                      fontFamily: "var(--font-montserrat), Montserrat, sans-serif",
                      opacity: loading ? 0.7 : 1,
                    }}
                  >
                    {loading ? "Sending..." : "Send Message"}
                    {!loading && (
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path
                          d="M1 7h12M8 2l5 5-5 5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
