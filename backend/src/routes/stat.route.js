import { Router } from "express";
import { protectRoute, requireAdmin } from "../middleware/auth.middleware.js";
import { getStats } from "../controller/stat.controller.js";

const router = Router();

// protect all routes no matter what no need of requireAdmin
// anyone can see the stats
router.get("/", protectRoute, getStats);

export default router;
