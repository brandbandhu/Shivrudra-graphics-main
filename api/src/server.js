import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import path from "path";
import { fileURLToPath } from "url";

import { authRoutes } from "./routes/auth.routes.js";
import { crudRoutes } from "./routes/crud.routes.js";
import { publicRoutes } from "./routes/public.routes.js";

dotenv.config();

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors({ origin: process.env.CLIENT_URL }));
app.use(express.json({ limit: "2mb" }));
app.use("/uploads", express.static(path.join(__dirname, "../uploads")));

app.get("/", (_req, res) =>
  res.json({
    ok: true,
    name: "Shivrudra Graphics API",
    health: "/health",
    publicApi: "/api/public/homepage",
  }),
);
app.get("/health", (_req, res) => res.json({ ok: true }));
app.use("/api/auth", authRoutes);
app.use("/api/admin", crudRoutes);
app.use("/api/public", publicRoutes);

app.use((err, _req, res, _next) => {
  console.error(err);
  res.status(500).json({ message: err.message || "Server error" });
});

app.listen(process.env.PORT || 5000, () => {
  console.log(`API running on http://localhost:${process.env.PORT || 5000}`);
});
