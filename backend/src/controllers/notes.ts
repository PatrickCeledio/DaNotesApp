import { RequestHandler } from "express";
import NoteModel from "../models/note";

export const getNotes: RequestHandler = async (req, res, next) => {
    // try-catch block used for async requests
    try {
        // Return notes to front page
        // exec() returns promise
        const notes = await NoteModel.find().exec();
        res.status(200).json(notes); // 200 OK
    } catch (error) {
        // Pass to error handler middleware
        next(error);
    }
}

// This is an async function because it does database operations
export const createNote: RequestHandler = async (req, res, next) => {
    const title = req.body.title;
    const text = req.body.text;

    // We always need a try-catch block for async functions
    try {
        const newNote = await NoteModel.create({
            title: title, 
            text: text,

        });

        // 201 = HTTP code new resource created
        res.status(201).json(newNote);
    } catch (error) {
        next(error);
    }
};