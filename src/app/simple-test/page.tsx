export default function SimpleTestPage() {
  return (
    <div style={{ 
      minHeight: "100vh", 
      display: "flex", 
      alignItems: "center", 
      justifyContent: "center",
      textAlign: "center",
      padding: "20px"
    }}>
      <div>
        <h1 style={{ 
          fontSize: "2.5rem", 
          fontWeight: 700,
          color: "#146ef5",
          marginBottom: "24px"
        }}>
          Simple Test Page
        </h1>
        
        <p style={{ fontSize: "1.2rem", marginBottom: "24px" }}>
          This is a minimal test page without devlink components.
        </p>

        <a 
          href="/" 
          style={{
            display: "inline-block",
            padding: "12px 24px",
            background: "#146ef5",
            color: "white",
            textDecoration: "none",
            borderRadius: "4px",
            fontWeight: 600
          }}
        >
          Back to Home
        </a>
      </div>
    </div>
  );
}
