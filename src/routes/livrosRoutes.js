import express from "express";

import LivroController from "../controllers/livroController.js";

const routes = express.Router();  

routes.get('/livros', LivroController.listarLivros);
routes.post('/add_livros', LivroController.add_book);
routes.get('/livros/:id', LivroController.findBookForId);
routes.put('/livros/:id', LivroController.updateBook);
routes.delete('/livros/:id', LivroController.removeBook);


export default routes;