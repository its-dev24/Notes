import { Router } from "express";
import {
  deleteNote,
  getAllNotes,
  getNote,
  postNote,
  updateNote,
} from "../controllers/notesController.js";

const router = new Router();

//Get all Notes
router.get("/notes", getAllNotes);

//get single note
router.get("/notes/:id", getNote);

//insert Note
router.post("/notes", postNote);

//delete Note
router.delete("/notes/:id", deleteNote);

//update note
router.put("/notes/:id", updateNote);

export default router;
