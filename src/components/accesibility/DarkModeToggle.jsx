import React from "react";
import Toggle from "react-toggle";
import { UseColorScheme } from "./UseColorSheme";
import { Moon, Sun } from "./AccesibilityIcons";

export const DarkModeToggle = () => {
  const { isDark, setIsDark } = UseColorScheme();
  return (
    <div className="w-[150px]">
      <Toggle
        checked={isDark}
        onChange={({ target }) => setIsDark(target.checked)}
        icons={{ checked: <Sun />, unchecked: <Moon /> }}
        aria-label="Dark mode toggle"
      />
    </div>
  );
};
