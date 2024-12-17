const Endereco = require('../model/Endereco');

module.exports = {
    // listar todos 
    async show(req, res) {
        let endereco = await Endereco.find();
        return res.json(endereco);
    },
    // adicionar
    async store(req, res) {
        const endereco = await Endereco.create(req.body);
        return res.send(endereco);
    },
    // atualizar
    async update(req, res) {
        let endereco = await Endereco.findByIdAndUpdate(req.params.id, req.body, {new:true}); 
        return res.send(endereco);
    },
    // deletar
    async destroy(req, res) {
        let endereco = await Endereco.findByIdAndDelete(req.params.id);
        return res.send(endereco);
    }
};