// import http from 'http';
import app from './src/app.js';

const PORT = process.env.PORT || 3000;
// const PORT = 3000;

const rotas = {
    '/': 'Curso de Node.js',
    '/livros': 'Você está na página de livros',
    '/autores': 'Você está na página de autores',
    '/editora': 'Você está na página de editoras'
};

app.listen(PORT, () => {
    console.log(`Servidor escutando em http://localhost:${PORT}`);
});
