import { NextFunction, Request, Response } from "express";
import createHttpError from "http-errors";
import userModel from "./userModel";
import bcrypt from "bcrypt";
import { sign } from "jsonwebtoken";
import { config } from "../config/config";

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  // Validation
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    const error = createHttpError(412, "All fields are required");
    return next(error);
  }

  // Database call
  const user = await userModel.findOne({
    email,
  });
  if (user) {
    const error = createHttpError(400, "User already exist with this email");
    return next(error);
  }

  // Password -> hashing
  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = await userModel.create({
    name,
    email,
    password: hashedPassword,
  });

  // Token generation - JWT
  const token = sign({ sub: newUser._id }, config.jwtSecret as string, {
    expiresIn: "7d",
    algorithm: "HS256",
  });

  // Response
  res.json({
    id: newUser._id,
    accessToken: token,
  });
};

export { createUser };
