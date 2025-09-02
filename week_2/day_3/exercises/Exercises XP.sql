--ex1
select * from language; 

select f.title , f.description , l.name 
from language l 
inner join film f on f.language_id=l.language_id;

select f.title , f.description , l.name 
from language l 
left join film f on f.language_id=l.language_id;

CREATE TABLE new_film (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);

select * from new_film;

INSERT INTO new_film (name)
VALUES
('Inception'),
('Interstellar'),
('The Matrix'),
('Parasite'),
('Spirited Away');

create table customer_review(
review_id serial primary key,
film_id int,
language_id int,
title varchar(50),
score int,
review_text text,
last_update date,
foreign key (film_id) REFERENCES new_film(id)ON DELETE CASCADE,
foreign key (language_id) REFERENCES language(language_id)
);

select * from customer_review;

INSERT INTO customer_review (film_id, language_id, title, score, review_text)
VALUES 
(2, 1, 'Amazing Movie', 9, 'The story was engaging and the visuals were outstanding.'),
(3, 1, 'Not Bad', 7, 'Good action scenes but the plot was a bit predictable.');

DELETE FROM new_film WHERE id = 2;
--When a film is deleted from the new_film table all its related reviews in the customer_review table are automatically deleted because of the ON DELETE CASCADE constraint

--ex2



