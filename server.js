import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";
import authRoutes from "./routes/authRoute.js";
import connectDB from "./config/db.js";
//config dot env
dotenv.config();

//databse cofig
connectDB();

const app = express();

//middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

//routes...
app.use("/api/v1/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("<h1>welcome to e ommerce website </h1>");
});

//port
const PORT = process.env.PORT || 8080;

//listen
app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`.bgCyan.white);
});
