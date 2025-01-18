const mongoose = require('mongoose');
const { Schema } = mongoose;

const finalizarCompraSchema = new Schema({
    _idEndereco: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Endereco", 
                required: true
            },
    formaPagamento : String,
    entregaPadrao : Boolean,
    entregaExpressa : Boolean
});

const FinalizarCompra = mongoose.model('FinalizarCompra', finalizarCompraSchema);
module.exports = FinalizarCompra;