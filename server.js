
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const dotenv = require("dotenv");
const CategotyRoute = require("./routes/category")

dotenv.config();

mongoose.connect(process.env.MONGOURL)
    .then(() => console.log("Foodly Database Connected"))
    .catch((err) => console.log("Foodly Database Error"))



app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use("/api/category", CategotyRoute)



app.listen(process.env.PORT || 6013, () => console.log(`Foodly Backend is running on port ${process.env.PORT}!`));