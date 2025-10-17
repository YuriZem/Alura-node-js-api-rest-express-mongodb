import express from 'express';
import dbConnect from './config/dbConnect.js';

const conect = await dbConnect();

conect.on("error", (error) => {
    console.log("Erro de conexão !!!!!", error);
}); 

conect.once("open", () => {
    console.log("Conexão com o banco feita com sucesso !!!!!");
})


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

app.put('/livros/:id', (req, res) => {
    const index = buscaLivro(req.params.id);
    livros[index].titulo = req.body.titulo;
    res.status(200).send('Livro atualizado com sucesso!');
});

app.delete('/livros/:id', (req, res) => {
    const index = buscaLivro(req.params.id);
    livros.splice(index, 1);
    res.status(200).send('Livro removido com sucesso!');
});

export default app;

// mongodb+srv://yuri:<db_password>@cluster0.dnsp8l8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0