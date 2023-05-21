import "dotenv/config"; // Connects dotenv file
import mongoose from "mongoose";
import express from "express";
import env from "./util/validateEnv";
const app = express(); // server

// Arrow function; a function without a name
app.get("/", (req, res) => {
    res.send("Hello, World!");
});

// Init port variable
const port = env.PORT;

// Connect database
// .connect returns a promise
mongoose.connect(env.MONGO_CONNECTION_STRING)
    .then(() => {
        // After connection succeeded
        console.log("Mongoose connected. ");

        // Start the server
        app.listen(port, () => {
            console.log("Server returning on port: " + port);
        });
    })
    // Catch error and output error message
    .catch(console.error);


