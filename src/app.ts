import express from "express";
import globalErrorHandler from "./middlewares/globalErrorHandler";
import userRouter from "./user/userRouter";
// import createHttpError from "http-errors";

const app = express();
app.use(express.json());

// Routes
// Http methods: GET, POST, PUT, PATCH, DELETE
app.get("/", (req, res, next) => {
  // const error = createHttpError(400, "something went wrong");
  // throw error;
  res.json({
    message: "Welcome to elib apis",
  });
  next();
});

//User Router
app.use("/api/users", userRouter);

// Global error handler
app.use(globalErrorHandler);

export default app;
