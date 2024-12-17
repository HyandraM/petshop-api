const mongoose = require('mongoose');
const Agendar = require('./Agendar');  
const { Schema } = mongoose;

const consultaVacinaSchema = new Schema({
    vacina : Schema.Types.Mixed,
    consulta : Boolean
});

consultaVacinaSchema.add(Agendar.schema.obj);

const ConsultaVacina = mongoose.model('ConsultaVacina',consultaVacinaSchema);
module.exports = ConsultaVacina;