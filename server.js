require("dotenv").config();

const express = require("express");

const app = express();

app.use("/", require("./route/userRoute"));

app.listen(parseInt(process.env.PORT, 10), () => console.log(`Server is connected on ${parseInt(process.env.PORT, 10)}`));

module.exports = app;
