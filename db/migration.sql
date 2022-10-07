DROP TABLE IF EXISTS cars, owners;

CREATE TABLE IF NOT EXISTS cars (
    cars_id SERIAL PRIMARY KEY,
    make varchar(30),
    year integer,
    color varchar(30)
);



CREATE TABLE IF NOT EXISTS owners (
    owner_id SERIAL PRIMARY KEY,
    first_name varchar(30),
    last_name varchar(255),
    cars_id integer,
    CONSTRAINT FK_cars_owners FOREIGN KEY (cars_id)
    REFERENCES cars(cars_id)
);

INSERT INTO cars (make, year, color) VALUES 
('Toyota', 2000, 'blue'),
('Honda', 2003, 'red'),
('Chevrolet', 2025, 'green'),
('Ford', 1660, 'brown'),
('Mercedez-Benz', 2023, 'matte black'),
('Tesla', 2022, 'black'),
('Jeep', 2018, 'black'),
('Volkswagon', 2019, 'silver'),
('BMW', 2023, 'black'),
('Porsche', 2024, 'green apple'),
('Lexus', 2022, 'silver'),
('Hyundai', 2025, 'baby blue'),
('Audi', 2017, 'black'),
('Ferrari', 1990, 'dragon fire red'),
('Mazda', 2013, 'white');

INSERT INTO owners (first_name, last_name, cars_id) VALUES 
('Derek', 'Tran', 1),
('Elijah', 'Stamp', 2),
('Jeff', 'Kearns', 3),
('Katie', 'Chevez', 4),
('Anthony', 'Englund', 5),
('Uncle', 'Sid', 6),
('Jeff', 'Second of His Name, Jr, MD, DDS, pHD', 7),
('Shelton', 'Seaborn', 8),
('Dylan', 'Clark', 9),
('Pirate', 'Jeff', 10),
('Etun', 'Charles',11),
('Tim-O', 'Tee', 12),
('Steven', 'Segerlund', 13),
('Joe', 'Drop-It-Low', 14),
('Ryan', 'Barnett', 15);