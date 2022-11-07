/*
  Warnings:

  - A unique constraint covering the columns `[userId]` on the table `TicketsSold` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "TicketsSold_userId_key" ON "TicketsSold"("userId");
