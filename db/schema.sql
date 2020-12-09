/*-----------DROP DATABASE----------*/
DROP DATABASE IF EXISTS burgers_db ;

/*----------CREAT DATABASE----------*/

CREATE DATABASE burgers_db;

USE burgers_db;



CREATE TABLE burgers (
  id int AUTO_INCREMENT NOT NULL,
  burger_name VARCHAR(30)  NOT NULL,
  devoured BOOLEAN NOT NULL default false,
  PRIMARY KEY(id)
 
  
);