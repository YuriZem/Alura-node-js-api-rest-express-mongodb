import {autor} from "../models/Autor.js";

class autorController {

  static async listarAutores (req, res) {
    try{
      const listAutores = await autor.find().exec();
      res.status(200).json(listAutores);
    }catch(err){
      console.error('Erro ao listar autor:', err);
      res.status(500).json({ error: "Erro ao listar autor" });
    }
  }

  static async add_autor (req, res){
    try{
      const newAutor = await autor.create(req.body);
      res.status(201).json(newAutor);
    }catch(err){
      console.error('Erro ao adicionar autor:', err);
      res.status(500).json({ error: "Erro ao adicionar autor" });
    }
  }

  static async updateAutor (req, res){
    try {
      const id = req.params.id;
      await autor.findByIdAndUpdate(id,req.body);
      res.status(200).json({message: "autor atualizado com sucesso"});
    } catch (error) {
     console.error('Erro ao atualizar autor:', error);
     res.status(500).json({ error: "Erro ao atualizar autor" }); 
    }
  };

  static async findAutorForId (req, res){
    try {
      const id = req.params.id;
      const autorfound = await autor.findById(id).exec();
      res.status(200).json(autorfound);
    } catch (error) {
      console.error('Erro ao buscar autor por ID:', error);
      res.status(500).json({ error: "Erro ao buscar autor por ID" });
    }
  };

  static async removeAutor (req, res){
    try {
      const id = req.params.id;
      await autor.findByIdAndDelete(id);
      res.status(200).json({message: "autor removido com sucesso"});
    } catch (error) {
      console.error('Erro ao remover autor:', error);
      res.status(500).json({ error: "Erro ao remover autor" });
    }
  };

};

export default autorController;