/*
  Warnings:

  - You are about to drop the column `TicketValue` on the `TicketsSold` table. All the data in the column will be lost.
  - Added the required column `ticketValue` to the `TicketsSold` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "TicketsSold" DROP COLUMN "TicketValue",
ADD COLUMN     "ticketValue" INTEGER NOT NULL;
