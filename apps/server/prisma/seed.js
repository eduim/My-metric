import prisma from "../lib/prisma.js";
import randomGenerator from "../lib/randomGenerator.js";

async function main() {
  const metric = await prisma.metric.upsert({
    where: { name: "Revenue" },
    update: {},
    create: {
      name: "Revenue",
      values: {
        create: randomGenerator(3000, "2023-01-01"),
      },
    },
    include: {
      values: true,
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
