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
    },

    /* Lista Filtros */
    async indexUserId(req, res) {
        let user = await User.find({
        _id : req.query.id,
        });
        return res.json(user);
    },

    async indexUserEmail(req, res) {
        let user = await User.find({
            email : req.query.email,
        });
        return res.json(user);
    },

    async indexUserTelefone(req, res) {
        let user = await User.find({
            telefone : req.query.telefone,
        });
        return res.json(user);
    },

    async indexUserNome(req, res) {
        let user = await User.find({
            name : req.query.name,
        });
        return res.json(user);
    },

     /* Filtro Duplo */
        async indexUserDuplo(req, res){
            let user = await User.find({
                nome: req.query.nome,
                telefone: req.query.telefone
            });
            return res.json(user);
        }
};
