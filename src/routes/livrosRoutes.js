import express from "express";

import LivroController from "../controllers/livroController.js";

const routes = express.Router();  

routes.get('/livros', LivroController.listarLivros);
routes.get('/livros/busca', LivroController.searchForEditora);
routes.get('/livros/:id', LivroController.findBookForId);
routes.post('/add_livros', LivroController.add_book);
routes.put('/livros/:id', LivroController.updateBook);
routes.delete('/livros/:id', LivroController.removeBook);
routes.delete('/livros/:id', LivroController.removeBook);


export default routes;