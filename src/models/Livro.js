import mongoose from "mongoose";

const livroSchema = new mongoose.Schema({
  id: {type: mongoose.Schema.Types.ObjectId,},
  titulo: {type: String},
  titulo: {type: String, required: true,},
  editora: {type: String,},    
  n_paginas:{type: Number,},
  preco: {type: Number,}
},{
  versionKey: false,
  collation: 'livros'
});

const Livro = mongoose.model("livros", livroSchema);

export default Livro;