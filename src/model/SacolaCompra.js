  const mongoose = require('mongoose');
  const { Schema } = mongoose;
  
  const sacolaCompraSchema = new Schema({
      _idProduto: {
                  type: mongoose.Schema.Types.ObjectId,
                  ref: "Produto", 
                  required: true
              },
      nome: String,    
  });
  
  const SacolaCompra = mongoose.model('SacolaCompra', sacolaCompraSchema);
  module.exports = SacolaCompra;