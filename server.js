import http from 'http';

const PORT = 3000;

const rotas = {
    '/': 'Curso de Node.js',
    '/livros': 'Você está na página de livros',
    '/autores': 'Você está na página de autores',
    '/editora': 'Você está na página de editoras'
};
const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(rotas[req.url] || 'Página não encontrada');
});

server.listen(PORT, () => {
    console.log('Server running at http://localhost:3000/');
});

