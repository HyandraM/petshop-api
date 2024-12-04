const mongoose = require('mongoose');
const{ Schema } = mongoose;

const adressSchema = new Schema({
        endereco : String ,
        _idUser: {
            type: mongoose.Schema.Types.ObjectId, 
            required: true
        },
        estado:  String,
        cep : String,
        cidade : String,
        complemento : String, 
    },    
);
const User = mongoose.model('Adress', adressSchema);
module.exports = Adress;

