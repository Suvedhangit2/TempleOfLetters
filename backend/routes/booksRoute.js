import express from "express";
import { Book } from "../models/bookModel.js";
const router = express.Router();

//Router for Save book
router.post("/", async (request, response) => {
  try {
    if (
      !request.body.title ||
      !request.body.author ||
      !request.body.publishYear
    ) {
      return response
        .status(400)
        .send({
          message:
            "Must be entered the all fields(Title, Author, PublishYear).",
        });
    }
    const newBook = {
      title: request.body.title,
      author: request.body.author,
      publishYear: request.body.publishYear,
    };

    const book = await Book.create(newBook);

    return response.status(201).send({
      Status: "Book Saved Sucessfully",
      Book: book,
    });
  } catch (error) {
    response.status(500).send({ message: error.message });
  }
});

// Router for Get all books
router.get("/", async (request, response) => {
  try {
    const books = await Book.find({});
    // const length = Object.keys(books).length;

    // if (length == 0 ){
    //     return response.status(404).json("No books found");
    // }
    return response.status(200).json({
      count: books.length,
      data: books,
    });
  } catch (error) {
    response.status(500).send({ message: error.message });
  }
});

//Router for get a single book by id
router.get("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const book = await Book.findById(id);
    if (book != null) {
      return response.status(200).json(book);
    }
    return response.status(404).json({ message: "Book id Not found!" });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

//Router for Update a book by id
router.put("/:id", async (request, response) => {
  try {
    if (
      !request.body.title ||
      !request.body.author ||
      !request.body.publishYear
    ) {
      return response
        .status(400)
        .send({
          message: "Must be entered the all fields(Title, Author, PublishYear)",
        });
    }

    const { id } = request.params;

    const result = await Book.findByIdAndUpdate(id, request.body);
    if (!result) {
      return response.status(404).json({ message: "Book not found" });
    }

    return response.status(200).send({ messge: "Book updated successfully" });
  } catch (error) {
    response.status(500).send({ message: error.message });
  }
});

//Router for delete a book by id
router.delete("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const result = await Book.findByIdAndDelete(id);

    if (!result) {
      return response.status(404).json({ message: "Book not found!" });
    }

    return response.status(200).send({ messge: "Book deleted successfully" });
  } catch (error) {
    response.status(500).send({ message: error.message });
  }
});

export default router;
