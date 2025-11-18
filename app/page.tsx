export default function Home() {
  return (
    <div style={{
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      background: "black",
      color: "white",
      fontFamily: "sans-serif",
      textAlign: "center",
      padding: "20px"
    }}>
      <h1 style={{ fontSize: "36px", marginBottom: "12px" }}>
        Novalyte™ AI
      </h1>
      <p style={{ fontSize: "20px", opacity: 0.85 }}>
        Your intelligent health infrastructure is loading…
      </p>
    </div>
  );
}
