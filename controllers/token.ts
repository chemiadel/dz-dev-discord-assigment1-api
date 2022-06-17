import { token } from "../routes/login";

export default function tokenValidiation(reqToken: string): boolean {
  if (token === reqToken) return true;

  return false;
}
