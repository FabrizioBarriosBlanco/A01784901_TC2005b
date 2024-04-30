//Fabrizio Barrios Blanco A01784901

import express from 'express';

const app = express();
app.use(express.json());

let card_template = ['id', 'name', 'type_id', 'type_name', 'hp', 'speed', 'speed_cost', 'atk', 'def'];

let card_list = [
    {
        'id': 1,
        'name': 'Faust',
        'type_id': 1,
        'type_name': 'Identity',
        'hp': 15,
        'speed': 3,
        'speed_cost': null,  
        'atk': null,        
        'def': null         
    },
    {
        'id': 2,
        'name': 'Mephistopheles',
        'type_id': 2,
        'type_name': 'Attack Card',
        'hp': null,         
        'speed': null,  
        'speed_cost': 2,
        'atk': 4,
        'def': null         
    }
];

app.get('/cards', (req, res) => {
    if (card_list.length === 0) {
        res.status(404).json({ message: "No hay cartas disponibles." });
    } else {
        res.json(card_list);
    }
});

app.get('/cards/:id', (req, res) => {
    const card = card_list.find(c => c.id === parseInt(req.params.id));
    if (!card) {
        res.status(404).json({ message: "No se encontró la carta." });
    } else {
        res.json(card);
    }
});

app.post('/cards', (req, res) => {
    const { id, name, type_id, type_name, hp, speed, speed_cost, atk, def } = req.body;
    if (!id || !name) {  
        res.status(400).json({ message: "Datos incompletos o inválidos." });
        return;
    }
    const exists = card_list.some(c => c.id === id);
    if (exists) {
        res.status(409).json({ message: "La carta ya existe." });
    } else {
        card_list.push({ id, name, type_id, type_name, hp, speed, speed_cost, atk, def });
        res.status(201).json({ message: "Carta agregada exitosamente." });
    }
});

app.delete('/cards/:id', (req, res) => {
    const cardIndex = card_list.findIndex(c => c.id === parseInt(req.params.id));
    if (cardIndex === -1) {
        res.status(404).json({ message: "No se encontró la carta a eliminar." });
    } else {
        card_list.splice(cardIndex, 1);
        res.json({ message: "Carta eliminada exitosamente." });
    }
});

app.put('/cards/:id', (req, res) => {
    const card = card_list.find(c => c.id === parseInt(req.params.id));
    if (!card) {
        res.status(404).json({ message: "No se encontró la carta a actualizar." });
    } else {
        const { name, type_id, type_name, hp, speed, speed_cost, atk, def } = req.body;
        card.name = name ?? card.name;
        card.type_id = type_id ?? card.type_id;
        card.type_name = type_name ?? card.type_name;
        card.hp = hp ?? card.hp;
        card.speed = speed ?? card.speed;
        card.speed_cost = speed_cost ?? card.speed_cost;
        card.atk = atk ?? card.atk;
        card.def = def ?? card.def;
        res.json({ message: "Carta actualizada correctamente.", card });
    }
});

const PORT =  3001;
app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
