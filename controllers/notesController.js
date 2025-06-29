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

export { getAllNotes };
