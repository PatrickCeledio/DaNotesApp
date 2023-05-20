"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express")); // import express library
const app = (0, express_1.default)(); // app is our server
const port = 5000; // Define a port; a connection point on a server
// Arrow function; a function without a name
app.get("/", (req, res) => {
    res.send("Hello World!");
});
// Start the server
app.listen(port, () => {
    console.log("Server returning on port: " + port);
});
