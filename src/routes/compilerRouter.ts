import express from "express";
import { saveCode, loadCode } from "../controllers/compilerController";

export const compilerRouter = express.Router();

compilerRouter.post("/save", saveCode);
compilerRouter.post("/load", loadCode);
