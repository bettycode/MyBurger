/*-----------DROP DATABASE----------*/
DROP DATABASE IF EXISTS burgers_db ;

/*----------CREAT DATABASE----------*/

CREATE DATABASE burgers_db;

USE burgers_db;



CREATE TABLE burger (
  id int AUTO_INCREMENT NOT NULL,
  burger_name VARCHAR(30)  NOT NULL,
  devoured VARCHAR(30) NOT NULL,
  PRIMARY KEY(id)
 
  
);