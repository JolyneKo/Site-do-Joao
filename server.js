const express = require('express');
const path = require('path');
const { PORT } = require('./infos.json');

const app = express();
const arquivos = path.join(__dirname, 'src');

app.use(express.static(arquivos));

app.get('/quit', (req, res) => {
    process.exit(1);
});

app.listen(PORT);

console.log(`Escutando na porta ${PORT}`);
