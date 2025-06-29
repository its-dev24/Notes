import mongoose from "mongoose";

const NotesSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  noteBody: {
    type: String,
    required: true,
  },
});

const notes = mongoose.model("Note", NotesSchema);
export default notes;
