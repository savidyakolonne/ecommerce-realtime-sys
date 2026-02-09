import { Router } from "express";
import { prisma } from "../../db/prisma";

const router = Router();

// GET /api/branches
router.get("/", async (_req, res, next) => {
  try {
    const branches = await prisma.branch.findMany({
      orderBy: { createdAt: "asc" },
      select: { id: true, name: true, address: true, lat: true, lng: true },
    });

    res.json(branches);
  } catch (err) {
    next(err);
  }
});

export default router;
