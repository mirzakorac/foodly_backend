
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const dotenv = require("dotenv");

dotenv.config();

mongoose.connect(process.env.MONGOURL)
    .then(() => console.log("Foodly Database Connected"))
    .catch((err) => console.log("Foodly Database Error"))



app.get("/", (req, res) => res.send("Hello World"))
app.listen(process.env.PORT || 6013, () => console.log(`Foodly Backend is running on port ${process.env.PORT}!`));