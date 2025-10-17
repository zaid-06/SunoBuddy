import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export default function auth(req, res, next) {
  const header = req.header("Authorization");
  if (!header) return res.status(401).json({ message: "No token provided" });

  const [bearer, token] = header.split(" ");
  if (bearer !== "Bearer" || !token)
    return res.status(401).json({ message: "Invalid token format" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // attach user ID to request
    next();
  } catch (err) {
    res.status(401).json({ message: "Token invalid or expired" });
  }
}
