export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#000",
        color: "#fff",
        fontFamily: "Inter, sans-serif",
        display: "flex",
        flexDirection: "column",
        padding: "60px 20px",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <h1
        style={{
          fontSize: "48px",
          fontWeight: 700,
          marginBottom: "20px",
        }}
      >
        Novalyte™ AI
      </h1>

      <p
        style={{
          fontSize: "22px",
          opacity: 0.9,
          maxWidth: "700px",
          lineHeight: "1.5",
          marginBottom: "40px",
        }}
      >
        The intelligent health infrastructure powering modern men’s clinics —
        patient acquisition, real-time performance analytics, and integrated
        therapeutic equipment management.
      </p>

      <button
        style={{
          backgroundColor: "#0F62FE",
          border: "none",
          padding: "16px 28px",
          fontSize: "18px",
          borderRadius: "8px",
          cursor: "pointer",
          color: "#fff",
          fontWeight: "600",
        }}
        onClick={() =>
          window.location.href = "https://app.novalyte.io"
        }
      >
      </button>
    </main>
  );
}
