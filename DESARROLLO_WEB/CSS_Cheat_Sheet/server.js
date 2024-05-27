'use strict';

import express from "express";
import path from "path";
import { fileURLToPath } from 'url';

const app = express();
const port = 3001;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, 'public')));

app.get('/css_cheat_sheet', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'css_cheat_sheet.html'));
});

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
  });
