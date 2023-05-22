import express from "express";
import * as NotesController from "../controllers/notes";

// Study this
const router = express.Router();

// Arrow function; a function without a name
// async operation, takes a moment to look up in the database
// do not want to have the rest of the server wait for this process

// .get() retrieves data from the server
router.get("/", NotesController.getNotes);

// .port() sends data to the server
router.post("/", NotesController.createNote);
export default router;