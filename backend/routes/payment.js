const express = require("express");

const router = express.Router();

router.post("/create-order", (req, res) => {
  const order = {
    id: "ORDER_" + Date.now(),
    amount: 10000,
    currency: "INR"
  };

  res.json(order);
});

module.exports = router;