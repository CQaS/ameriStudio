"use client";

import { useEffect, useState } from "react";

export default function DarckToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Al iniciar, verifica si ya hay un modo guardado
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    }
  }, []);

  const darckTheme = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setDarkMode(true);
    }
  };

  return (
    <button
      onClick={darckTheme}
      className="text-2xl p-2 rounded-full transition hover:bg-gray-200 dark:hover:bg-gray-700"
      aria-label="Toggle theme"
    >
      {darkMode ? "🌞" : "🌙"}
    </button>
  );
}
