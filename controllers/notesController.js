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

//@desc Method to create note
//@Route POST /api/posts
const postNote = async (req, res) => {
  const { title, noteBody } = req.body;
  if (!title || !noteBody) {
    return res.status(400).json({ msg: "Title and ody cannot be empty" });
  }
  const note = await notesModel.create({
    title,
    noteBody,
  });
  if (!note) {
    return res.status(500).json({ msg: "Failed to Insert Note" });
  }
  res.status(201).json({ msg: "Note inserted sucessfully" });
  console.log(`ID : ${note._id}`);
};

//@desc Method to Delete specific Notes
//@Route DELETE /api/posts/:id

const deleteNote = async (req, res) => {
  const id = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ msg: "Error : Not a valid MongoDB ID" });
  }
  const note = await notesModel.findOneAndDelete({ _id: id });
  if (!note) {
    return res.status(404).json({ msg: "No Notes found of that ID" });
  }
  res.status(200).json({ msg: "note deleted Successfully!" });
};

export { getAllNotes, getNote, postNote, deleteNote };
