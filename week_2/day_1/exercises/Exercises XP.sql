CREATE TABLE items (
    item_id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    price DECIMAL(10,2) NOT NULL
);
create table customers(
customers_id SERIAL primary key,
first_name varchar(50) not null,
last_name varchar(50) not null
);
select * from items;
select * from customers;
insert into items (name,price)
values 
    ('Small Desk', 100),
    ('Large Desk', 300),
    ('Fan', 80);
insert into customers(first_name,last_name)
values 
    ('Greg', 'Jones'),
    ('Sandra', 'Jones'),
    ('Scott', 'Scott'),
    ('Trevor', 'Green'),
    ('Melanie', 'Johnson');
select * from items where price > 80;
select * from items where price < 300;
select * from customers 
where last_name='Smith'
select * from customers 
where last_name='Jones'
select * from customers 
where last_name != 'Scott'


	
