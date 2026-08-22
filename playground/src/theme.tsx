import type { ReactNode } from "react";
import { createContext, useContext, useEffect, useState } from "react";

export type Theme = "system" | "light" | "dark";
export type ThemeMode = "light" | "dark";

interface ThemeValue {
  theme: Theme;
  effectiveTheme: ThemeMode;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeValue | null>(null);

function getInitialTheme(): Theme {
  const stored = localStorage.getItem("elemental:theme") as Theme | null;
  if (stored === "light" || stored === "dark") return stored;
  // `system` (or legacy) means no explicit preference — follow OS
  return "system";
}

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  root.classList.remove("light", "dark");
  if (theme === "light" || theme === "dark") {
    root.classList.add(theme);
    localStorage.setItem("elemental:theme", theme);
  } else {
    // Two-state toggle: no stored value = follow system (Lea Verou / Josh
    // Collinsworth — store only when explicit choice differs from system)
    localStorage.removeItem("elemental:theme");
  }
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);
  const [systemDark, setSystemDark] = useState(
    () => window.matchMedia("(prefers-color-scheme: dark)").matches,
  );

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = (event: MediaQueryListEvent) => setSystemDark(event.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const systemTheme: ThemeMode = systemDark ? "dark" : "light";
  const effectiveTheme: ThemeMode = theme === "system" ? systemTheme : theme;

  // Two-state toggle (Verou / Collinsworth): toggle between system and
  // opposite-of-system. Store only when explicit choice differs from system;
  // otherwise remove storage so site tracks OS again.
  const toggleTheme = () => {
    if (theme === "system") {
      const opposite: ThemeMode = systemTheme === "dark" ? "light" : "dark";
      setTheme(opposite);
    } else {
      setTheme("system");
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, effectiveTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme(): ThemeValue {
  const value = useContext(ThemeContext);
  if (!value) throw new Error("useTheme must be used within <ThemeProvider>");
  return value;
}
