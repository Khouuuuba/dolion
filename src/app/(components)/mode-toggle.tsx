'use client';

import React from "react";
import { Button } from "@/components/ui/button";
import { SunIcon, MoonIcon } from "lucide-react";

export function ModeToggle() {
  const [theme, setTheme] = React.useState("light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      className="rounded-full"
    >
      <SunIcon
        className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
      />
      <MoonIcon
        className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
      />
      <span className="sr-only">
        Toggle theme
      </span>
    </Button>
  );
}
