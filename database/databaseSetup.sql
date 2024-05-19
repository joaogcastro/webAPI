create database dbApi;
use dbApi;

create table product (
	productId int primary key auto_increment,
    name varchar(50),
    brand varchar(50),
    color varchar(30),
    size int,
    quantity int,
    price decimal(10,2)
);

create table employee (
	employeeId int primary key auto_increment,
    name varchar(50),
    phone varchar(18),
    role varchar(20)
);

create table sale (
	saleId int primary key auto_increment,
    date datetime,
    employeeId int,
    comission decimal(10,2),
    totalPrice decimal(10,2)
);

create table productSale (
	saleId int,
    productId int,
    foreign key(saleId) references sale (saleId),
    foreign key(productId) references product (productId)
);

alter table sale add foreign key(employeeId) references employee (employeeId);

create table login (
	loginId int primary key auto_increment,
    username varchar(40),
    email varchar(40),
    category varchar(40),
    password varchar(40)
);

/*
show tables;
describe employee;
describe product;
describe sale;
describe productsale;

insert into employee (name, phone, role) values ('Teste1', '+55(41)91234-5678', 'Vendedor');
select * from employee;

insert into product (name, brand, color, size, quantity, price) values ('Tenis', 'Ardidas', 'Preto', 41, 100, 299.90);
select * from product;

insert into sale (date, employeeId, comission, totalPrice) values ('2024-05-09 15:30:00', 1, 59.99, 599.98);
select * from sale;

insert into productsale (saleId, productId) values (1, 1);
insert into productsale (saleId, productId) values (1, 1);
select * from productsale;

SELECT
    s.saleId,
    s.date,
    s.employeeId,
    s.comission,
    s.totalPrice,
    GROUP_CONCAT(CONCAT(p.brand, ' ', p.name) SEPARATOR ', ') AS products_sold
FROM
    sale s
INNER JOIN
    productSale ps ON s.saleId = ps.saleId
INNER JOIN
    product p ON ps.productId = p.productId
GROUP BY
    s.saleId;
*/