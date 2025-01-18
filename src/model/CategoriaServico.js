const mongoose = require('mongoose');
const { Schema } = mongoose;

const categoriaServicoSchema = new Schema({
    servico : String,
    descricao: String
});

const CategoriaServico = mongoose.model('CategoriaServico', categoriaServicoSchema);
module.exports = CategoriaServico;