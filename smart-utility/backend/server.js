require("dotenv").config();

const express = require("express");
const cors = require("cors");
const urlRoutes = require("./routes/url");
const weatherRoutes = require("./routes/weather");
const dictionaryRoutes = require("./routes/dictionary");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/url", urlRoutes);
app.use("/api/weather", weatherRoutes);
app.use("/api/word", dictionaryRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
