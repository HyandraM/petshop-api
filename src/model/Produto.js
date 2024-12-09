const mongoose = require("mongoose");

const ProdutoSchema = new mongoose.Schema({
    nomeProduto: String,
    precoProduto: Number,
    descricaoProduto: String,
    categoriaProduto: String,
    tipoProduto: String,
    _idUser: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
});

module.exports = mongoose.model("Produto", ProdutoSchema);