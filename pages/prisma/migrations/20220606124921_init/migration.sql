/*
  Warnings:

  - Added the required column `isPublic` to the `Sessions` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Sessions` ADD COLUMN `isPublic` BOOLEAN NOT NULL;
