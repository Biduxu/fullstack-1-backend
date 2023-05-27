/*
  Warnings:

  - Added the required column `registrationDate` to the `contacts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `registrationDate` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "contacts" ADD COLUMN     "registrationDate" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "registrationDate" TIMESTAMP(3) NOT NULL;
