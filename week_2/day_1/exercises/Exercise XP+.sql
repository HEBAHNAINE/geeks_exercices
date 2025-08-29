create DATABASE bootcamp;
create TABLE students(
  id serial primary key,
  first_name varchar(60) not null,
  last_name varchar(60) not null,
   birth_date DATE NOT NULL
);
insert into students (first_name,last_name,birth_date)
values 
   ('Marc', 'Benichou', '02/11/1998'),
   ('Yoan', 'Cohen', '03/12/2010'),
   ('Lea', 'Benichou', '27/07/1987'),
   ('Amelia', 'Dux', '07/04/1996'),
   ('David', 'Grez', '14/06/2003'),
   ('Omer', 'Simpson', '03/10/1980');
select * from students ;
select first_name , last_name from students;
select first_name , last_name from students
where first_name='Marc' and last_name='Benichou';
select first_name , last_name from students
where first_name='Marc' or last_name='Benichou';
select first_name , last_name from students
where first_name like '%a%';
select first_name , last_name from students
where first_name like 'a%';
select first_name , last_name from students
where first_name like '%a';
select first_name , last_name from students
where first_name like '%a_';
select first_name , last_name from students
where id IN (1, 3);
select * from students where birth_date >='1/01/2000';