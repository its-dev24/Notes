import { Router } from "express";
import { getAllNotes } from "../controllers/notesController.js";

const router = new Router();

router.get("/notes", getAllNotes);

export default router;
