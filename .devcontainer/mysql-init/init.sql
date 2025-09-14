-- Ensure the `mysql` database exists
CREATE DATABASE IF NOT EXISTS mysql;
USE mysql;

-- Drop and recreate the `component` table to ensure the correct schema
DROP TABLE IF EXISTS `component`;
CREATE TABLE `component` (
    `component_id` BIGINT NOT NULL AUTO_INCREMENT,
    `component_group` VARCHAR(255) NOT NULL,
    `component_name` VARCHAR(255) NOT NULL,
    PRIMARY KEY (`component_id`)
);

-- Ensure the `user` table exists
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
    `Host` CHAR(255) NOT NULL,
    `User` CHAR(255) NOT NULL,
    `authentication_string` TEXT,
    `ssl_cipher` BLOB,
    `x509_issuer` BLOB,
    `x509_subject` BLOB,
    `max_questions` INT UNSIGNED NOT NULL DEFAULT 0,
    `max_updates` INT UNSIGNED NOT NULL DEFAULT 0,
    `max_connections` INT UNSIGNED NOT NULL DEFAULT 0,
    `max_user_connections` INT UNSIGNED NOT NULL DEFAULT 0,
    PRIMARY KEY (`Host`, `User`)
);
