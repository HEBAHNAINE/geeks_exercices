--ex1
select rating , count(*)AS film_count
from film
GROUP BY rating;

select film_id, title, rating
from film
where rating in ('G', 'PG-13');

select * from  film;
select * from  customer;

select film_id, title, rating
from film
where rating in ('G', 'PG-13') 
      and length < 120
	  and rental_rate < 3.00
ORDER BY title;

UPDATE customer
SET first_name = 'Ali',
    last_name = 'Hnine',
    email = 'ali.hnine@example.com'
WHERE customer_id = 5;

UPDATE address
SET address = '123 Main Street',
    address2 = 'Apartment 4B',
    district = 'Casablanca',
    postal_code = '20000',
    phone = '0612345678'
WHERE address_id = 10;
--ex2
update students
set birth_date='02/11/1998'
where last_name='Benichou';

select * from students;

update students
set last_name='Guez'
where first_name='David';

delete from students 
where first_name='Lea' and last_name='Benichou';

select count(*) as totla
from students;

select count(*) as totla
from students 
where birth_date > '1/01/2000';

ALTER TABLE students
ADD COLUMN math_grade INT;

update students 
set math_grade=80
where id=1;

update students 
set math_grade=90
where id=2 or id=4;

update students 
set math_grade=40
where id=6;

 select count(*)  from students 
 where math_grade <83;

INSERT INTO students (first_name, last_name, birth_date, math_grade)
SELECT 'Omer', 'Simpson', birth_date, 70
FROM students
LIMIT 1;

INSERT INTO students (first_name, last_name, birth_date, math_grade)
SELECT 'Omer', 'Simpson', birth_date, 85
FROM students
WHERE first_name = 'Omer' AND last_name = 'Simpson'
LIMIT 1;

SELECT SUM(math_grade) AS total_grades
FROM students;
--ex3
--part I
CREATE TABLE purchases (
    id SERIAL PRIMARY KEY,                  
    customer_id INT REFERENCES customers(customers_id),
    item_id INT REFERENCES items(item_id),             
    quantity_purchased INT NOT NULL
);
INSERT INTO purchases (customer_id, item_id, quantity_purchased)
VALUES (
  (SELECT customers_id FROM customers WHERE first_name = 'Scott' AND last_name = 'Scott'),
  (SELECT item_id FROM items WHERE name = 'Fan'),
  1
);
Insert into purchases (customer_id,item_id,quantity_purchased)
values (
   (SELECT customers_id FROM customers WHERE first_name = 'Melanie' AND last_name = 'Johnson'),
   (SELECT item_id FROM items WHERE name = 'Large Desk'),
   10
);
Insert into purchases (customer_id,item_id,quantity_purchased)
values (
   (SELECT customers_id FROM customers WHERE first_name = 'Greg' AND last_name = 'Jones'),
   (SELECT item_id FROM items WHERE name = 'Small Desk'),
   2
);
--part II
select * from purchases;

select *
from purchases p 
inner join customers  c on p.customer_id=c.customers_id; 

SELECT *
FROM purchases p
INNER JOIN customers c ON p.customer_id = c.customers_id
WHERE c.customers_id = 5;

SELECT *
FROM purchases p
JOIN items i ON p.item_id = i.item_id
WHERE i.name IN ('Large Desk', 'Small Desk');

Customer first name
Customer last name
Item name

select c.first_name , c.last_name ,i.name
from purchases p
inner join customers c on c.customers_id=p.customer_id
inner join items i on i.item_id=p.item_id;

--Nonça ne marche pas Parce que la colonne item_id est une foreign key qui doit obligatoirement référencer un id existant dans la table items.











 


