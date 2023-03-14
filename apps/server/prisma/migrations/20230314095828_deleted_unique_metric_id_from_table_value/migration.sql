/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Metric` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Value_metricId_key";

-- AlterTable
ALTER TABLE "Metric" ALTER COLUMN "name" SET DATA TYPE TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Metric_name_key" ON "Metric"("name");
