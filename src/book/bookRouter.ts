import express from "express";

import {
  createBook,
  updateBook,
  listBooks,
  // getSingleBook,
} from "./bookController";

import multer from "multer";
import path from "node:path";
import authenticate from "../middlewares/authenticate";

const bookRouter = express.Router();

//multer
const upload = multer({
  dest: path.resolve(__dirname, "../../public/data/uploads"),
  limits: { fileSize: 1e7 }, // 10mb
});

//routes
bookRouter.post(
  "/create",
  authenticate,
  upload.fields([
    {
      name: "coverImage",
      maxCount: 1,
    },
    {
      name: "file",
      maxCount: 1,
    },
  ]),
  createBook
);

bookRouter.patch(
  "/:bookId",
  authenticate,
  upload.fields([
    { name: "coverImage", maxCount: 1 },
    { name: "file", maxCount: 1 },
  ]),
  updateBook
);

// List all the books
bookRouter.get("/list", listBooks);

// bookRouter.get("/:bookId", getSingleBook);

export default bookRouter;
