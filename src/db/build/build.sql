BEGIN;

DROP TABLE IF EXISTS banks, donors CASCADE;

CREATE TABLE banks (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL UNIQUE,
    address TEXT NOT NULL
);


CREATE TABLE donors (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    address TEXT NOT NULL,
    age INT NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    blood_type VARCHAR(10) NOT NULL,
    bank_id INT NOT NULL REFERENCES banks(id)
);



INSERT INTO banks (name, address) VALUES
('Al Shifaa Hospital', 'Wihda Street'), 
('Hilal Ahmar', 'Tel el hawa');

INSERT INTO donors (first_name, last_name, address, age, email, blood_type, bank_id) VALUES
('Ahmed', 'Mohamed', 'Tel el hawa',23, 'ahmed@gmail.com', '+O', 1),
('Mohamed', 'Ahmed', 'Tel el hawa', 23,'ahmed2@gmail.com',  '+AB', 1),
('Ali', 'Mohamed', 'Tel el hawa', 23,'ahmed3@gmail.com' , '-O', 2),
('Mohamed', 'Ali', 'Tel el hawa', 23,'ahmed4@gmail.com' ,'-A', 2),
('Omar', 'Mohamed', 'Tel el hawa', 23,'ahmed5@gmail.com' ,'-B', 1),
('Mohamed', 'Omar', 'Tel el hawa', 23, 'ahmed6@gmail.com', '+A', 2),
('Ali', 'Omar', 'Tel el hawa', 23,'ahmed7@gmail.com' , '+AB', 1);


COMMIT;
