export default function TeachingPage({ language }) {
  const isEN = language === "EN";

  const styles = {
    height: "100vh",
    backgroundColor: isEN ? "black" : "white",
    color: isEN ? "white" : "black",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <div style={styles}>
      <h1>teaching ({language})</h1>
    </div>
  );
}
