import React, { useMemo } from "react";
import ChatBot from "react-chatbotify";
import { experience } from "../../portfolio";
import "./PortfolioChatBot.scss";

/* ── Compute once at module level (static portfolio data) ─────────────── */
// Only count professional work (work: true section), not internships
const _workJobs =
  experience?.sections
    ?.filter((s) => s.work === true)
    ?.flatMap((s) => s.experiences || []) || [];

const _earliest = _workJobs
  .map((e) => new Date(e.duration?.split(" - ")[0]))
  .filter((d) => !isNaN(d.getTime()))
  .sort((a, b) => a.getTime() - b.getTime())[0];

const YEARS_EXP = _earliest
  ? Math.floor((Date.now() - _earliest.getTime()) / (365.25 * 24 * 60 * 60 * 1000)) + 1
  : "several";

const CURRENT_JOB = _workJobs.find((e) =>
  e.duration?.toLowerCase().includes("present")
);

const OPTIONS = [
  "About Vaibhav",
  "Skills & Stack",
  "Work Experience",
  "Current Role",
  "Projects",
  "AWS & Cloud",
  "Education",
  "Contact Info",
  "Available for hire?",
  "Location",
];

/**
 * PortfolioChatBot — react-chatbotify v2
 * Left-side, theme-aware, dynamic answers from portfolio data.
 * Flow is memoized so it is never recreated on re-render.
 */
const RobotIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="65"
    height="65"
    role="img"
    aria-label="Chat with Vaibhav's assistant"
  >
    {/* floating group */}
    <g>
      <animateTransform
        attributeName="transform"
        type="translate"
        values="0,0; 0,-4; 0,0"
        dur="2.4s"
        repeatCount="indefinite"
        calcMode="spline"
        keySplines="0.45 0 0.55 1; 0.45 0 0.55 1"
      />

      {/* Antenna stem */}
      <line x1="50" y1="22" x2="50" y2="10" stroke="#64B5F6" strokeWidth="2.5" strokeLinecap="round" />

      {/* Antenna ball */}
      <circle cx="50" cy="8" r="5" fill="#FF6B6B">
        <animate attributeName="r" values="5;6;5" dur="1.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.6 1;0.4 0 0.6 1" />
        <animate attributeName="fill" values="#FF6B6B;#FF8A80;#FF6B6B" dur="1.2s" repeatCount="indefinite" />
      </circle>

      {/* Head */}
      <rect x="18" y="22" width="64" height="52" rx="12" ry="12" fill="#4FC3F7" />
      {/* Head shine */}
      <rect x="22" y="26" width="28" height="12" rx="6" ry="6" fill="rgba(255,255,255,0.25)" />

      {/* Left ear */}
      <rect x="10" y="36" width="10" height="16" rx="3" ry="3" fill="#29B6F6" />
      {/* Right ear */}
      <rect x="80" y="36" width="10" height="16" rx="3" ry="3" fill="#29B6F6" />

      {/* Eye sockets */}
      <ellipse cx="36" cy="44" rx="12" ry="12" fill="white" />
      <ellipse cx="64" cy="44" rx="12" ry="12" fill="white" />

      {/* Left pupil */}
      <ellipse cx="36" cy="44" rx="6" ry="6" fill="#1565C0">
        <animate attributeName="ry" values="6;6;6;6;1;6;6" dur="3.5s" repeatCount="indefinite" calcMode="discrete" />
      </ellipse>
      {/* Left eye shine */}
      <circle cx="39" cy="41" r="2" fill="white" />

      {/* Right pupil */}
      <ellipse cx="64" cy="44" rx="6" ry="6" fill="#1565C0">
        <animate attributeName="ry" values="6;6;6;6;1;6;6" dur="3.5s" repeatCount="indefinite" calcMode="discrete" />
      </ellipse>
      {/* Right eye shine */}
      <circle cx="67" cy="41" r="2" fill="white" />

      {/* Mouth display */}
      <rect x="30" y="60" width="40" height="10" rx="5" ry="5" fill="#0D47A1" />
      {/* Mouth wave dots */}
      <circle cx="40" cy="65" r="2.5" fill="#4FC3F7">
        <animate attributeName="cy" values="65;62;65" dur="0.8s" repeatCount="indefinite" begin="0s" />
      </circle>
      <circle cx="50" cy="65" r="2.5" fill="#4FC3F7">
        <animate attributeName="cy" values="65;62;65" dur="0.8s" repeatCount="indefinite" begin="0.15s" />
      </circle>
      <circle cx="60" cy="65" r="2.5" fill="#4FC3F7">
        <animate attributeName="cy" values="65;62;65" dur="0.8s" repeatCount="indefinite" begin="0.3s" />
      </circle>

      {/* Body */}
      <rect x="26" y="75" width="48" height="22" rx="8" ry="8" fill="#29B6F6" />
      {/* Body panel */}
      <rect x="34" y="80" width="32" height="12" rx="4" ry="4" fill="#0288D1" />
      {/* Body light */}
      <circle cx="40" cy="86" r="3" fill="#00E5FF">
        <animate attributeName="opacity" values="1;0.3;1" dur="1.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="50" cy="86" r="3" fill="#69F0AE">
        <animate attributeName="opacity" values="1;0.3;1" dur="1.5s" repeatCount="indefinite" begin="0.5s" />
      </circle>
      <circle cx="60" cy="86" r="3" fill="#FF6B6B">
        <animate attributeName="opacity" values="1;0.3;1" dur="1.5s" repeatCount="indefinite" begin="1s" />
      </circle>
    </g>
  </svg>
);

