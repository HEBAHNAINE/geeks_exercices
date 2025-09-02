SELECT f.film_id, f.title, f.rating
FROM film f
JOIN inventory i ON f.film_id = i.film_id
LEFT JOIN rental r ON i.inventory_id = r.inventory_id AND r.return_date IS NULL
WHERE f.rating IN ('G', 'PG')
  AND r.rental_id IS NULL
ORDER BY f.title;

CREATE TABLE waiting_list (
    waiting_id SERIAL PRIMARY KEY,
    customer_id INT REFERENCES customer(customer_id),
    film_id INT REFERENCES film(film_id),
    added_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    position INT
);

INSERT INTO waiting_list (customer_id, film_id, position)
VALUES 
(1, 10, 1),  
(2, 10, 2),  
(3, 11, 1)

SELECT f.title,COUNT(w.waiting_id) AS number_waiting
FROM waiting_list w
JOIN film f ON w.film_id = f.film_id
GROUP BY f.film_id, f.title
ORDER BY number_waiting DESC;