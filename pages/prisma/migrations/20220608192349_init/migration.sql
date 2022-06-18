/*
  Warnings:

  - You are about to alter the column `transcationID` on the `Orders` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Double`.
  - You are about to alter the column `amount` on the `Orders` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Double`.

*/
-- AlterTable
ALTER TABLE `Orders` MODIFY `transcationID` DOUBLE NOT NULL DEFAULT 0.00,
    MODIFY `amount` DOUBLE NOT NULL DEFAULT 0.00;
