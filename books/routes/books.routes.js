import express from "express";
import {
  listBooks,
  getBook,
  editBook,
  addBook,
  deleteBook,
} from "../controllers/books.controllers.js";

const router = express.Router();

router.get("/", listBooks);

router.get("/:id", getBook);

router.put("/:id", editBook);

router.post("/", addBook);

router.delete("/:id", deleteBook);

export default router;