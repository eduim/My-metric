import prisma from "../../lib/prisma.js";

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
};

export default metricsModel;
