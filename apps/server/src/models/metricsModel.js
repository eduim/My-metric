import prisma from "../../lib/prisma.js";
import randomGenerator from "../../lib/randomGenerator.js";
const metricsModel = {
  async getAll() {
    return await prisma.metric.findMany();
  },

  async postMetric(body) {
    return await prisma.metric.upsert({
      where: { name: body.name },
      update: {},
      create: {
        name: body.name,
        values: {
          create: [],
        },
      },
      include: {
        values: true,
      },
    });
  },

  async getMetric(id) {
    return await prisma.metric.findUnique({
      where: {
        id,
      },
      include: {
        values: true,
      },
    });
  },

  async updateMetric(id) {
    const metric = await prisma.metric.findUnique({
      where: {
        id,
      },
    });

    const data = randomGenerator(3000, "2023-01-01");

    return await prisma.metric.upsert({
      where: { id },
      update: {
        name: metric.name,
        values: {
          create: data,
        },
      },
      create: {
        name: metric.name,
        values: {
          create: data,
        },
      },
      include: {
        values: true,
      },
    });
  },
};

export default metricsModel;
