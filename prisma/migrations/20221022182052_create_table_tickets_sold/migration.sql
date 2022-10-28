-- CreateTable
CREATE TABLE "TicketsSold" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "TicketsSold_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "TicketsSold_userId_key" ON "TicketsSold"("userId");

-- AddForeignKey
ALTER TABLE "TicketsSold" ADD CONSTRAINT "TicketsSold_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
