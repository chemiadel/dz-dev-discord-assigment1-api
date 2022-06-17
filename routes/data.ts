import { Request, Response } from "express";
import someData from "../utils/users.json";

import { token } from "../routes/login";
import tokenValidiation from "../controllers/token";
import { notAuthorized } from "../utils/staticResponses";

export default function DataRoute(req: Request, res: Response) {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) return res.status(400).json(notAuthorized);

  const isTokenValid = tokenValidiation(token);

  if (isTokenValid) return res.json(someData);

  return res.status(400).json(notAuthorized);
}
