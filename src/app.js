import express from 'express';

const app = express();

const livros = [
    { id: 1, titulo: 'O Senhor dos Anéis - A Sociedade do Anel' },
    { id: 2, titulo: 'O Senhor dos Anéis - As Duas Torres' },
    { id: 3, titulo: 'O Senhor dos Anéis - O Retorno do Rei' },
    { id: 4, titulo: 'O Senhor dos Anéis - O Retorno do Rei' },
    { id: 5, titulo: 'O Senhor dos Anéis - O Retorno do Rei' },
    { id: 6, titulo: 'O Senhor dos Anéis - O Retorno do Rei' },
    { id: 7, titulo: 'O Senhor dos Anéis - O Retorno do Rei' },
];

app.get('/', (req, res) => {
    res.status(200).send('Curso de Node.js com Express');
});

app.get('/livros', (req, res) => {
    res.status(200).json(livros);
});

export default app;
