import { asyncWrapper } from "@shared/utils/asyncWrapper";
import express from "express";

import hashKeyController from "./hashKey.controller";

const hashKeyRouter = express.Router();

hashKeyRouter.get("/", asyncWrapper(hashKeyController.get));
hashKeyRouter.post("/device", asyncWrapper(hashKeyController.device));
hashKeyRouter.post("/merge", asyncWrapper(hashKeyController.merge));

export default hashKeyRouter;
