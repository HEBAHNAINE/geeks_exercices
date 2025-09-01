SELECT first_name, last_name
FROM customers
ORDER BY last_name DESC, first_name DESC
LIMIT 2;

DELETE FROM purchases
WHERE customer_id = (
    SELECT id 
    FROM customers 
    WHERE first_name = 'Scott' AND last_name = 'Scott'
);

SELECT *
FROM customers
WHERE first_name = 'Scott' AND last_name = 'Scott';

SELECT 
    p.id AS purchase_id,
    COALESCE(c.first_name, '') AS first_name,
    COALESCE(c.last_name, '') AS last_name,
    p.item_id,
    p.quantity_purchased
FROM purchases p
LEFT JOIN customers c ON p.customer_id = c.customers_id;

SELECT 
    p.id AS purchase_id,
    c.first_name,
    c.last_name,
    p.item_id,
    p.quantity_purchased
FROM purchases p
INNER JOIN customers c ON p.customer_id = c.customers_id
WHERE NOT (c.first_name = 'Scott' AND c.last_name = 'Scott');