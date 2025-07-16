import express from "express";
import morgan from "morgan";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(morgan("dev"));

app.get("/", (_req, res) => {
  res.json("Hello, World!");
});

// Routes
// app.use("/api/v1/user", userRoutes);

export default app;
