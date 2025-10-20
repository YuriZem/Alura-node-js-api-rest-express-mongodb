import express from "express";

import autorController from "../controllers/autorController.js";

const routes = express.Router();  

routes.get('/autores', autorController.listarAutores);
routes.post('/add_autores', autorController.add_autor);
routes.get('/autores/:id', autorController.findAutorForId);
routes.put('/autores/:id', autorController.updateAutor);
routes.delete('/autores/:id', autorController.removeAutor);


export default routes;