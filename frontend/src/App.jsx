import { useState } from "react";

function App() {
  const [paid, setPaid] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handlePayment = async () => {
    try {
      setLoading(true);
      setError("");

      // Simulate payment processing
      await new Promise((resolve) =>
        setTimeout(resolve, 2000)
      );

      // Save conversion to backend
      const response = await fetch(
        "http://localhost:10000/api/payment-success",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to save payment");
      }

      setPaid(true);
    } catch (err) {
      setError(
        "Payment completed but tracking failed. Please try again."
      );
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        maxWidth: "500px",
        margin: "50px auto",
        padding: "20px",
        textAlign: "center",
        border: "1px solid #ddd",
        borderRadius: "10px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1>PlaceMux Payment Flow</h1>

      {!paid ? (
        <>
          <h2>Frontend Developer</h2>

          <p>
            Application Fee: <strong>₹100</strong>
          </p>

          {error && (
            <p style={{ color: "red" }}>
              {error}
            </p>
          )}

          <button
            onClick={handlePayment}
            disabled={loading}
            style={{
              padding: "10px 20px",
              cursor: loading
                ? "not-allowed"
                : "pointer",
            }}
          >
            {loading
              ? "Processing..."
              : "Pay ₹100 & Apply"}
          </button>
        </>
      ) : (
        <>
          <h2>✅ Payment Successful</h2>

          <p>
            Application Submitted Successfully
          </p>

          <div
            style={{
              marginTop: "20px",
              padding: "10px",
              background: "#f5f5f5",
              borderRadius: "8px",
            }}
          >
            Status: Applied
          </div>
        </>
      )}
    </div>
  );
}

export default App;