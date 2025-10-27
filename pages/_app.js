import { useEffect, useState } from "react";
import Language from "@/Components/Language";
import { greenPinkTheme, blueOrangeTheme } from "@/Components/Theme";
import GlobalStyle from "../styles";

export default function App({ Component, pageProps }) {
  const [language, setLanguage] = useState("EN");

  // Choose theme for the language selector boxes
  const theme =
    Component.pageTheme === "blueOrange" ? blueOrangeTheme : greenPinkTheme;

  // Update <body> background dynamically
  useEffect(() => {
    let bgColor;

    if (Component.pageTheme === "blueOrange") {
      // Blue/orange page
      bgColor = language === "EN" ? "#003db2" : "#ff9e33";
    } else {
      // Green/pink homepage
      bgColor = language === "EN" ? "#007b1d" : "#ffdbf6";
    }

    document.body.style.backgroundColor = bgColor;
  }, [language, Component.pageTheme]);

  return (
    <>
      <GlobalStyle />
      <Language onSelect={setLanguage} language={language} theme={theme} />
      <Component {...pageProps} language={language} />
    </>
  );
}
