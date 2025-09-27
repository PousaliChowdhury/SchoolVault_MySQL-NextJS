CREATE DATABASE schoolDB;

USE schoolDB;

CREATE TABLE schools (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name TEXT NOT NULL,
    address TEXT,
    city TEXT,
    state TEXT,
    contact BIGINT,
    image TEXT,
    email_id TEXT
);

-- (Optional) Insert some sample data
INSERT INTO schools (name, address, city, state, contact, image, email_id)
VALUES 
('Springfield High', '742 Evergreen Terrace', 'Springfield', 'IL', 1234567890, 'default.jpg', 'info@springfield.edu');
