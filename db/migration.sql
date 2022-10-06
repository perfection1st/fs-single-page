CREATE DATABASE IF NOT EXISTS vehicles;

CREATE TABLE IF NOT EXISTS cars (
    cars_id SERIAL PRIMARY KEY,
    make varchar(30),
    year integer,
    color varchar(30)
);

CREATE TABLE IF NOT EXISTS owners (
    owner_id SERIAL PRIMARY KEY,
    first_name varchar(30),
    last_name varchar(30),
    cars_id integer,
    CONSTRAINT FK_cars_owners FOREIGN KEY (cars_id)
    REFERENCES cars(cars_id)
);