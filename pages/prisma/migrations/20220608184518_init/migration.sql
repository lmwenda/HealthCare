/*
  Warnings:

  - The primary key for the `Orders` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `orderId` on the `Orders` table. All the data in the column will be lost.
  - Added the required column `email` to the `Orders` table without a default value. This is not possible if the table is not empty.
  - Added the required column `first_name` to the `Orders` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id` to the `Orders` table without a default value. This is not possible if the table is not empty.
  - Added the required column `last_name` to the `Orders` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Orders` DROP PRIMARY KEY,
    DROP COLUMN `orderId`,
    ADD COLUMN `email` VARCHAR(191) NOT NULL,
    ADD COLUMN `first_name` VARCHAR(191) NOT NULL,
    ADD COLUMN `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD COLUMN `last_name` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);
