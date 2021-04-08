DROP DATABASE IF EXISTS `miniapp3form`;

CREATE DATABASE miniapp3form;

CREATE TABLE formdata(ID INT AUTO_INCREMENT, name text, email TEXT, password TEXT, address1 TEXT, address2 TEXT, city TEXT, state TEXT, zip TEXT, phone TEXT, ccnumber INT, expiry TEXT, cvv INT, billingzip INT, PRIMARY KEY(ID))