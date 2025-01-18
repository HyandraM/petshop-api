const mongoose = require('mongoose');
const { Schema } = mongoose;

const animalSchema = new Schema({
    animal : String,
    descricao: String
});

const Animal = mongoose.model('Animal', animalSchema);
module.exports = Animal;