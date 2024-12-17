const mongoose = require("mongoose");
const BanhoTosa = require("../model/BanhoTosa");

module.exports = {
    /* CRUD - Agendamento */
    async show(req, res) {
        let agendar = await BanhoTosa.find();
        return res.json(agendar);
    },

    async store(req, res) {
        let agendar= await BanhoTosa.create(req.body);
        return res.json(agendar);
    },

    async destroy(req, res) {
        let agendar = await BanhoTosa.findByIdAndDelete(req.params.id);
        return res.json(agendar);
    },

    async update(req, res) {
        let agendar = await BanhoTosa.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        return res.json(agendar);
    },
};
