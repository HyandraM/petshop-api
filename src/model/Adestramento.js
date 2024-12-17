const mongoose = require('mongoose');
const Agendar = require('./Agendar');
const { Schema } = mongoose; 

const adestramentoSchema = new Schema({
    nivelExperiencia: {
        type: String,
        enum : ['iniciante', 'intermediário', 'avançado'],
        required: true
    },
    tipoTreinamento: String
});

adestramentoSchema.add(Agendar.schema.obj);

const Adestramento = mongoose.model('Adestramento', adestramentoSchema);
module.exports = Adestramento;
