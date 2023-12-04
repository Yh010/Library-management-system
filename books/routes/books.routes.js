import express from "express";
import {
  listBooks,
  getBook,
  editBook,
  addBook,
  deleteBook,
} from "../controllers/books.controllers.js";

const router = express.Router();

/**
 * @swagger
 * components:
 *  schemas:
 *     Book:
 *      type: object
 *      properties:
 *          id:
 *              type: integer
 *              description: Book id
 *          name:
 *              type: string
 *              description: Book name
 *          pages:
 *              type: integer
 *              description: Book pages
 *          type:
 *              type: string
 *              description: Book type

 *     example:
 *          id: 1
 *          name: Rexaurus
 *          pages: 3
 *          type: dog
 */

/**
 * @swagger
 * /books:
 *  get:
 *     summary: Get all books
 *     description: Get all books
 *     responses:
 *      200:
 *         description: Success
 *      500:
 *         description: Internal Server Error
 */

router.get("/", listBooks);

/**
 * @swagger
 * /books/{id}:
 *  get:
 *     summary: Get book detail
 *     description: Get book detail
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Book id
 *     responses:
 *      200:
 *         description: Success
 *      500:
 *         description: Internal Server Error
 */

router.get("/:id", getBook);

/**
 * @swagger
 * /books/{id}:
 *  put:
 *     summary: Edit book
 *     description: Edit book
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Book id
 *     requestBody:
 *       description: A JSON object containing book information
 *       content:
 *         application/json:
 *           schema:
 *              $ref: '#/components/schemas/Book'
 *           example:
 *              name: Rexaurus
 *              pages: 12
 *              type: dog
 *     responses:
 *     200:
 *        description: Success
 *     500:
 *       description: Internal Server Error
 *
 */

router.put("/:id", editBook);

/**
 * @swagger
 * /books:
 *  post:
 *      summary: Add book
 *      description: Add book
 *      requestBody:
 *          description: A JSON object containing book information
 *          content:
 *             application/json:
 *                 schema:
 *                    $ref: '#/components/schemas/Book'
 *                 example:
 *                    name: Rexaurus
 *                    age: 12
 *                    type: dog
 *      responses:
 *      200:
 *          description: Success
 *      500:
 *          description: Internal Server Error
 */

router.post("/", addBook);

/**
 * @swagger
 * /books/{id}:
 *  delete:
 *     summary: Delete book
 *     description: Delete book
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Book id
 *     responses:
 *     200:
 *        description: Success
 *     500:
 *       description: Internal Server Error
 */

router.delete("/:id", deleteBook);

export default router;