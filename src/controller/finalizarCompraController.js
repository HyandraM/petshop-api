const FinalizarCompra = require('../model/FinalizarCompra');

module.exports = {
    // listar todos 
    async show(req, res) {
        let compra = await FinalizarCompra.find();
        return res.json(compra);
    },
    // adicionar
    async store(req, res) {
        const compra = await FinalizarCompra.create(req.body);
        return res.send(compra);
    },
    // atualizar
    async update(req, res) {
        let compra = await FinalizarCompra.findByIdAndUpdate(req.params.id, req.body, {new:true}); 
        return res.send(compra);
    },
    // deletar
    async destroy(req, res) {
        let compra = await FinalizarCompra.findByIdAndDelete(req.params.id);
        return res.send(compra);
    }
};