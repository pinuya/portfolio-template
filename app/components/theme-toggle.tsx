import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { LuMoon, LuSun } from "react-icons/lu";

import { Button } from "~/components/ui/button";

export const THEME_STORAGE_KEY = "portfolio-theme";

/**
 * Runs before React hydrates so the correct theme is painted on the very
 * first frame — without it the page flashes light before switching to dark.
 * Injected in `app/root.tsx`.
 */
export const themeScript = `
(function () {
  try {
    var stored = localStorage.getItem("${THEME_STORAGE_KEY}");
    var prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (stored === "dark" || (!stored && prefersDark)) {
      document.documentElement.classList.add("dark");
    }
  } catch (e) {}
})();
`;

export function ThemeToggle() {
  const { t } = useTranslation();
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  // The server has no idea which theme is active, so we read the class that
  // `themeScript` already applied instead of rendering a guess.
  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
    setMounted(true);
  }, []);

  function toggleTheme() {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem(THEME_STORAGE_KEY, next ? "dark" : "light");
    } catch {
      // storage can be blocked — the toggle still works for this session
    }
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      aria-label={t("nav.theme")}
      title={t("nav.theme")}
    >
      {/* Before mount both icons would be a guess, so render nothing visible */}
      <span className={mounted ? "contents" : "opacity-0"}>
        {isDark ? <LuSun /> : <LuMoon />}
      </span>
    </Button>
  );
}
