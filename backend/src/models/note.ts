/*
    Author: Patrick Celedio
    Description: Creates note object in MongoDB atlas
*/

import { InferSchemaType, model, Schema } from "mongoose";

// This is the skeleton of our note
const noteSchema = new Schema({
    title: { type: String, required: true },
    text: { type: String },
}, { timestamps: true });

// Create noteSchema data type
type Note = InferSchemaType<typeof noteSchema>;

export default model<Note>("Note", noteSchema);