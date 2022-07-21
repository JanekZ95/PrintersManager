import express from "express";
import * as signInController from "../controllers/signInController.js";

const signInRouter = express.Router();

signInRouter.post("/signIn", signInController.signIn);

export default signInRouter;
