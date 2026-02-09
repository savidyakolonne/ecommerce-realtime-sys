import express from "express";
import cors from "cors";
import branchesRouter from "./modules/branches/branches.routes";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/branches", branchesRouter);

app.get("/health", (_req, res) => {
  res.json({ status: "ok" });
});

app.use((err: any, _req: any, res: any, _next: any) => {
  console.error(err);
  res.status(500).json({ message: "Internal Server Error" });
});


export default app;