export default function PortfolioChatBot({ theme }) {
  const accent    = theme?.imageHighlight || "#667eea";
  const bg        = theme?.body          || "#ffffff";
  const textColor = theme?.text          || "#333333";
  const bubbleBg  = theme?.highlight     || "#f0f0f8";

  /* ── Stable flow — useMemo with [] so it is created exactly once ───── */
  const flow = useMemo(
    () => ({
      start: {
        message:
          "Hi! 👋 I'm Vaibhav's virtual assistant. What would you like to know?",
        options: OPTIONS,
        path: "process",
      },

      /* Single processing step — answer shown, then auto-goes to menu */
      process: {
        message: (params) => getAnswer(params.userInput),
        transition: { duration: 500 },
        path: "menu",
      },

      /* Fresh options shown after every answer */
      menu: {
        message: "Anything else you'd like to know? 😊",
        options: OPTIONS,
        path: "process",
      },
    }),
    [] // eslint-disable-line react-hooks/exhaustive-deps
  );

  /* ── Settings ────────────────────────────────────────────────────── */
  const settings = useMemo(
    () => ({
      general: {
        primaryColor: accent,
        secondaryColor: accent,
        fontFamily: "'Google Sans Regular', Arial, sans-serif",
        embedded: false,
        desktopEnabled: true,
        mobileEnabled: true,
      },
      chatButton: { icon: RobotIcon },
      header: {
        title: "Vaibhav's Assistant",
        showAvatar: false,
        closeChatOnClickOutside: true,
      },
      botBubble: {
        showAvatar: false,
      },
      notification: { disabled: true },
      audio: { disabled: true },
      voice: { disabled: true },
      footer: { text: "" },
      chatHistory: { disabled: true },
      tooltip: { mode: "NEVER" },
    }),
    [accent]
  );

  /* ── Styles ──────────────────────────────────────────────────────── */
  const styles = useMemo(
    () => ({
      chatButtonStyle: {
        background: "transparent",
        boxShadow: "none",
        border: "none",
        bottom: "1rem",
        left: "1rem",
        right: "unset",
        width: "70px",
        height: "70px",
      },
      chatIconStyle: {
        width: "70px",
        height: "70px",
        background: "transparent",
        borderRadius: "0",
        padding: "0",
      },
      chatWindowStyle: {
        position: "fixed" as const,
        bottom: "5rem",
        left: "1.5rem",
        right: "unset",
        width: "370px",
        height: "530px",
        maxHeight: "80vh",
        maxWidth: "calc(100vw - 2rem)",
      },
      headerStyle: { background: accent, color: "#ffffff" },
      bodyStyle: { background: bg },
      botBubbleStyle: { background: bubbleBg, color: textColor },
      userBubbleStyle: { background: accent, color: "#ffffff" },
      inputAreaStyle: { background: bg, borderTop: `1px solid ${bubbleBg}` },
      userInputStyle: { background: bg, color: textColor },
      sendButtonStyle: { background: accent },
      footerStyle: { display: "none" },
      tooltipStyle: {
        background: bg,
        color: textColor,
        border: `1px solid ${accent}`,
        borderRadius: "12px",
        fontSize: "13px",
        padding: "6px 12px",
        whiteSpace: "nowrap",
        /* position — override library's inline right:115 for left-side button */
        right: "unset",
        left: "calc(1.5rem + 70px)",
        bottom: "1.8rem",
        zIndex: 10000,
      },
      optionStyle: {
        border: `1.5px solid ${accent}`,
        color: accent,
        background: bg,
        borderRadius: "20px",
        cursor: "pointer",
        opacity: "1",
        pointerEvents: "auto",
      },
      optionHoveredStyle: {
        background: accent,
        color: "#ffffff",
        opacity: "1",
      },
    }),
    [accent, bg, textColor, bubbleBg]
  );

  return <ChatBot key={accent} flow={flow} settings={settings} styles={styles} />;
}

