import { Router } from "express";
import {
  getAllNotes,
  getNote,
  postNote,
} from "../controllers/notesController.js";

const router = new Router();

//Get all Notes
router.get("/notes", getAllNotes);

//get single note
router.get("/notes/:id", getNote);

//insert Note
router.post("/notes", postNote);

export default router;
