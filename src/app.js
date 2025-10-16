import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.status(200).send('Curso de Node.js com Express');
});
app.get('/livros', (req, res) => {
    res.status(200).send('Aqui os livros');
});

export default app;
