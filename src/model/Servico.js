const mongoose = require("mongoose");

const ServicoSchema = new mongoose.Schema({
    precoServico: Number,
    tipoServico: String,
    descricaoServico: String,
    categoriaServico: String,
    dataServico: Date,
    horaServico: String,
    _idUser: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
});

module.exports = mongoose.model("Servico", ServicoSchema);