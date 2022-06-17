import { Request, Response } from "express";
import userValidition from "../controllers/auth";

export const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";

export default function LoginRoute(req: Request, res: Response) {
  console.log("req body", req.params);

  const isValid = userValidition(req.body);

  if (isValid)
    return res.json({
      token,
    });

  return res.status(400).json({
    error: "Unauthorized",
  });
}
