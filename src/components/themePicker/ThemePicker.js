import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./ThemePicker.css";
import useThemeStore from "../../store/store";

const themes = [
  { key: "white", color: "#EDF9FE", label: "Light" },
  { key: "dark", color: "#1a1a2e", label: "Dark" },
  { key: "blue", color: "#0E6BA8", label: "Blue" },
  { key: "purple", color: "#BE95C4", label: "Purple" },
  { key: "green", color: "#55a630", label: "Green" },
  { key: "red", color: "#dc2f02", label: "Red" },
  { key: "pink", color: "#ef476f", label: "Pink" },
  { key: "teal", color: "#084c61", label: "Teal" },
  { key: "violet", color: "#9b5de5", label: "Violet" },
  { key: "orange", color: "#f77f00", label: "Orange" },
  { key: "yellow", color: "#f7b731", label: "Yellow" },
  { key: "brown", color: "#FB6376", label: "Brown" },
];

export default function ThemePicker({ mobileOnly }) {
  const [open, setOpen] = useState(false);
  const setTheme = useThemeStore((state) => state.setTheme);
  const currentTheme = useThemeStore((state) => state.theme);

  const handleSelect = (key) => {
    setTheme(key);
    setOpen(false);
  };

  const panel = (
    <div className="theme-picker-panel">
      <p className="theme-picker-title">Choose Theme</p>
      <div className="theme-picker-grid">
        {themes.map((t) => (
          <button
            key={t.key}
            className={`theme-circle ${currentTheme === t.key ? "active" : ""}`}
            style={{ backgroundColor: t.color }}
            onClick={() => handleSelect(t.key)}
            title={t.label}
          />
        ))}
      </div>
    </div>
  );

  return (
    <div
      className={`theme-picker-wrapper${mobileOnly ? " mobile-floating" : ""}`}
    >
      <button
        className="theme-picker-fab"
        onClick={() => setOpen((prev) => !prev)}
        title="Change Theme"
      >
        🎨
      </button>
      {open && ReactDOM.createPortal(panel, document.body)}
    </div>
  );
}
