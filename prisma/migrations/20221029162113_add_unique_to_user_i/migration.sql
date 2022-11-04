/*
  Warnings:

  - A unique constraint covering the columns `[userId]` on the table `Hotel` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Hotel_userId_key" ON "Hotel"("userId");
