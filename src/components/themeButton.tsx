"use client";
import React, { useEffect } from "react";
import { useTheme } from "next-themes";

const ThemeButton = () => {
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    setTheme("system");
  }, []);
  if (theme === "light") {
    return <button onClick={() => setTheme("dark")}>🤠</button>;
  } else if (theme === "dark") {
    return <button onClick={() => setTheme("light")}>🫨</button>;
  }
  return <button onClick={() => setTheme("light")}>🫨</button>;
};

export default ThemeButton;
