const Favorito = require('../model/Favorito');

module.exports = {
    // listar todos 
    async show(req, res) {
        let favorito = await Favorito.find();
        return res.json(favorito);
    },
};