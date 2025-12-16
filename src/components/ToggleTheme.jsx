import React from "react";

export default function ToggleTheme({ theme, setTheme }) {
  return (
    <button className="toggle-theme" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      {theme === "light" ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}
