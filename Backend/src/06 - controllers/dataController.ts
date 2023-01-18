import express, { NextFunction, Request, Response } from "express";
import dataLogic from "../05 - logic/dataLogic";

const router = express.Router();

router.get(
  "/furniture",
  async (request: Request, response: Response, next: NextFunction) => {
    try {
      const product = await dataLogic.getData();
      response.json(product);
    } catch (error) {
      next(error);
    }
  }
);

export default router;
