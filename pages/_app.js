import { useState } from "react";
import Language from "@/Components/Language";
import { greenPinkTheme, blueOrangeTheme } from "@/Components/Theme";
import GlobalStyle from "../styles"; // optional global styles

export default function App({ Component, pageProps }) {
  const [language, setLanguage] = useState("EN");

  // Choose theme based on the page (default to greenPinkTheme)
  const theme =
    Component.pageTheme === "blueOrange" ? blueOrangeTheme : greenPinkTheme;

  return (
    <>
      <GlobalStyle />

      {/* Floating language selector on top of all pages */}
      <Language onSelect={setLanguage} language={language} theme={theme} />

      {/* Pass language prop to page components */}
      <Component {...pageProps} language={language} />
    </>
  );
}
