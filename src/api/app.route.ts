import express from "express";

import hashKeyRouter from "./hashKey/hashKey.route";

const router = express.Router();

router.use("/hash-key", hashKeyRouter);

export default router;
