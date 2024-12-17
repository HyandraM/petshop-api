const mongoose = require("mongoose");

const ProdutoSchema = new mongoose.Schema({
    nomeProduto: String,
    descricaoProduto: String,
    categoriaProduto: String,
    tipoProduto: String,
    precoVenda: Number,
    custoAquisicao: Number,
    qtdeEstoque : Number
});

module.exports = mongoose.model("Produto", ProdutoSchema);