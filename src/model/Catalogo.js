const mongoose = require('mongoose');
const { Schema } = mongoose;

const catalogoSchema = new Schema({
    _idProduto: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Produto", 
                required: true
            },
    nome: String,
    valor : Number,
    descricao : String,
    imagem : String,
    favorito : Boolean,
    addCarrinho : Boolean
    
});

const Catalogo = mongoose.model('Catalogo', catalogoSchema);
module.exports = Catalogo;