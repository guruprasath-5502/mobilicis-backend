const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const userRoutes = require("./routes/UserRoutes");

const PORT = 3001;
const MONGO_URI = "mongodb+srv://Guru_prasath:GPguru5502@guru.edpklcq.mongodb.net/?retryWrites=true&w=majority";

app.use(cors({
    origin: "*",
}));

mongoose.connect(MONGO_URI)
.then(() => {
    app.listen(PORT,() => {
        console.log(`DB connected successfully and Listening to Port : ${PORT}`);
    })
})
.catch((error) => {
    console.log(error);
})

app.use("/api/users",userRoutes);
