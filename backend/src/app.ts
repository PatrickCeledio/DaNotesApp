import "dotenv/config"; // Connects dotenv file
import express, { NextFunction, Request, Response } from "express";
import notesRoutes from "./routes/notes";
import morgan from "morgan";
import createHttpError, { isHttpError } from "http-errors";

const app = express(); // server

// morgan displays helpful HTTP logging in the console
// Set to "dev" for specific logs
// Prints "GET /api/notes/646ad646318244e23d21d701 200 67.537 ms - 172" to console
app.use(morgan("dev"));

app.use(express.json()); 

// Middleware checks /api/notes endpoint 
app.use("/api/notes", notesRoutes);

// app.get and app.use are middlewares

// We reach this middleware if none of our routes fits
app.use((req, res, next) => {
    next(createHttpError(404, "Endpoint not found"));
});

// Error handler
// Takes in data suspected as an error, and req, res, next.
// Request, Response, and NextFunction must be from the express package
app.use((error: unknown, req: Request, res: Response, next: NextFunction) => {
    console.error(error);
    let errorMessage = "An unknown error occured. Yikes.";
    let statusCode = 500; 

    /* Deprecated basic error handling code
    //Check error is actually an Error data type
    if (error instanceof Error) errorMessage = error.message;

    //Return 500 - Internal Service Error
    res.status(500).json({ error: errorMessage });
    */

    if (isHttpError(error)) {
        statusCode = error.status;
        errorMessage = error.message;
    }

    res.status(statusCode).json({ error: errorMessage });
});

export default app;