const mongoose = require('mongoose');
const{ Schema } = mongoose;

const pedidoSchema = new Schema({
        _idUser: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User", 
            required: true
        },
        _idProduto: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Produto", 
            required: true
        },
        quantidade : Number,
        valorTotal : Number,
        custoTotal : Number,
        lucro : Number, 
    },    
);
const Pedido = mongoose.model('Pedido', pedidoSchema);
module.exports = Pedido;