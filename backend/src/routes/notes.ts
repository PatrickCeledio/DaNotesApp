/*
    Author: Patrick Celedio
    Description: Endpoint routing for notes
*/

import express from "express";
import * as NotesController from "../controllers/notes";

// Study this
const router = express.Router();

// Arrow function; a function without a name
// async operation, takes a moment to look up in the database
// do not want to have the rest of the server wait for this process

// .get() retrieves data from the server
router.get("/", NotesController.getNotes);

// noteid is a variable, whatever we put behind the / will be read by express
// and put into the request object in order to read it in our getNote endpoint
// and lookup specific note with matching id
// /:noteId will be accessed by req.params.noteId
// Example of what takes place in ":noteId" == 646ad646318244e23d21d701
router.get("/:noteId", NotesController.getNote);

// .port() sends data to the server
router.post("/", NotesController.createNote);

export default router;