const items = [
  {
    number: "01",
    title: "A Direct Conversation",
    body: "No brokers. No middlemen. You speak directly with me. That means faster answers, no filtered messaging, and a process that respects your time.",
  },
  {
    number: "02",
    title: "Complete Confidentiality",
    body: "Conversations stay private. Your employees, customers, and competitors won't know you're exploring a sale unless you decide to tell them.",
  },
  {
    number: "03",
    title: "No Broker Fees",
    body: "You keep more of what your business is worth. There are no commissions or transaction fees to a third party — this is a direct buyer relationship.",
  },
  {
    number: "04",
    title: "A Fair Assessment",
    body: "We evaluate businesses based on real performance — revenue, profitability, customer base, and market position. No lowball tactics.",
  },
  {
    number: "05",
    title: "Respect for What You Built",
    body: "Your team and your reputation matter. We intend to operate and grow the business — not strip it down. The goal is continuity, not disruption.",
  },
  {
    number: "06",
    title: "A Clear, Simple Process",
    body: "Initial conversation. Business overview. Valuation discussion. Agreement. We move at a pace that works for you and keep the process straightforward.",
  },
];

export default function WhatSellersExpect() {
  return (
    <section
      id="what-sellers-expect"
      style={{
        backgroundColor: "var(--off-white)",
        padding: "6rem 2.5rem",
        color: "var(--navy)",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <p
          className="section-label"
          style={{ color: "var(--gold)" }}
        >
          For Sellers
        </p>
        <h2
          style={{
            fontFamily: "var(--font-montserrat), Montserrat, sans-serif",
            fontWeight: 800,
            fontSize: "clamp(1.8rem, 4vw, 3rem)",
            lineHeight: 1.15,
            marginBottom: "3.5rem",
            maxWidth: "520px",
            color: "var(--navy)",
          }}
        >
          What You Can{" "}
          <span style={{ color: "var(--gold)" }}>Expect</span>
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(300px, 100%), 1fr))",
            gap: "2.5rem",
          }}
        >
          {items.map((item) => (
            <div key={item.number} className="expect-item" style={{ borderLeftColor: "rgba(11,22,35,0.15)" }}>
              <span
                style={{
                  fontFamily: "var(--font-montserrat), Montserrat, sans-serif",
                  fontWeight: 800,
                  fontSize: "0.7rem",
                  letterSpacing: "0.18em",
                  color: "var(--gold)",
                  display: "block",
                  marginBottom: "0.6rem",
                }}
              >
                {item.number}
              </span>
              <h3
                style={{
                  fontFamily: "var(--font-montserrat), Montserrat, sans-serif",
                  fontWeight: 700,
                  fontSize: "1.05rem",
                  marginBottom: "0.6rem",
                  color: "var(--navy)",
                }}
              >
                {item.title}
              </h3>
              <p
                style={{
                  color: "#4a5568",
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
