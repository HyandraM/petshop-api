const Adress = require('../model/Adress');

module.exports = {
    // listar todos 
    async show(req, res) {
        let adress = await Adress.find();
        return res.json(adress);
    },
    // adicionar
    async store(req, res) {
        const adress = await Adress.create(req.body);
        return res.send(adress);
    },
    // atualizar
    async update(req, res) {
        let adress = await Adress.findByIdAndUpdate(req.params.id, req.body, {new:true}); 
        return res.send(adress);
    },
    // deletar
    async destroy(req, res) {
        let adress = await Adress.findByIdAndDelete(req.params.id);
        return res.send(adress);
    }
};