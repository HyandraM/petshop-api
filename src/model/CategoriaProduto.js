const mongoose = require('mongoose');
const { Schema } = mongoose;

const categoriaProdutoSchema = new Schema({
    tipoProduto : String,
    descricao: String
});

const CategoriaProduto = mongoose.model('CategoriaProduto', categoriaProdutoSchema);
module.exports = CategoriaProduto;