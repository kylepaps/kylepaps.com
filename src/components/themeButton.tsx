"use client";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const ThemeButton = () => {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }
  if (resolvedTheme === "light") {
    setTheme("light");
  }
  if (resolvedTheme === "dark") {
    setTheme("dark");
  }
  if (theme === "light") {
    return <button onClick={() => setTheme("dark")}>🤠</button>;
  }
  if (theme === "dark") {
    return <button onClick={() => setTheme("light")}>🫨</button>;
  }
};

export default ThemeButton;
