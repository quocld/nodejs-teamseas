-- CreateTable
CREATE TABLE "Donation" (
    "id" SERIAL NOT NULL,
    "count" INTEGER NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "displayName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "mobile" TEXT,
    "message" TEXT,
    "team" TEXT,

    CONSTRAINT "Donation_pkey" PRIMARY KEY ("id")
);
