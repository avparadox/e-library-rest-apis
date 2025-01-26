import { NextFunction, Request, Response } from "express";

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  console.log(req.body);
  res.json({
    message: "user registered",
  });
  next();
};

export { createUser };
