// routes/weather.js
require("dotenv").config();

const express = require("express");
const axios = require("axios");
const router = express.Router();

const API_KEY = process.env.WEATHER_API_KEY;
console.log("💡 WEATHER_API_KEY from .env:", API_KEY);

router.get("/", async (req, res) => {
  const city = req.query.city;

  if (!city) {
    return res.status(400).json({ error: "City parameter is required" });
  }

  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    res.json(response.data);
  } catch (error) {
    console.error(
      "Error fetching weather data:",
      error?.response?.data || error.message
    );
    res.status(500).json({ error: "Weather info not found" });
  }
});

module.exports = router;