/* ── FAQ answers ─────────────────────────────────────────────────────── */
function getAnswer(input) {
  if (!input) return fallback();
  const q = input.toLowerCase();

  if (match(q, ["about", "who", "vaibhav", "introduce", "tell me"]))
    return `Vaibhav More is a Senior Software Engineer with ${YEARS_EXP}+ years of full-stack experience, currently at ${CURRENT_JOB?.company || "Kerv Digital"}. 🚀`;

  if (match(q, ["current", "present", "now", "kerv"]))
    return CURRENT_JOB
      ? `Currently: ${CURRENT_JOB.title} at ${CURRENT_JOB.company} (${CURRENT_JOB.duration}) — ${CURRENT_JOB.location}. 💼`
      : "Currently working at Kerv Digital as Senior Software Engineer. 💼";

  if (match(q, ["skill", "tech", "stack", "react", "node", "typescript"]))
    return "⚛️ React, Next.js, TypeScript, Vite\n🟢 Node.js, NestJS, Express, GraphQL\n☁️ AWS (Lambda, SQS, S3, EC2)\n🐳 Docker, Kubernetes, CI/CD\n🗄️ PostgreSQL, MongoDB, Redis";

  if (match(q, ["experience", "work", "job", "company", "career"]))
    return `${YEARS_EXP}+ years of professional experience:\n🏢 Kerv Digital — Sr. SSE (Dec 2025–Present)\n🏢 Esyasoft — Sr. SSE (2023–2025)\n🏢 GrowthPal — SE (2022–2023)\n🏢 Cognizant — SD (2022)`;

  if (match(q, ["project", "built", "portfolio", "app"]))
    return "📊 Investment Banking System (GrowthPal)\n⚡ Meter Data Management (Esyasoft)\n🛒 Grospick Food Delivery (MERN)\n🎬 React Movie App\n🌐 This Portfolio (React + Zustand)";

  if (match(q, ["aws", "cloud", "serverless", "lambda"]))
    return "☁️ AWS — Lambda, API Gateway, SQS, S3, EC2\n🔧 GCP & Azure exposure\n🐳 Docker + Kubernetes\n🔄 CI/CD — Bamboo & GitHub Actions";

  if (match(q, ["contact", "email", "reach", "message"]))
    return "📧 vaibhavmore24051997@gmail.com\n💼 linkedin.com/in/vaibhav131\n🐙 github.com/mvaibhav131\n\nOr use the Contact page on this site!";

  if (match(q, ["hire", "freelance", "available", "opportunity"]))
    return "Vaibhav is open to interesting opportunities! Reach out at vaibhavmore24051997@gmail.com or connect on LinkedIn. 🤝";

  if (match(q, ["education", "degree", "college", "university"]))
    return "🎓 B.E. — Savitribai Phule Pune University (2017–2020)\n📘 Diploma — MSBTE (2015–2017)\n💻 Full Stack Bootcamp — Masai School (2021–2022)";

  if (match(q, ["location", "pune", "where", "based", "india"]))
    return "📍 Pune, Maharashtra, India — currently working with Kerv Digital.";

  return fallback();
}

function match(text, keywords) {
  return keywords.some((kw) => text.includes(kw));
}

function fallback() {
  return "I'm not sure about that 🤔. Try one of the options above, or visit the Contact page!";
}
