CREATE TABLE product__orders (
    order_id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(user_id) ON DELETE CASCADE,
    order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE items_ (
    item_id SERIAL PRIMARY KEY,
    order_id INT REFERENCES product_orders(order_id) ON DELETE CASCADE,
    item_name VARCHAR(100) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    quantity INT NOT NULL
);

CREATE OR REPLACE FUNCTION get_order_total(p_order_id INT)
RETURNS NUMERIC AS $$
DECLARE
    total NUMERIC;
BEGIN
    SELECT SUM(price * quantity) 
    INTO total                   
    FROM items
    WHERE order_id = p_order_id; 

    RETURN COALESCE(total, 0);   
	
END;
$$ LANGUAGE plpgsql;

CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE
);

CREATE OR REPLACE FUNCTION get_user_order_total(p_user_id INT, p_order_id INT)
RETURNS NUMERIC AS $$
DECLARE
    total NUMERIC;
BEGIN
    SELECT SUM(i.price * i.quantity)
    INTO total
    FROM items i
    JOIN product_orders o ON i.order_id = o.order_id
    WHERE o.order_id = p_order_id
      AND o.user_id = p_user_id;

    RETURN COALESCE(total, 0); 
END;
$$ LANGUAGE plpgsql;