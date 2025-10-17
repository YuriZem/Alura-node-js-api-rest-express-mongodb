import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  id: {type: mongoose.Schema.Types.ObjectId,},
  titulo: {type: String, required: true,},
  editora: {type: String,},    
  n_paginas:{type: Number,},
  preco: {type: Number,}
},{versionKey: false});

const book = mongoose.model("books", bookSchema);

export default book;