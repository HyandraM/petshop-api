const mongoose = require('mongoose');
const{ Schema } = mongoose;

const enderecoSchema = new Schema({
        endereco : String ,
        _idUser: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User", 
            required: true
        },
        estado:  String,
        cep : String,
        bairro : String,
        cidade : String,
        complemento : String, 
    },    
);
const Endereco = mongoose.model('Endereco', enderecoSchema);
module.exports = Endereco;



