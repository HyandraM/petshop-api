const Animal = require('../model/CategoriaAnimal');

module.exports = {
    // listar todos 
    async show(req, res) {
        let animal = await Animal.find();
        return res.json(animal);
    },
    // adicionar
    async store(req, res) {
        const animal = await Animal.create(req.body);
        return res.send(animal);
    },
    // atualizar
    async update(req, res) {
        let animal = await Animal.findByIdAndUpdate(req.params.id, req.body, {new:true}); 
        return res.send(animal);
    },
    // deletar
    async destroy(req, res) {
        let animal = await Animal.findByIdAndDelete(req.params.id);
        return res.send(animal);
    }
};