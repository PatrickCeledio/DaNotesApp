import "dotenv/config"; // Connects dotenv file
import express, { NextFunction, Request, Response } from "express";
import notesRoutes from "./routes/notes";

const app = express(); // server

app.use(express.json()); 

// Middleware checks /api/notes endpoint 
app.use("/api/notes", notesRoutes);

// app.get and app.use are middlewares

// We reach this middleware if none of our routes fits
app.use((req, res, next) => {
    next(Error("Endpoint not found"));
});

// Error handler
// Request, Response, and NextFunction must be from the express package
app.use((error: unknown, req: Request, res: Response, next: NextFunction) => {
    console.error(error);
    let errorMessage = "An unknown error occured. Yikes.";

    // Check error is actually an Error data type
    if (error instanceof Error) errorMessage = error.message;

    // Return error 
    res.status(500).json({ error: errorMessage });
});

export default app;