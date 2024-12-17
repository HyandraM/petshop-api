const mongoose = require('mongoose');
const{ Schema } = mongoose;

const agendarSchema = new Schema({
        tipoAnimal: {
            type : String,
            enum : ['gato', 'cachorro'],
            required : true
        },
        nomePet:  String,
        idadePet : Number,
        raça : String,
        nomeTutor : String, 
        telefone : String,
        data: Date,
        hora: String,
        observacao : String
    },    
);
const Agendar = mongoose.model('Agendar', agendarSchema);
module.exports = Agendar;