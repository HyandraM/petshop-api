  const mongoose = require('mongoose');
  const { Schema } = mongoose;
  
  const favoritoSchema = new Schema({
      _idProduto: {
                  type: mongoose.Schema.Types.ObjectId,
                  ref: "Produto", 
                  required: true
              },
      nome: String,    
  });
  
  const Favorito = mongoose.model('Favorito', favoritoSchema);
  module.exports = Favorito;