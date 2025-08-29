SELECT *
FROM students
ORDER BY last_name ASC
LIMIT 4;
SELECT *
FROM students
ORDER BY birth_date DESC
LIMIT 1;
SELECT *
FROM students
LIMIT 3 offset 2;