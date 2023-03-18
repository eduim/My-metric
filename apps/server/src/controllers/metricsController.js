import metricsModel from "../models/metricsModel.js";
import getAverage from "../../lib/getAverages.js";
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

      if (metric.values.length > 0) {
        const valuesFormated = [];

        ["minute", "hour", "day"].forEach((interval) => {
          const avg = {
            id: interval,
            data: getAverage(metric.values, interval),
          };
          valuesFormated.push(avg);
        });

        metric.values = valuesFormated;
      }

      return res.status(200).json(metric);
    } catch (error) {
      next(error);
    }
  },
  async patchMetric(req, res, next) {
    try {
      const metricId = parseInt(req.params.id);
      const metric = await metricsModel.updateMetric(metricId);
      const valuesFormated = [];

      ["minute", "hour", "day"].forEach((interval) => {
        const avg = {
          id: interval,
          data: getAverage(metric.values, interval),
        };
        valuesFormated.push(avg);
      });

      metric.values = valuesFormated;

      return res.status(200).json(metric);
    } catch (error) {
      next(error);
    }
  },
};

export default MetricsController;
