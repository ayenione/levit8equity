export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "var(--navy)",
        borderTop: "1px solid rgba(201,146,42,0.12)",
        padding: "2.5rem",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        {/* Wordmark */}
        <a
          href="#top"
          style={{
            fontFamily: "var(--font-montserrat), Montserrat, sans-serif",
            fontWeight: 800,
            fontSize: "0.95rem",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "var(--white)",
            textDecoration: "none",
          }}
        >
          Levit<span style={{ color: "var(--gold)" }}>8</span> Equity Inc
        </a>

        {/* Center */}
        <p
          style={{
            color: "var(--text-muted)",
            fontSize: "0.8rem",
            letterSpacing: "0.05em",
          }}
        >
          © {new Date().getFullYear()} Levit8 Equity Inc. All rights reserved.
        </p>

      </div>
    </footer>
  );
}
