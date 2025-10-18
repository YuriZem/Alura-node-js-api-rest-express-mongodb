import express from 'express';
import Livro from "./livrosRoutes.js";

const routes = (app) => {
  
  app.route("/").get((req,res) => res.status(200).send("Curso de Node.js com Express"));
  
  app.use(express.json(), Livro);

};

export default routes;