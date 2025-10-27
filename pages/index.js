export default function HomePage({ language }) {
  const isEN = language === "EN";

  const styles = {
    height: "100vh",
    backgroundColor: isEN ? "#007b1d" : "#ffdbf6",
    color: isEN ? "#ffdbf6" : "#007b1d",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <div style={styles}>
      <h1>Hello ({language})</h1>
    </div>
  );
}
