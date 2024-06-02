USE Pokemon;
-- Insertando filas dummy en la tabla Player
INSERT INTO Player (Player_Name, Player_Level, Registration_Date, Description, Matches)
VALUES ('Ash Ketchum', 10, '2023-01-01', 'Trainer from Pallet Town', 100),
       ('Misty', 8, '2023-02-01', 'Gym Leader of Cerulean City', 80),
       ('Brock', 9, '2023-01-15', 'Gym Leader of Pewter City', 90),
       ('Gary Oak', 10, '2023-03-05', 'Rival of Ash Ketchum', 95),
       ('Lt. Surge', 8, '2023-01-20', 'Gym Leader of Vermilion City', 70),
       ('Erika', 7, '2023-02-10', 'Gym Leader of Celadon City', 60),
       ('Sabrina', 9, '2023-03-25', 'Gym Leader of Saffron City', 85),
       ('Koga', 8, '2023-04-15', 'Gym Leader of Fuchsia City', 75),
       ('Blaine', 9, '2023-05-01', 'Gym Leader of Cinnabar Island', 88),
       ('Giovanni', 10, '2023-06-01', 'Leader of Team Rocket', 110),
       ('Red', 10, '2023-07-01', 'The ultimate Pokémon Trainer', 120);

-- Insertando filas dummy en la tabla Deck
INSERT INTO Deck (Name, Creation_Date, Description, Type, Size)
VALUES ('Water Blast', '2023-03-01', 'Deck focused on water type Pokémon', 'Water', 60),
       ('Electric Surge', '2023-04-01', 'Deck focused on electric type Pokémon', 'Electric', 60),
       ('Rock Solid', '2023-05-01', 'Deck focused on rock type Pokémon', 'Rock', 60),
       ('Grass Guardians', '2023-06-01', 'Deck focused on grass type Pokémon', 'Grass', 60),
       ('Fire Fury', '2023-07-01', 'Deck focused on fire type Pokémon', 'Fire', 60),
       ('Psychic Power', '2023-08-01', 'Deck focused on psychic type Pokémon', 'Psychic', 60),
       ('Poison Strike', '2023-09-01', 'Deck focused on poison type Pokémon', 'Poison', 60),
       ('Volcano Heat', '2023-10-01', 'Deck focused on fire type Pokémon', 'Fire', 60),
       ('Team Rocket', '2023-11-01', 'Deck created by Team Rocket', 'Dark', 60),
       ('Champion\'s Path', '2023-12-01', 'Deck for champions', 'Various', 60);

-- Insertando filas dummy en la tabla Player_Deck
INSERT INTO Player_Deck (Player_ID, Deck_ID)
VALUES (1, 1),
       (2, 2),
       (3, 3),
       (4, 4),
       (5, 5),
       (6, 6),
       (7, 7),
       (8, 8),
       (9, 9),
       (10, 10),
       (11, 1);

-- Insertando filas dummy en la tabla Attack
INSERT INTO Attack (Name, Description, Energy, Damage, Type)
VALUES ('Thunderbolt', 'A strong electric attack', 3, 90, 'Electric'),
       ('Water Gun', 'A basic water attack', 2, 40, 'Water'),
       ('Rock Throw', 'A basic rock attack', 2, 50, 'Rock'),
       ('Razor Leaf', 'A sharp leaf attack', 2, 55, 'Grass'),
       ('Flamethrower', 'A strong fire attack', 3, 85, 'Fire'),
       ('Psychic', 'A powerful psychic attack', 3, 80, 'Psychic'),
       ('Poison Sting', 'A poisonous attack', 1, 30, 'Poison'),
       ('Fire Spin', 'A fiery spinning attack', 4, 100, 'Fire'),
       ('Dark Pulse', 'A dark type attack', 3, 75, 'Dark'),
       ('Hyper Beam', 'A powerful beam attack', 5, 120, 'Normal');

-- Insertando filas dummy en la tabla Card
INSERT INTO Card (Attack_ID, Name, Type, Description, HP)
VALUES (1, 'Pikachu', 'Electric', 'Electric type Pokémon', 60),
       (2, 'Squirtle', 'Water', 'Water type Pokémon', 50),
       (3, 'Geodude', 'Rock', 'Rock type Pokémon', 70),
       (4, 'Bulbasaur', 'Grass', 'Grass type Pokémon', 50),
       (5, 'Charmander', 'Fire', 'Fire type Pokémon', 60),
       (6, 'Abra', 'Psychic', 'Psychic type Pokémon', 40),
       (7, 'Ekans', 'Poison', 'Poison type Pokémon', 45),
       (8, 'Magmar', 'Fire', 'Fire type Pokémon', 70),
       (9, 'Meowth', 'Normal', 'Normal type Pokémon', 50),
       (10, 'Snorlax', 'Normal', 'Normal type Pokémon', 100);

-- Insertando filas dummy en la tabla Deck_Card
INSERT INTO Deck_Card (Deck_ID, Card_ID)
VALUES (1, 2),
       (2, 1),
       (3, 3),
       (4, 4),
       (5, 5),
       (6, 6),
       (7, 7),
       (8, 8),
       (9, 9),
       (10, 10);

-- Insertando filas dummy en la tabla Effect
INSERT INTO Effect (Name, Type, Duration, Description)
VALUES ('Paralyze', 'Debuff', 2, 'Prevents the target from attacking'),
       ('Heal', 'Buff', 1, 'Restores health points'),
       ('Burn', 'Debuff', 3, 'Inflicts ongoing damage'),
       ('Freeze', 'Debuff', 2, 'Prevents the target from moving'),
       ('Sleep', 'Debuff', 2, 'Puts the target to sleep'),
       ('Poison', 'Debuff', 3, 'Inflicts ongoing poison damage'),
       ('Boost', 'Buff', 3, 'Increases attack power'),
       ('Shield', 'Buff', 2, 'Reduces incoming damage'),
       ('Confusion', 'Debuff', 2, 'May cause the target to hurt itself'),
       ('Curse', 'Debuff', 4, 'Inflicts severe ongoing damage');

-- Insertando filas dummy en la tabla Effect_Activation
INSERT INTO Effect_Activation (Effect_ID, Card_ID)
VALUES (1, 1),
       (2, 2),
       (3, 3),
       (4, 4),
       (5, 5),
       (6, 6),
       (7, 7),
       (8, 8),
       (9, 9),
       (10, 10);

-- Insertando filas dummy en la tabla Match
INSERT INTO Match_ (Player1_ID, Player2_ID, Winner_ID, Turns)
VALUES (1, 2, 1, 10),
       (3, 4, 3, 8),
       (5, 6, 5, 12),
       (7, 8, 7, 7),
       (9, 10, 9, 15),
       (1, 3, 3, 11),
       (2, 4, 4, 9),
       (5, 7, 7, 10),
       (6, 8, 6, 13),
       (9, 1, 1, 14),
       (10, 2, 2, 16);

-- Insertando filas dummy en la tabla Card_Evolution
INSERT INTO Card_Evolution (Base_Card_ID, Evolved_Card_ID)
VALUES (2, 3), 
       (4, 5),  
       (6, 7),  
       (8, 9),  
       (10, 1); 
