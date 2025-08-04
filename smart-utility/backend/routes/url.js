const express = require("express");
const fs = require("fs");
const path = require("path");
const router = express.Router();

const file = path.join(__dirname, "../data/urlMap.json");
let urlMap = fs.existsSync(file) ? JSON.parse(fs.readFileSync(file)) : {};

function generateCode(length = 6) {
  const chars =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  return Array.from(
    { length },
    () => chars[Math.floor(Math.random() * chars.length)]
  ).join("");
}

router.post("/shorten", (req, res) => {
  const { longUrl } = req.body;
  const shortCode = generateCode();
  urlMap[shortCode] = longUrl;
  fs.writeFileSync(file, JSON.stringify(urlMap));
  res.json({ shortUrl: `http://localhost:5000/api/url/${shortCode}` });
});

router.get("/:code", (req, res) => {
  const updatedMap = fs.existsSync(file)
    ? JSON.parse(fs.readFileSync(file))
    : {};
  const longUrl = updatedMap[req.params.code];
  if (longUrl) {
    res.redirect(longUrl);
  } else {
    res.status(404).json({ error: "Short URL not found" });
  }
});

module.exports = router;
