"use client";

import { useState, useRef, useEffect, Fragment } from "react";

function renderMarkdown(text: string) {
  const lines = text.split("\n");
  return lines.map((line, i) => {
    const isNumbered = /^\d+\.\s/.test(line);
    const parts = line.split(/(\*\*[^*]+\*\*)/g).map((part, j) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return <strong key={j}>{part.slice(2, -2)}</strong>;
      }
      return part;
    });
    return (
      <Fragment key={i}>
        {isNumbered ? (
          <div style={{ paddingLeft: "0.5rem", marginTop: i === 0 ? 0 : "0.35rem" }}>
            {parts}
          </div>
        ) : (
          <>{i > 0 && line === "" ? <div style={{ height: "0.4rem" }} /> : parts}</>
        )}
        {i < lines.length - 1 && line !== "" && !isNumbered && <br />}
      </Fragment>
    );
  });
}

type Message = {
  role: "user" | "assistant";
  content: string;
};

const GREETING: Message = {
  role: "assistant",
  content:
    "Hi — I'm here to answer any questions you have about selling your business to Levit8 Equity. What's on your mind?",
};

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([GREETING]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [typing, setTyping] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [open]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading, typing]);

  async function fetchResponse(history: Message[]): Promise<string> {
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ messages: history }),
    });
    if (!res.ok || !res.body) throw new Error("Request failed");
    const reader = res.body.getReader();
    const decoder = new TextDecoder();
    let accumulated = "";
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      accumulated += decoder.decode(value, { stream: true });
    }
    return accumulated;
  }

  async function send() {
    const text = input.trim();
    if (!text || loading) return;

    const userMessage: Message = { role: "user", content: text };
    const history = [...messages, userMessage];
    setMessages(history);
    setInput("");
    setLoading(true);
    setTyping(true);

    try {
      const [response] = await Promise.all([
        fetchResponse(history),
        new Promise((resolve) => setTimeout(resolve, 10000)),
      ]);
      setTyping(false);
      setMessages([...history, { role: "assistant", content: response as string }]);
    } catch {
      setTyping(false);
      setMessages([
        ...history,
        {
          role: "assistant",
          content:
            "Sorry, something went wrong. Please try again or fill out the contact form below.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  function handleKey(e: React.KeyboardEvent) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  }

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close chat" : "Open chat"}
        style={{
          position: "fixed",
          bottom: "1.75rem",
          right: "1.75rem",
          width: "56px",
          height: "56px",
          borderRadius: "50%",
          backgroundColor: "var(--gold)",
          color: "var(--navy)",
          border: "none",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 24px rgba(0,0,0,0.4)",
          zIndex: 9999,
          transition: "background-color var(--transition), transform var(--transition)",
        }}
        onMouseEnter={(e) =>
          ((e.currentTarget as HTMLButtonElement).style.backgroundColor =
            "var(--gold-light)")
        }
        onMouseLeave={(e) =>
          ((e.currentTarget as HTMLButtonElement).style.backgroundColor =
            "var(--gold)")
        }
      >
        {open ? (
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path
              d="M2 2l14 14M16 2L2 16"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        ) : (
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <path
              d="M19 3H3a1 1 0 00-1 1v11a1 1 0 001 1h3v3l4-3h9a1 1 0 001-1V4a1 1 0 00-1-1z"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </button>

      {/* Chat panel */}
      {open && (
        <div
          style={{
            position: "fixed",
            bottom: "5.5rem",
            right: "1.75rem",
            width: "min(380px, calc(100vw - 2rem))",
            height: "min(520px, calc(100vh - 8rem))",
            backgroundColor: "var(--navy-mid)",
            border: "1px solid rgba(201,146,42,0.25)",
            boxShadow: "0 8px 40px rgba(0,0,0,0.5)",
            display: "flex",
            flexDirection: "column",
            zIndex: 9998,
          }}
        >
          {/* Header */}
          <div
            style={{
              padding: "1rem 1.25rem",
              borderBottom: "1px solid rgba(201,146,42,0.15)",
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
            }}
          >
            <div
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                backgroundColor: "#4ade80",
                flexShrink: 0,
              }}
            />
            <div>
              <div
                style={{
                  fontFamily: "var(--font-montserrat), Montserrat, sans-serif",
                  fontWeight: 700,
                  fontSize: "0.85rem",
                  color: "var(--white)",
                  letterSpacing: "0.04em",
                }}
              >
                Levit8 Equity
              </div>
              <div style={{ fontSize: "0.7rem", color: "var(--text-muted)" }}>
                Ask us anything
              </div>
            </div>
          </div>

          {/* Messages */}
          <div
            style={{
              flex: 1,
              overflowY: "auto",
              padding: "1.25rem",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            {messages.map((msg, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  justifyContent: msg.role === "user" ? "flex-end" : "flex-start",
                }}
              >
                <div
                  style={{
                    maxWidth: "82%",
                    padding: "0.65rem 0.9rem",
                    fontSize: "0.875rem",
                    lineHeight: 1.6,
                    ...(msg.role === "user"
                      ? {
                          backgroundColor: "var(--gold)",
                          color: "var(--navy)",
                          fontWeight: 500,
                        }
                      : {
                          backgroundColor: "rgba(255,255,255,0.05)",
                          color: "var(--white)",
                          border: "1px solid rgba(255,255,255,0.07)",
                        }),
                  }}
                >
                  {msg.role === "assistant"
                    ? renderMarkdown(msg.content)
                    : msg.content}
                </div>
              </div>
            ))}

            {typing && (
              <div style={{ display: "flex", justifyContent: "flex-start" }}>
                <div
                  style={{
                    padding: "0.65rem 0.9rem",
                    backgroundColor: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    fontSize: "0.875rem",
                    color: "var(--text-muted)",
                    fontStyle: "italic",
                  }}
                >
                  Typing....
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div
            style={{
              padding: "0.875rem 1.25rem",
              borderTop: "1px solid rgba(201,146,42,0.15)",
              display: "flex",
              gap: "0.75rem",
              alignItems: "center",
            }}
          >
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKey}
              placeholder="Type a message..."
              disabled={loading}
              style={{
                flex: 1,
                background: "transparent",
                border: "none",
                borderBottom: "1px solid rgba(255,255,255,0.12)",
                padding: "6px 0",
                color: "var(--white)",
                fontSize: "0.875rem",
                outline: "none",
                fontFamily: "inherit",
                transition: "border-color var(--transition)",
              }}
              onFocus={(e) =>
                (e.currentTarget.style.borderBottomColor = "var(--gold)")
              }
              onBlur={(e) =>
                (e.currentTarget.style.borderBottomColor =
                  "rgba(255,255,255,0.12)")
              }
            />
            <button
              onClick={send}
              disabled={loading || !input.trim()}
              aria-label="Send"
              style={{
                background: "none",
                border: "none",
                cursor: loading || !input.trim() ? "default" : "pointer",
                color:
                  loading || !input.trim() ? "var(--text-muted)" : "var(--gold)",
                padding: "4px",
                display: "flex",
                alignItems: "center",
                transition: "color var(--transition)",
                flexShrink: 0,
              }}
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path
                  d="M16 9H2M10 3l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      )}

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.3; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </>
  );
}
