export default function About() {
  return (
    <section
      id="about"
      style={{
        backgroundColor: "var(--navy)",
        padding: "6rem 2.5rem",
        borderTop: "1px solid rgba(201,146,42,0.12)",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "4rem",
          alignItems: "center",
        }}
      >
        {/* Left — label + heading */}
        <div>
          <p className="section-label">About</p>
          <h2
            style={{
              fontFamily: "var(--font-montserrat), Montserrat, sans-serif",
              fontWeight: 800,
              fontSize: "clamp(1.8rem, 4vw, 3rem)",
              lineHeight: 1.15,
              marginBottom: "1.5rem",
            }}
          >
            Built on Clarity.{" "}
            <span style={{ color: "var(--gold)" }}>Backed by Purpose.</span>
          </h2>

          <div
            style={{
              width: "48px",
              height: "2px",
              backgroundColor: "var(--gold)",
              marginBottom: "2rem",
            }}
          />

          <p
            style={{
              color: "var(--text-muted)",
              lineHeight: 1.8,
              fontSize: "1rem",
              marginBottom: "1.4rem",
            }}
          >
            Levit8 Equity Inc was founded by Yinka Ayeni to pursue
            Entrepreneurship Through Acquisition — a deliberate strategy of
            buying and operating an existing, proven business rather than
            building from scratch.
          </p>
          <p
            style={{
              color: "var(--text-muted)",
              lineHeight: 1.8,
              fontSize: "1rem",
              marginBottom: "1.4rem",
            }}
          >
            We're not a private equity firm. We're not brokers flipping deals.
            We're operators who want to own and run a business that delivers real
            value to real customers — and treat the people and systems you've
            built with the respect they deserve.
          </p>
          <p
            style={{
              color: "var(--text-muted)",
              lineHeight: 1.8,
              fontSize: "1rem",
            }}
          >
            Our focus: tangible, recession-resistant services. Businesses that
            work because they solve problems people can't ignore. If that sounds
            like what you've built, we'd like to hear your story.
          </p>
        </div>

        {/* Right — stats / principles */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
          }}
        >
          {[
            {
              value: "Direct",
              label: "No brokers, no middlemen. You deal with us directly.",
            },
            {
              value: "Long-Term",
              label: "I intend to own and operate — not flip.",
            },
            {
              value: "Focused",
              label: "Home services only. Boring by design. Durable by nature.",
            },
            {
              value: "Confidential",
              label: "Every conversation stays between us until you decide otherwise.",
            },
          ].map((item) => (
            <div
              key={item.value}
              style={{
                borderLeft: "2px solid var(--gold)",
                paddingLeft: "1.5rem",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-montserrat), Montserrat, sans-serif",
                  fontWeight: 800,
                  fontSize: "1.3rem",
                  color: "var(--white)",
                  marginBottom: "0.25rem",
                }}
              >
                {item.value}
              </div>
              <div
                style={{
                  color: "var(--text-muted)",
                  fontSize: "0.9rem",
                  lineHeight: 1.5,
                }}
              >
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
