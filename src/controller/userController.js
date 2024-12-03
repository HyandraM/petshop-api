const User = require('../model/User');

module.exports = {
    // listar todos 
    async show(req, res) {
        let user = await User.find();
        return res.json(user);
    },
    // adicionar
    async store(req, res) {
        const user = await User.create(req.body);
        return res.send(user);
    },
    // atualizar
    async update(req, res) {
        let user = await User.findByIdAndUpdate(req.params.id, req.body, {new:true}); 
        return res.send(user);
    },
    // deletar
    async destroy(req, res) {
        let user = await User.findByIdAndDelete(req.params.id);
        return res.send(user);
    }
};
