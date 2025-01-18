const CatServico = require('../model/CategoriaServico');

module.exports = {
    // listar todos 
    async show(req, res) {
        let catServico = await CatServico.find();
        return res.json(catServico);
    },
    // adicionar
    async store(req, res) {
        const catServico = await CatServico.create(req.body);
        return res.send(catServico);
    },
    // atualizar
    async update(req, res) {
        let catServico = await CatServico.findByIdAndUpdate(req.params.id, req.body, {new:true}); 
        return res.send(catServico);
    },
    // deletar
    async destroy(req, res) {
        let catServico = await CatServico.findByIdAndDelete(req.params.id);
        return res.send(catServico);
    }
};