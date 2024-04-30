Fabrizio Barrios Blanco A01784901

"use strict";

import express from 'express';

const app = express();
app.use(express.json());

const cards = [];

function isValidCard(card) {
    return card && card.id && card.name && card.description;
}

function cardExists(id) {
    return cards.some(c => c.id === id);
}

app.get('/cards', (req, res) => {
    if (cards.length === 0) {
        res.status(404).json({ message: "No hay cartas." });
    } else {
        res.json(cards);
    }
});

app.get('/cards/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const card = cards.find(c => c.id === id);
    if (!card) {
        res.status(404).json({ message: "No se encontró la carta." });
    } else {
        res.json(card);
    }
});

app.post('/cards', (req, res) => {
    const { id, name, description } = req.body;
    if (!isValidCard(req.body)) {
        res.status(400).json({ message: "Datos incompletos." });
        return;
    }
    if (cardExists(id)) {
        res.status(409).json({ message: "La carta existe." });
    } else {
        cards.push({ id, name, description });
        res.status(201).json({ message: "Carta agregada." });
    }
});

app.delete('/cards/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const cardIndex = cards.findIndex(c => c.id === id);
    if (cardIndex === -1) {
        res.status(404).json({ message: "No se encontró la carta." });
    } else {
        cards.splice(cardIndex, 1);
        res.json({ message: "Carta eliminada." });
    }
});

app.put('/cards/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const card = cards.find(c => c.id === id);
    if (!card) {
        res.status(404).json({ message: "No se encontró la carta." });
    } else {
        const { name, description } = req.body;
        if (name) card.name = name;
        if (description) card.description = description;
        res.json({ message: "Carta actualizada.", card });
    }
});

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
