import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import "./ContactForm.scss";

export default function ContactForm({ theme }) {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState("idle");
  const [focused, setFocused] = useState("");

  const accent    = theme?.imageHighlight || "#667eea";
  const bg        = theme?.body          || "#ffffff";
  const text      = theme?.text          || "#333333";
  const secondary = theme?.secondaryText || "#868e96";

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!formRef.current) return;
    setStatus("sending");

    const form = formRef.current as HTMLFormElement & {
      from_name: HTMLInputElement;
      from_email: HTMLInputElement;
      message: HTMLTextAreaElement;
    };

    const name    = form.from_name.value.trim();
    const email   = form.from_email.value.trim();
    const message = form.message.value.trim();

    try {
      await emailjs.sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID!,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        { publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY }
      );

      const phone  = process.env.REACT_APP_CALLMEBOT_PHONE;
      const apiKey = process.env.REACT_APP_CALLMEBOT_APIKEY;
      if (phone && apiKey) {
        const waText = encodeURIComponent(
          `New message from ${name} (${email}):\n${message}`
        );
        fetch(
          `https://api.callmebot.com/whatsapp.php?phone=${phone}&text=${waText}&apikey=${apiKey}`,
          { mode: "no-cors" }
        ).catch(() => {});
      }

      setStatus("success");
      formRef.current.reset();
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
    }
  }

  const inputStyle = (name: string) => ({
    background: bg,
    color: text,
    borderColor: focused === name ? accent : `${text}33`,
    boxShadow: focused === name ? `0 0 0 3px ${accent}28` : "none",
    outline: "none",
  });

  const btnStyle = {
    backgroundColor: bg,
    color: text,
    border: `solid 1.5px ${text}`,
  };

  const btnHover = (e: React.MouseEvent<HTMLButtonElement>, enter: boolean) => {
    const el = e.currentTarget;
    if (enter) {
      el.style.backgroundColor = text;
      el.style.color = bg;
    } else {
      el.style.backgroundColor = bg;
      el.style.color = text;
    }
  };

  return (
    <div className="cf-wrapper">
      {/* Form */}
      <form ref={formRef} onSubmit={handleSubmit} className="cf-form">
        <div className="cf-row">
          <div className="cf-field">
            <label style={{ color: secondary }}>Your Name <span className="cf-req">*</span></label>
            <input
              name="from_name"
              type="text"
              required
              placeholder="Enter your name"
              style={inputStyle("name")}
              onFocus={() => setFocused("name")}
              onBlur={() => setFocused("")}
            />
          </div>
          <div className="cf-field">
            <label style={{ color: secondary }}>Email Address <span className="cf-req">*</span></label>
            <input
              name="from_email"
              type="email"
              required
              placeholder="Enter your email"
              style={inputStyle("email")}
              onFocus={() => setFocused("email")}
              onBlur={() => setFocused("")}
            />
          </div>
        </div>

        <div className="cf-field">
          <label style={{ color: secondary }}>Message <span className="cf-req">*</span></label>
          <textarea
            name="message"
            required
            rows={5}
            placeholder="Tell me about your project or just say hi..."
            style={inputStyle("message")}
            onFocus={() => setFocused("message")}
            onBlur={() => setFocused("")}
          />
        </div>

        <div className="cf-footer">
          <button
            type="submit"
            disabled={status === "sending"}
            className="cf-submit"
            style={status === "sending" ? { ...btnStyle, opacity: 0.6, cursor: "not-allowed" } : btnStyle}
            onMouseEnter={(e) => status !== "sending" && btnHover(e, true)}
            onMouseLeave={(e) => status !== "sending" && btnHover(e, false)}
          >
            {status === "sending" ? (
              <><span className="cf-spinner" /> Sending…</>
            ) : (
              "Send Message ✉️"
            )}
          </button>

          {status === "success" && (
            <span className="cf-feedback cf-success">✅ Sent! I'll reply soon.</span>
          )}
          {status === "error" && (
            <span className="cf-feedback cf-error">❌ Failed. Try again.</span>
          )}
        </div>
      </form>
    </div>
  );
}
