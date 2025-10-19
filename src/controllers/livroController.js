import livro from "../models/Livro.js";

class LivroController {

  static async listarLivros (req, res) {
    try{
      const listBooks = await livro.find().exec();
      res.status(200).json(listBooks);
    }catch(err){
      console.error('Erro ao listar livros:', err);
      res.status(500).json({ error: "Erro ao listar livros" });
    }
  }

  static async add_book (req, res){
    try{
      const newBook = await livro.create(req.body);
      res.status(201).json(newBook);
    }catch(err){
      console.error('Erro ao adicionar livro:', err);
      res.status(500).json({ error: "Erro ao adicionar livro" });
    }
  }

  static async updateBook (req, res){
    try {
      const id = req.params.id;
      await livro.findByIdAndUpdate(id,req.body);
      res.status(200).json({message: "Livro atualizado com sucesso"});
    } catch (error) {
     console.error('Erro ao atualizar livro:', error);
     res.status(500).json({ error: "Erro ao atualizar livro" }); 
    }
  };

  static async findBookForId (req, res){
    try {
      const id = req.params.id;
      const bookfound = await livro.findById(id).exec();
      res.status(200).json(bookfound);
    } catch (error) {
      console.error('Erro ao buscar livro por ID:', error);
      res.status(500).json({ error: "Erro ao buscar livro por ID" });
    }
  };

  static async removeBook (req, res){
    try {
      const id = req.params.id;
      await livro.findByIdAndDelete(id);
      res.status(200).json({message: "Livro removido com sucesso"});
    } catch (error) {
      console.error('Erro ao remover livro:', error);
      res.status(500).json({ error: "Erro ao remover livro" });
    }
  };

};

export default LivroController;