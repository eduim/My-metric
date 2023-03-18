import { PrismaClient } from "@prisma/client";

if (!process.env.DATABASE_URL) {
  console.log("no DATABASE_URL");
  console.log(process.env.DATABASE_URL);
}

const prisma = new PrismaClient();

export default prisma;

process.on("SIGKTERM", () => {
  prisma.$disconnect();
});
