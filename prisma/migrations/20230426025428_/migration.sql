/*
  Warnings:

  - Added the required column `author` to the `Article` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Article" ADD COLUMN     "author" TEXT NOT NULL;
