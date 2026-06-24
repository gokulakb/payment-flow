const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

let conversions = [];

app.get("/", (req, res) => {
  res.send("Payment Flow API Running");
});

app.post("/api/payment-success", (req, res) => {
  conversions.push({
    amount: 100,
    status: "SUCCESS",
    createdAt: new Date()
  });

  res.json({
    success: true
  });
});

app.get("/api/metrics", (req, res) => {
  res.json({
    applications_started: conversions.length,
    payments_completed: conversions.length,
    conversion_rate:
      conversions.length > 0 ? "100%" : "0%",
    records: conversions
  });
});

const PORT = process.env.PORT || 10000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});