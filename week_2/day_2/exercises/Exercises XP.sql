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

--ex2
select * from film;

select (first_name , last_name) as full_name from customer; 

SELECT DISTINCT create_date
FROM customer;

select * from customer order by first_name desc;

SELECT film_id, title, description, release_year, rental_rate FROM film
ORDER BY rental_rate ASC;

SELECT address, phone FROM address
WHERE district = 'Texas';

SELECT * FROM film WHERE film_id IN (15, 150);

SELECT film_id, title, description, length, rental_rate FROM film
WHERE title = 'In%';

SELECT * FROM film ORDER BY rental_rate ASC LIMIT 10;

SELECT film_id, title, rental_rate
FROM (
    SELECT *,
           ROW_NUMBER() OVER (ORDER BY rental_rate ASC) AS rn
    FROM film
) sub
WHERE rn > 10 AND rn <= 20;

select c.first_name ,c.last_name , p.amount ,p.payment_date
from customer c
INNER JOIN payment p ON c.customer_id = p.customer_id
ORDER BY c.customer_id ASC;
 
select f.*
from film f
left join inventory i ON f.film_id = i.film_id
where f.film_id is null;

SELECT ci.city AS city_name, co.country AS country_name
FROM city ci
INNER JOIN country co ON ci.country_id = co.country_id
ORDER BY co.country, ci.city;

SELECT 
    c.customer_id,
    c.first_name,
    c.last_name,
    p.amount,
    p.payment_date,
    p.staff_id
FROM customer c
INNER JOIN payment p ON c.customer_id = p.customer_id
ORDER BY p.staff_id ASC, c.customer_id ASC;







