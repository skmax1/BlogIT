-- CreateTable
CREATE TABLE "User" (
    "Id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "Post" (
    "Id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "writeup" TEXT NOT NULL,
    "Ispublished" BOOLEAN NOT NULL DEFAULT false,
    "authourId" TEXT NOT NULL,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("Id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_authourId_fkey" FOREIGN KEY ("authourId") REFERENCES "User"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;
