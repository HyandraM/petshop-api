const mongoose = require('mongoose');
const Agendar = require('./Agendar');  
const { Schema } = mongoose;

const banhoTosaSchema = new Schema({
    
       servico: String
        
     });

banhoTosaSchema.add(Agendar.schema.obj);

const BanhoTosa = mongoose.model('BanhoTosa', banhoTosaSchema);
module.exports = BanhoTosa;