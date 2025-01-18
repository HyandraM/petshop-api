const mongoose = require("mongoose");
const{ Schema } = mongoose;

const ProdutoSchema = new mongoose.Schema({
    nomeProduto: String,
    descricaoProduto: String,
    categoriaProduto: String,
    tipoProduto: String,
    precoVenda: Number,
    custoAquisicao: Number,
    qtdeEstoque : Number
});
const Produto = mongoose.model("Produto", ProdutoSchema);
module.exports = Produto;
