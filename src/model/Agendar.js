const mongoose = require('mongoose');
const{ Schema } = mongoose;

const agendarSchema = new Schema({
    
        tipoAnimal: String,
        nomePet:  String,
        idadePet : Number,
        raca : String,
        nomeTutor : String, 
        telefone : String,
        data: String,
        hora: String,
        observacao : String
    },    
);
const Agendar = mongoose.model('Agendar', agendarSchema);
module.exports = Agendar;