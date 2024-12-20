import { CreatedResponse, OkResponse } from "@shared/decorators/response";
import { NextFunction, Request, Response } from "express";

import hashKeyService from "./hashKey.service";

class HashKeyController {
    @OkResponse()
    async get(_req: Request, _res: Response, _next: NextFunction) {
        return hashKeyService.get();
    }

    @CreatedResponse()
    async device(_req: Request, _res: Response, _next: NextFunction) {
        return hashKeyService.device(_req.body);
    }

    @OkResponse()
    async merge(_req: Request, _res: Response, _next: NextFunction) {
        return hashKeyService.merge(_req.body);
    }
}

const hashKeyController = new HashKeyController();
export default hashKeyController;
