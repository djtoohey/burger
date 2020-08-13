-- Drops the burger_db if it already exists --
DROP DATABASE IF EXISTS burger_db;

-- Created the DB "burger_db"
CREATE DATABASE burger_db;

-- Use the DB burger_db for all the rest of the script
USE burger_db;

-- Created the table "burgers"
CREATE TABLE burgers (
    id INT AUTO_INCREMENT NOT NULL,

    -- might allow devoured to be null once we start 
    burger_name VARCHAR(30) NOT NULL,
    devoured BOOLEAN NOT NULL,

    PRIMARY KEY(id)
);
