import express from "express";
import globalErrorHandler from "./middlewares/globalErrorHandler";
import userRouter from "./user/userRouter";
import bookRouter from "./book/bookRouter";
import cors from "cors";
import { config } from "./config/config";

// import createHttpError from "http-errors";
const app = express();

app.use(
  cors({
    origin: config.frontendDomain,
  })
);

app.use(express.json());

// Routes
// Http methods: GET, POST, PUT, PATCH, DELETE
app.get("/", (req, res, next) => {
  // const error = createHttpError(400, "something went wrong");
  // throw error;
  res.json({
    message: "All systems working fine",
  });
  next();
});

// User Router
app.use("/api/users", userRouter);

//  Book Router
app.use("/api/books", bookRouter);

// Global error handler
app.use(globalErrorHandler);

export default app;
