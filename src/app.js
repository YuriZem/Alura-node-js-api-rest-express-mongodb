import express from 'express';

const app = express();

app.use(express.json());

const livros = [
    { id: 1, titulo: 'O Senhor dos Anéis - A Sociedade do Anel' },
    { id: 2, titulo: 'O Senhor dos Anéis - As Duas Torres' },
    { id: 3, titulo: 'O Senhor dos Anéis - O Retorno do Rei' },
    { id: 4, titulo: 'O Senhor dos Anéis - O Retorno do Rei' },
    { id: 5, titulo: 'O Senhor dos Anéis - O Retorno do Rei' },
    { id: 6, titulo: 'O Senhor dos Anéis - O Retorno do Rei' },
    { id: 7, titulo: 'O Senhor dos Anéis - O Retorno do Rei' },
];


function buscaLivro(id) {
    return livros.findIndex(livro => {
        return livro.id === Number(id)
});
}

app.get('/', (req, res) => {
    res.status(200).send('Curso de Node.js com Express');
});

app.get('/livros', (req, res) => {
    res.status(200).json(livros);
});

app.get("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    const livroSelecionado = livros[index];
    res.status(200).json(livroSelecionado);
});

app.post('/add_livros', (req, res) => {
    // Lógica para adicionar um novo livro
   livros.push(req.body);
    res.status(201).send('Livro adicionado com sucesso!');
});

export default app;

