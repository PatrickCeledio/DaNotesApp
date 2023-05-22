import app from "./app";
import env from "./util/validateEnv";
import mongoose from "mongoose";

const port = env.PORT; // Init port variable

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


