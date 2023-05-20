import express from "express"; // import express library
const app = express(); // app is our server
// const port = 5000; // Define a port; a connection point on a server
const port = undefined;

// Arrow function; a function without a name
app.get("/",(req,res) => {
    res.send("Hello, World!");
});

// Start the server
// Setting "port" to "port!" tells the compiler that port variable will always have a int value
app.listen(port, () => {
    console.log("Server returning on port: " + port);
});