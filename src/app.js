import express from 'express';
import dbConnect from './config/dbConnect.js';
import livro from './models/Livro.js';
import e from 'express';

const conect = await dbConnect();

conect.on("error", (error) => {
    console.log("Erro de conexão !!!!!", error);
}); 

conect.once("open", () => {
    console.log("Conexão com o banco feita com sucesso !!!!!");
})

const app = express();

app.use(express.json());


app.get('/', (req, res) => {
    res.status(200).send('Curso de Node.js com Express');
});

app.get('/livros', async (req, res) => {
    try{
        const listBooks = await livro.find().exec();
        
        if(!listBooks.length){
            res.status(404).send('Nenhum livro encontrado');
        }
        res.status(200).json(listBooks);
    }catch(err){
        console.error(err.message);
        res.status(500).json({error: err.message});
    }
});

app.get("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    const livroSelecionado = livros[index];
    res.status(200).json(livroSelecionado);
});

app.post('/add_livros', async (req, res) => {
    try {
        const novoLivro = await livro.create(req.body);
        res.status(201).json(novoLivro);
    } catch (error) {
        console.error('Erro ao adicionar livro:', error);
        res.status(500).json({ error: "Erro ao adicionar livro" });
    }
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