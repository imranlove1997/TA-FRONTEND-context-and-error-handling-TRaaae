import { useContext } from "react";
import { ThemeContext } from "../theme/ThemeContext";

function Title({ text }) {
  const theme = useContext(ThemeContext);
  const isDarkMode = theme.data.isDarkMode;
  return (
    <h2
      className={`heading ${
        isDarkMode ? "sub-heading-dark" : "sub-heading-light"
      }`}
    >
      {text}
    </h2>
  );
}

export default Title;
