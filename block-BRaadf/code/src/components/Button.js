import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../theme/ThemeContext";

export default function SwitchButton() {
  const theme = useContext(ThemeContext);
  const { isDarkMode } = theme.data;
  return (
    <button
      className={`btn ${isDarkMode ? "btn-dark" : "btn-light"}`}
      onClick={theme.changeMode}
    >
      {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
    </button>
  );
}
