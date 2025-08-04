const express = require("express");
const axios = require("axios");
const router = express.Router();

router.get("/", async (req, res) => {
  const { word } = req.query;
  try {
    const response = await axios.get(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    );
    res.json(response.data[0]);
  } catch (err) {
    res.status(500).json({ error: "Meaning not found" });
  }
});

module.exports = router;
