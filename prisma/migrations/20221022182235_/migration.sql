/*
  Warnings:

  - Added the required column `TicketValue` to the `TicketsSold` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "TicketsSold" ADD COLUMN     "TicketValue" INTEGER NOT NULL;
