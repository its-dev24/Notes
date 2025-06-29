import mongoose from "mongoose";
import notesModel from "../model/notesModel.js";

// @desc Method to get all Notes
// @Route GET /api/notes

const getAllNotes = async (req, res) => {
  const notesData = await notesModel.find({});
  if (!notesData) {
    res.status(404).json({ msg: "No Notes Found" });
  }
  res.status(200).json(notesData);
};

//@desc Method to get specific Notes
//@Route GET /api/posts/:id

const getNote = async (req, res) => {
  const id = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ msg: "Invalid MongoDB ID" });
  }
  const noteData = await notesModel.findById(id);
  if (!noteData) {
    return res.status(404).json("No Notes Found");
  }
  res.status(200).json(noteData);
};

export { getAllNotes, getNote };
