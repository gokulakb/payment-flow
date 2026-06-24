const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/api/payment-success", (req, res) => {

  db.run(
    `
      INSERT INTO conversions
      (amount,status)
      VALUES (?,?)
    `,
    [100, "SUCCESS"]
  );

  res.json({
    success: true
  });

});

app.get("/api/metrics", (req, res) => {

  db.all(
    "SELECT * FROM conversions",
    [],
    (err, rows) => {

      res.json({
        applications_started: rows.length,
        payments_completed: rows.length,
        conversion_rate:
          rows.length > 0
            ? "100%"
            : "0%",
        records: rows
      });

    }
  );

});

app.get("/", (req, res) => {
  res.send("Payment Flow API Running");
});

app.listen(10000, () => {
  console.log("Server running on 10000");
});