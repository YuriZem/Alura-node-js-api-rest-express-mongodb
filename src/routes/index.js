import express from 'express';
import Livro from "./livrosRoutes.js";
import Autor from "./autorRoutes.js";

const routes = (app) => {
  
  app.route("/").get((req,res) => res.status(200).send("Curso de Node.js com Express"));
  
  app.use(express.json(), Livro,Autor);

};

export default routes;