-- CreateTable
CREATE TABLE `Orders` (
    `orderId` INTEGER NOT NULL AUTO_INCREMENT,
    `transcationID` INTEGER NOT NULL,
    `state` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `start_date` DATETIME(3) NOT NULL,
    `payerID` INTEGER NOT NULL,
    `autoRenewDate` DATETIME(3) NOT NULL,
    `currency` VARCHAR(191) NOT NULL,
    `amount` INTEGER NOT NULL,
    `renew` BOOLEAN NOT NULL,

    UNIQUE INDEX `Orders_transcationID_key`(`transcationID`),
    UNIQUE INDEX `Orders_payerID_key`(`payerID`),
    PRIMARY KEY (`orderId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
