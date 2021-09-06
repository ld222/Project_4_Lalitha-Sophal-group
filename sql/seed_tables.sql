INSERT INTO users (firstname, lastname, email, password) VALUES
('Sophal', 'Lee', 'slee@live.com', '$2b$10$wdTuDdYuJMU1LsGm3vfho.BAC/vkqSfKaPVFI5.HJaPeohLEcO8Yi'),
('Lalitha', 'Damera', 'ldamera@live.com', '$2b$10$wdTuDdYuJMU1LsGm3vfho.BAC/vkqSfKaPVFI5.HJaPeohLEcO8Yi'),
('Ariana', 'Grande', 'agrande@live.com', '$2b$10$wdTuDdYuJMU1LsGm3vfho.BAC/vkqSfKaPVFI5.HJaPeohLEcO8Yi'),
('Luke', 'Breust', 'lbreust@live.com', '$2b$10$wdTuDdYuJMU1LsGm3vfho.BAC/vkqSfKaPVFI5.HJaPeohLEcO8Yi'),
('Kathleen', 'Gregorio', 'kgregorio@live.com', '$2b$10$wdTuDdYuJMU1LsGm3vfho.BAC/vkqSfKaPVFI5.HJaPeohLEcO8Yi');

INSERT INTO schedules (id_user, day, start_at, end_at) VALUES
(1, 1, '10:00', '14:00'),
(1, 2, '10:00', '14:00'),
(1, 3, '12:00', '14:00'),
(1, 4, '10:00', '14:00'),
(2, 1, '14:00', '16:00'),
(2, 5, '15:00', '17:00'),
(3, 7, '10:00', '14:00');