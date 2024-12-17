const mongoose = require("mongoose");
const ConsultaVacina = require("../model/ConsultaVacina");

module.exports = {
    /* CRUD - Agendamento */
    async show(req, res) {
        let agendar = await ConsultaVacina.find();
        return res.json(agendar);
    },

    async store(req, res) {
        let agendar= await ConsultaVacina.create(req.body);
        return res.json(agendar);
    },

    async destroy(req, res) {
        let agendar = await ConsultaVacina.findByIdAndDelete(req.params.id);
        return res.json(agendar);
    },

    async update(req, res) {
        let agendar = await ConsultaVacina.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        return res.json(agendar);
    },
};
