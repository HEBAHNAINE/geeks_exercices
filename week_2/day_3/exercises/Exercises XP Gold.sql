--ex1
SELECT r.rental_id,c.first_name,c.last_name,f.title,r.rental_date
FROM rental r
inner JOIN inventory i ON r.inventory_id = i.inventory_id
inner JOIN film f ON i.film_id = f.film_id
inner JOIN customer c ON r.customer_id = c.customer_id
WHERE r.return_date IS NULL;

SELECT c.first_name,c.last_name, COUNT(r.rental_id) AS rentals_out
FROM customer c
JOIN rental r ON c.customer_id = r.customer_id
WHERE r.return_date IS NULL
GROUP BY c.customer_id, c.first_name, c.last_name
ORDER BY rentals_out DESC;

SELECT f.title, f.description
FROM film f
JOIN film_actor fa ON f.film_id = fa.film_id
JOIN actor a ON fa.actor_id = a.actor_id
JOIN film_category fc ON f.film_id = fc.film_id
JOIN category c ON fc.category_id = c.category_id
WHERE a.first_name = 'Joe' 
  AND a.last_name = 'Swank'
  AND c.name = 'Action';

--ex2
SELECT r.rental_id,c.first_name,c.last_name,f.title,r.rental_date
FROM rental r
inner JOIN inventory i ON r.inventory_id = i.inventory_id
inner JOIN film f ON i.film_id = f.film_id
inner JOIN customer c ON r.customer_id = c.customer_id
WHERE r.return_date IS NULL;

SELECT c.first_name,c.last_name, COUNT(r.rental_id) AS rentals_out
FROM customer c
JOIN rental r ON c.customer_id = r.customer_id
WHERE r.return_date IS NULL
GROUP BY c.customer_id, c.first_name, c.last_name
ORDER BY rentals_out DESC;

SELECT f.title, f.description
FROM film f
JOIN film_actor fa ON f.film_id = fa.film_id
JOIN actor a ON fa.actor_id = a.actor_id
JOIN film_category fc ON f.film_id = fc.film_id
JOIN category c ON fc.category_id = c.category_id
WHERE a.first_name = 'Joe' 
  AND a.last_name = 'Swank'
  AND c.name = 'Action';

select  s.store_id,ci.city,co.country
from store s 
inner join address a on s.address_id=a.address_id
inner join city ci on a.city_id=ci.city_id
inner join country co on ci.country_id=co.country_id
ORDER BY s.store_id;

SELECT s.store_id, SUM(f.length)/60.0 AS total_hours
FROM store s
JOIN inventory i ON s.store_id = i.store_id
JOIN film f ON i.film_id = f.film_id
GROUP BY s.store_id
ORDER BY s.store_id;

SELECT s.store_id,SUM(f.length)/60.0 AS total_hours
FROM store s
JOIN inventory i ON s.store_id = i.store_id
JOIN film f ON i.film_id = f.film_id
LEFT JOIN rental r ON i.inventory_id = r.inventory_id AND r.return_date IS NULL
WHERE r.rental_id IS NULL 
GROUP BY s.store_id
ORDER BY s.store_id;

SELECT DISTINCT c.customer_id,c.first_name,c.last_name,ci.city
FROM customer c
JOIN address ca ON c.address_id = ca.address_id
JOIN city ci ON ca.city_id = ci.city_id
WHERE ci.city IN (
    SELECT DISTINCT ci2.city
    FROM store s
    JOIN address a2 ON s.address_id = a2.address_id
    JOIN city ci2 ON a2.city_id = ci2.city_id
)
ORDER BY ci.city, c.last_name, c.first_name;

CREATE TABLE safe_list (
    film_id INT PRIMARY KEY,
    title VARCHAR(255),
    description TEXT,
    length INT,
    category_name VARCHAR(50),
    CHECK (
        category_name <> 'Horror'
        AND title NOT ILIKE ANY (ARRAY['%beast%', '%monster%', '%ghost%', '%dead%', '%zombie%', '%undead%'])
        AND description NOT ILIKE ANY (ARRAY['%beast%', '%monster%', '%ghost%', '%dead%', '%zombie%', '%undead%'])
    )
);

INSERT INTO safe_list (film_id, title, description, length, category_name)
SELECT f.film_id, f.title, f.description, f.length, c.name
FROM film f
JOIN film_category fc ON f.film_id = fc.film_id
JOIN category c ON fc.category_id = c.category_id
WHERE c.name <> 'Horror'
  AND f.title NOT ILIKE ANY (ARRAY['%beast%', '%monster%', '%ghost%', '%dead%', '%zombie%', '%undead%'])
  AND f.description NOT ILIKE ANY (ARRAY['%beast%', '%monster%', '%ghost%', '%dead%', '%zombie%', '%undead%']);

SELECT SUM(length) AS total_viewing_time
FROM safe_list;
--Pour la liste générale
SELECT 
    SUM(length) AS total_minutes,
    SUM(length)/60.0 AS total_hours,
    SUM(length)/60.0/24.0 AS total_days
FROM film;
--Pour la liste safe
SELECT 
    SUM(length) AS total_minutes,
    SUM(length)/60.0 AS total_hours,
    SUM(length)/60.0/24.0 AS total_days
FROM safe_list;