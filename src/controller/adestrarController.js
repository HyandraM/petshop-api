const mongoose = require("mongoose");
const Adestramento = require("../model/Adestramento");

module.exports = {
    /* CRUD - Agendamento */
    async show(req, res) {
        let agendar = await Adestramento.find();
        return res.json(agendar);
    },

    async store(req, res) {
        let agendar= await Adestramento.create(req.body);
        return res.json(agendar);
    },

    async destroy(req, res) {
        let agendar = await Adestramento.findByIdAndDelete(req.params.id);
        return res.json(agendar);
    },

    async update(req, res) {
        let agendar = await Adestramento.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        return res.json(agendar);
    },
};
