import express from "express";
import cors from "cors";
import { config } from "dotenv";
import { connectToDB } from "./lib/dbConnect";
import { compilerRouter } from "./routes/compilerRouter";
const app = express();
app.use(express.json());
app.use(cors());
config();

app.use("/api/v1/compiler", compilerRouter);
app.listen(5000, () => {
  console.log("Server is running on port 5000");
  connectToDB();
});
