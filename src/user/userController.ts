import { NextFunction, Request, Response } from "express";
import createHttpError from "http-errors";
import userModel from "./userModel";
import bcrypt from "bcrypt";
import { sign } from "jsonwebtoken";
import { config } from "../config/config";
import { User } from "./userTypes";

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  // Validation
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    const error = createHttpError(412, "All fields are required");
    return next(error);
  }

  // Database call

  try {
    const user = await userModel.findOne({
      email,
    });
    if (user) {
      const error = createHttpError(400, "User already exist with this email");
      return next(error);
    }
  } catch (error) {
    console.log(error);
    return next(createHttpError(500, "Error while getting user"));
  }

  // Password -> hashing
  const hashedPassword = await bcrypt.hash(password, 10);

  let newUser: User;

  try {
    newUser = await userModel.create({
      name,
      email,
      password: hashedPassword,
    });
  } catch (error) {
    console.log(error);
    return next(createHttpError(500, "Error while creating user"));
  }

  try {
    // Token generation - JWT
    const token = sign({ sub: newUser._id }, config.jwtSecret as string, {
      expiresIn: "7d",
      algorithm: "HS256",
    });

    // Response
    res.status(201).json({
      id: newUser._id,
      accessToken: token,
      message: "User created successfully",
    });
  } catch (error) {
    console.log(error);
    return next(createHttpError(500, "Error while signing JWT Token"));
  }
};

const loginUser = async (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;
  // Checks if user has passed all the things
  try {
    if (!email || !password) {
      return next(createHttpError(400, "All fields are required"));
    }
  } catch (error) {
    console.log(error);
    return next(createHttpError(400, "Something went wrong"));
  }

  try {
    // User Data Retrival
    const user = await userModel.findOne({
      email,
    });

    if (!user) {
      return next(createHttpError(404, "User not found"));
    }

    // Login Validaion
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return next(createHttpError(400, "Username or Password Incorrect"));
    }

    // Create AccessToken during Login
    const token = sign({ sub: user._id }, config.jwtSecret as string, {
      expiresIn:  "7d",
      algorithm: "HS256",
    });

    // Response
    res.status(200).json({
      accessToken: token,
    });
    next();
  } catch (error) {
    console.log(error);
    return next(createHttpError(400, "Bad Request"));
  }
};

export { createUser, loginUser };
