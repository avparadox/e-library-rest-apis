import { Request, Response, NextFunction } from "express";
import cloudinary from "../config/cloudinary";
import path from "node:path";
import createHttpError from "http-errors";
import bookModel from "./bookModel";

const createBook = async (req: Request, res: Response, next: NextFunction) => {
  const { title, genre } = req.body;
  console.log("Files: ", req.files);

  const files = req.files as { [fieldname: string]: Express.Multer.File[] };

  // Application/PDF
  const coverImageMimeType = files.coverImage[0].mimetype.split("/").at(-1);

  const fileName = files.coverImage[0].filename;

  const filePath = path.resolve(
    __dirname,
    "../../public/data/uploads",
    fileName
  );

  try {
    const uploadResult = await cloudinary.uploader.upload(filePath, {
      filename_override: fileName,
      folder: "book-covers",
      format: coverImageMimeType,
    });

    const bookFileName = files.file[0].filename;

    const bookFilePath = path.resolve(
      __dirname,
      "../../public/data/uploads",
      bookFileName
    );

    const bookFileUploadResult = await cloudinary.uploader.upload(
      bookFilePath,
      {
        resource_type: "raw",
        filename_override: bookFileName,
        folder: "book-pdfs",
        format: "pdf",
      }
    );

    console.log(uploadResult);
    console.log(bookFileUploadResult);

    const newBook = await bookModel.create({
      title,
      genre,
      author: "67967357aaf7e7af09792a48",
      coverImage: uploadResult.secure_url,
      file: bookFileUploadResult.secure_url,
    });

    res.json({
      uploadResult,
      bookFileUploadResult,
      newBook,
    });
  } catch (e) {
    console.log(e);
    return next(createHttpError(500, "Error while uploading the files."));
  }
  next();
};

export { createBook };
