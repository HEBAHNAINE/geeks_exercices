--ex1
select * from items 
ORDER BY price ASC;

select * from items 
where price>=80 
order by price desc;

select * from customers;

SELECT first_name, last_name
FROM customers
ORDER BY first_name ASC
LIMIT 3;

SELECT last_name
FROM customers
ORDER BY last_name DESC;
