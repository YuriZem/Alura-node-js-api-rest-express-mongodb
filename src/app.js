import express from 'express';
import dbConnect from './config/dbConnect.js';
import routes from './routes/index.js'; 

const conect = await dbConnect();

conect.on("error", (error) => {
    console.log("Erro de conexão !!!!!", error);
}); 

conect.once("open", () => {
    console.log("Conexão com o banco feita com sucesso !!!!!");
})

const app = express();
routes(app);

app.get("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    const livroSelecionado = livros[index];
    res.status(200).json(livroSelecionado);
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