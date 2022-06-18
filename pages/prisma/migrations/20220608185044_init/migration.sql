/*
  Warnings:

  - The primary key for the `Orders` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Orders` table. All the data in the column will be lost.
  - Added the required column `orderId` to the `Orders` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Orders` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    ADD COLUMN `orderId` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`orderId`);
