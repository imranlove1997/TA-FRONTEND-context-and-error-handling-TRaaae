import { useContext } from "react";
import { ThemeContext } from "../theme/ThemeContext";

function Header() {
  const theme = useContext(ThemeContext);
  const isDarkMode = theme.data.isDarkMode;
  return (
    <h1 className={`heading ${isDarkMode ? "heading-dark" : "heading-light"}`}>
      {isDarkMode ? "Dark Mode" : "Light Mode"}
    </h1>
  );
}

export default Header;
