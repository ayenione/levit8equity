const criteria = [
  {
    number: "01",
    title: "Home Services Industry",
    body: "HVAC, Plumbing, Roofing, Hydrovac, Electrical, Landscaping, and other essential trades. We focus on businesses that homeowners and property owners rely on year after year.",
  },
  {
    number: "02",
    title: "10+ Years in Operation",
    body: "We look for businesses with a track record — established customer relationships, a recognizable name in the community, and a team that knows the work.",
  },
  {
    number: "03",
    title: "Profitable & Cash-Flowing",
    body: "We're looking for businesses with consistent revenue and healthy margins. You don't need to be a large company — we value reliability over size.",
  },
  {
    number: "04",
    title: "Owner-Operated",
    body: "Many of the best businesses we talk to are owner-run. Whether you're ready to step back, retire, or move on to something new — we're interested.",
  },
  {
    number: "05",
    title: "Canadian Operations",
    body: "We are focused on acquiring businesses operating across Canada. Location within Canada is not a barrier to a conversation.",
  },
  {
    number: "06",
    title: "Willing to Discuss",
    body: "You don't need to have made a decision. If you're curious about your options, we're happy to talk — no pressure, no commitment required.",
  },
];

export default function WhatWeLookFor() {
  return (
    <section
      id="what-we-look-for"
      style={{
        backgroundColor: "var(--navy-mid)",
        padding: "6rem 2.5rem",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <p className="section-label">Acquisition Criteria</p>
        <h2
          style={{
            fontFamily: "var(--font-montserrat), Montserrat, sans-serif",
            fontWeight: 800,
            fontSize: "clamp(1.8rem, 4vw, 3rem)",
            lineHeight: 1.15,
            marginBottom: "3.5rem",
            maxWidth: "520px",
          }}
        >
          What We{" "}
          <span style={{ color: "var(--gold)" }}>Look For</span>
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {criteria.map((item) => (
            <div key={item.title} className="criteria-card">
              <span
                style={{
                  fontFamily: "var(--font-montserrat), Montserrat, sans-serif",
                  fontWeight: 800,
                  fontSize: "0.7rem",
                  letterSpacing: "0.18em",
                  color: "var(--gold)",
                  display: "block",
                  marginBottom: "1rem",
                }}
              >
                {item.number}
              </span>
              <h3
                style={{
                  fontFamily: "var(--font-montserrat), Montserrat, sans-serif",
                  fontWeight: 700,
                  fontSize: "1rem",
                  letterSpacing: "0.04em",
                  marginBottom: "0.75rem",
                  color: "var(--white)",
                }}
              >
                {item.title}
              </h3>
              <p
                style={{
                  color: "var(--text-muted)",
                  lineHeight: 1.7,
                  fontSize: "0.95rem",
                }}
              >
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
