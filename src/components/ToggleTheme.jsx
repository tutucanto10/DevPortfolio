import { useState, useEffect } from "react";

export default function ToggleTheme() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    if (dark) {
      document.documentElement.style.setProperty("--color-night-bg", "#1a1b27");
      document.documentElement.style.setProperty("--color-night-surface", "#24283b");
    } else {
      document.documentElement.style.setProperty("--color-night-bg", "#e5e7eb");
      document.documentElement.style.setProperty("--color-night-surface", "#f9fafb");
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="p-2 rounded-full bg-night-surface text-night-accent hover:bg-night-accent hover:text-white transition"
    >
      {dark ? "🌙" : "☀️"}
    </button>
  );
}
