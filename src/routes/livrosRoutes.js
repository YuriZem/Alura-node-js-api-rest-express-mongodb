import express from "express";

import LivroController from "../controllers/livroController.js";

const routes = express.Router();  

routes.get('/livros', LivroController.listarLivros);

routes.post('/add_livros', LivroController.add_book);


export default routes;