CREATE DATABASE Pokemon;
USE Pokemon;

-- Tabla Player
CREATE TABLE Player (
    Player_ID INT AUTO_INCREMENT PRIMARY KEY,
    Player_Name VARCHAR(255) NOT NULL,
    Player_Level INT NOT NULL,
    Registration_Date DATE NOT NULL,
    Description VARCHAR(255),
    Matches INT
);

-- Tabla Deck
CREATE TABLE Deck (
    Deck_ID INT AUTO_INCREMENT PRIMARY KEY,
    Name VARCHAR(255) NOT NULL,
    Creation_Date DATE NOT NULL,
    Description VARCHAR(255),
    Size INT,
    Type VARCHAR(255)
);

-- Tabla Player_Deck
CREATE TABLE Player_Deck (
    Player_Deck_ID INT AUTO_INCREMENT PRIMARY KEY,
    Player_ID INT,
    Deck_ID INT,
    FOREIGN KEY (Player_ID) REFERENCES Player(Player_ID),
    FOREIGN KEY (Deck_ID) REFERENCES Deck(Deck_ID)
);

-- Tabla Card
CREATE TABLE Card (
    Card_ID INT AUTO_INCREMENT PRIMARY KEY,
    Attack_ID INT,
    Name VARCHAR(255) NOT NULL,
    Type VARCHAR(255),
    Description VARCHAR(255),
    HP INT,
    FOREIGN KEY (Attack_ID) REFERENCES Attack(Attack_ID)
);

-- Tabla Deck_Card
CREATE TABLE Deck_Card (
    Deck_Card_ID INT AUTO_INCREMENT PRIMARY KEY,
    Deck_ID INT,
    Card_ID INT,
    FOREIGN KEY (Deck_ID) REFERENCES Deck(Deck_ID),
    FOREIGN KEY (Card_ID) REFERENCES Card(Card_ID)
);

-- Tabla Effect
CREATE TABLE Effect (
    Effect_ID INT AUTO_INCREMENT PRIMARY KEY,
    Name VARCHAR(255) NOT NULL,
    Type VARCHAR(255),
    Duration INT,
    Description VARCHAR(255)
);

-- Tabla Effect_Activation
CREATE TABLE Effect_Activation (
    Effect_Activation_ID INT AUTO_INCREMENT PRIMARY KEY,
    Effect_ID INT,
    Card_ID INT,
    FOREIGN KEY (Effect_ID) REFERENCES Effect(Effect_ID),
    FOREIGN KEY (Card_ID) REFERENCES Card(Card_ID)
);

-- Tabla Attack
CREATE TABLE Attack (
    Attack_ID INT AUTO_INCREMENT PRIMARY KEY,
    Name VARCHAR(255) NOT NULL,
    Description VARCHAR(255),
    Energy INT,
    Damage INT,
    Type VARCHAR(255)
);

-- Tabla Match
CREATE TABLE Match (
    Match_ID INT AUTO_INCREMENT PRIMARY KEY,
    Player1_ID INT,
    Player2_ID INT,
    Winner_ID INT,
    Turns INT,
    FOREIGN KEY (Player1_ID) REFERENCES Player(Player_ID),
    FOREIGN KEY (Player2_ID) REFERENCES Player(Player_ID),
    FOREIGN KEY (Winner_ID) REFERENCES Player(Player_ID)
);

-- Tabla Card_Evolution
CREATE TABLE Card_Evolution (
    Evolution_ID INT AUTO_INCREMENT PRIMARY KEY,
    Base_Card_ID INT,
    Evolved_Card_ID INT,
    FOREIGN KEY (Base_Card_ID) REFERENCES Card(Card_ID),
    FOREIGN KEY (Evolved_Card_ID) REFERENCES Card(Card_ID)
);
