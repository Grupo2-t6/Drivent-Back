-- CreateTable
CREATE TABLE "Trails" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Trails_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Activities" (
    "id" SERIAL NOT NULL,
    "date" TEXT NOT NULL,
    "vacancies" INTEGER NOT NULL,
    "startTime" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "trailId" INTEGER NOT NULL,
    "finalTime" TEXT NOT NULL,

    CONSTRAINT "Activities_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Activities" ADD CONSTRAINT "Activities_trailId_fkey" FOREIGN KEY ("trailId") REFERENCES "Trails"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
