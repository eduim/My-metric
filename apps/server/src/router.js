import express from "express";
import MetricsController from "./controllers/metricsController.js";

const router = express.Router();

router.get("/metrics", MetricsController.getMetrics);
router.post("/metrics", MetricsController.postMetrics);
router.get("/metrics/:id", MetricsController.getMetric);
router.patch("/metrics/:id", MetricsController.patchMetric);

export default router;
