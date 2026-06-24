const express = require("express");
const db = require("../db");

const router = express.Router();

router.post("/conversion", (req, res) => {
  const { studentName, paymentId } = req.body;

  db.run(
    `
      INSERT INTO conversions
      (studentName, amount, paymentId, status)
      VALUES (?, ?, ?, ?)
    `,
    [studentName, 100, paymentId, "SUCCESS"],
    function (err) {
      if (err) {
        return res.status(500).json({
          success: false,
          error: err.message
        });
      }

      res.json({
        success: true
      });
    }
  );
});

router.get("/metrics", (req, res) => {
  db.all(
    "SELECT * FROM conversions",
    [],
    (err, rows) => {
      if (err) {
        return res.status(500).json({
          error: err.message
        });
      }

      res.json({
        totalPayments: rows.length,
        totalRevenue: rows.length * 100,
        records: rows
      });
    }
  );
});

module.exports = router;