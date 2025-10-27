import { useState } from "react";
import Language from "@/Components/Language";
import GlobalStyle from "../styles";

export default function App({ Component, pageProps }) {
  const [language, setLanguage] = useState("EN");

  return (
    <>
      <GlobalStyle />

      {/* language switcher */}
      <Language onSelect={setLanguage} language={language} />

      {/* pass language as a prop to every page */}
      <Component {...pageProps} language={language} />
    </>
  );
}
