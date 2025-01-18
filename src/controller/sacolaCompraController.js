const Sacola = require('../model/SacolaCompra');

module.exports = {
    // listar todos 
    async show(req, res) {
        let sacola = await Sacola.find();
        return res.json(sacola);
    },
};