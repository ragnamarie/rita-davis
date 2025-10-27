export default function TeachingPage({ language }) {
  const isEN = language === "EN";

  const styles = {
    height: "100vh",
    backgroundColor: isEN ? "#003db2" : "#ff9e33",
    color: isEN ? "#ff9e33" : "#003db2",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <div style={styles}>
      <h1>Hello ({language})</h1>
      <p>This page uses the green/pink language theme for the selector.</p>
    </div>
  );
}

// Optional: tag to indicate which theme to use
TeachingPage.pageTheme = "blueOrange";
