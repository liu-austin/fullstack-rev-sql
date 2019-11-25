DROP DATABASE IF EXISTS store;

CREATE DATABASE store;

USE store;

CREATE TABLE products (
id int not null auto_increment primary key,
item varchar(255) unique not null,
min_cost int not null,
curr_bid int not null,
ends_in int not null,
image varchar(255) not null
);
