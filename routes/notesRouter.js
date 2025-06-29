import { Router } from "express";
import { getAllNotes, getNote } from "../controllers/notesController.js";

const router = new Router();

router.get("/notes", getAllNotes);

router.get("/notes/:id", getNote);

export default router;
