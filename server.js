const express = require("express");
const mongoose = require("mongoose");
const errorHandler = require("./middleware/errorHandler");
const dotenv = require('dotenv').config();
const app = express();

const port = process.env.PORT || 5000;
app.use(express.json());
app.use("/api/contacts", require("./routes/contactRoutes"));

app.use("/api/users", require("./routes/userRoutes"));
// app.get('/api/contacts', (req, res) => {
//     res.status(200).json({ message: 'Obtaining all contacts..' });
// })

app.use(errorHandler);

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Mongodb connected.....");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        process.exit(1);
    }
};


connectDB();
app.listen(port, () => {
    console.log(`app running on ${port}`);
});