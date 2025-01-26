import express from "express";

const userRouter = express.Router();

//routes
userRouter.post("/register", (req, res) => {
  console.log(req.body);
  res.json({
    message: "user registered",
  });
});

export default userRouter;
