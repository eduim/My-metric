import metricsModel from "../models/metricsModel.js";

const MetricsController = {
  async getMetrics(_, res, next) {
    try {
      const metrics = await metricsModel.getAll();
      return res.status(200).json(metrics);
    } catch (error) {
      next(error);
    }
  },
  async postMetrics(req, res, next) {
    try {
      const body = req.body;
      const metric = await metricsModel.postMetric(body);
      return res.status(201).json(metric);
    } catch (error) {
      next(error);
    }
  },
  async getMetric(req, res, next) {
    try {
      const metricId = parseInt(req.params.id);
      const metric = await metricsModel.getMetric(metricId);
      return res.status(200).json(metric);
    } catch (error) {
      next(error);
    }
  },
};

export default MetricsController;
