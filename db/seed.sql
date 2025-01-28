
\c calculator_app

INSERT INTO users (username, password_hash, email, created_at, updated_at)
VALUES 
('demo', '$2b$10$.z68x3792U9LyBwmghfsKexstMO7i0SeNCoDmeJa7bEFPQBnZU3bK', 'demo@example.com', NOW(), NOW());

INSERT INTO calculations (calculation, result, created_at, updated_at)
VALUES 
('1 + 1', '2', NOW(), NOW());



