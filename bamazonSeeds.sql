DROP DATABASE IF EXISTS bamazonDB;

CREATE DATABASE bamazonDB;

USE bamazonDB;

CREATE TABLE `'products'` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `product_name` VARCHAR(45) NOT NULL,
  `department_name` INT(11) NOT NULL,
  `price` DECIMAL(10,2) NOT NULL,
  `stock_quantity` INT(11) NOT NULL,
  PRIMARY KEY (`id`)
  );


INSERT INTO 'products' (1,product_name, department_name, price, stock_quantity)
VALUES ("holographic stickers", "stationary", 6.95, 60);

INSERT INTO 'products' (2,product_name, department_name, price, stock_quantity)
VALUES ("heart pens", "stationary", 3.50, 55);

INSERT INTO 'products' (3,product_name, department_name, price, stock_quantity)
VALUES ("charcoal grill", "lawn & garden", 99.99, 65);

INSERT INTO 'products' (4,product_name, department_name, price, stock_quantity)
VALUES ("gas grill", "lawn & garden", 199.99, 50);

INSERT INTO 'products' (5,product_name, department_name, price, stock_quantity)
VALUES ("indoor security system", "electronics", 399.99, 26);

INSERT INTO 'products' (6,product_name, department_name, price, stock_quantity)
VALUES ("nike shoes", "men's fashion", 99.99, 48);

INSERT INTO 'products' (7,product_name, department_name, price, stock_quantity)
VALUES ("dumbbell set", "fitness", 58.99, 29);

INSERT INTO 'products' (8,product_name, department_name, price, stock_quantity)
VALUES ("jenga", "games", 19.99, 72);

INSERT INTO 'products' (9,product_name, department_name, price, stock_quantity)
VALUES ("chinese checkers", "games", 29.99, 22);

INSERT INTO 'products' (10,product_name, department_name, price, stock_quantity)
VALUES ("uno", "games", 9.99, 65);
