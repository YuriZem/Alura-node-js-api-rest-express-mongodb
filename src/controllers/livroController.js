import livro from "../models/Livro.js";

class LivroController {

  static async listarLivros (req, res) {
    const listBooks = await livro.find().exec();
    res.status(200).json(listBooks);
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

};

export default LivroController;