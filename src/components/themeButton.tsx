"use client";
import React, { useEffect } from "react";
import { useTheme } from "next-themes";

const ThemeButton = () => {
  const { theme, resolvedTheme, setTheme } = useTheme();
  useEffect(() => {
    if (resolvedTheme === "light" && theme === "system") {
      setTheme("light");
    }
    if (resolvedTheme === "dark" && theme === "system") {
      setTheme("dark");
    }
  }, []);
  if (theme === "light") {
    return <button onClick={() => setTheme("dark")}>🤠</button>;
  }
  if (theme === "dark") {
    return <button onClick={() => setTheme("light")}>🫨</button>;
  }
};

export default ThemeButton;
