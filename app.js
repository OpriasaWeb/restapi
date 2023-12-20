require("dotenv").config();
const express = require("express");
const app = express();

app.get("/api", (req, res) => {
  res.json({
    success: 1,
    message: "The REST API is working.",
  })
})

app.listen(process.env.PORT, () => {
  console.log(`Server up and running on PORT ${process.env.PORT}.`);
})