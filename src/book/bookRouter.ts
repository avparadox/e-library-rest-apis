import express from "express";
import { createBook } from "./bookController";
import multer from "multer";
import path from "node:path";

const bookRouter = express.Router();

//multer
const upload = multer({
  dest: path.resolve(__dirname, "../../publc/data/uploads"),
  limits: { fileSize: 3e7 }, // 30mb
});

//routes
bookRouter.post(
  "/create",
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

export default bookRouter;
