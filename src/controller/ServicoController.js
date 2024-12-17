const mongoose = require('mongoose');
const Servico = require('../model/Servico');

module.exports = {

    /* CRUD - Serviços */
    async showServico(req, res){
        let servico = await Servico.find();
        return res.json(servico);
    },

    async storeServico(req, res){
        let servico = await Servico.create(req.body);
        return res.json(servico);
    },

    async destroyServico(req,res){
        let servico = await Servico.findByIdAndDelete(req.params.id);
        return res.json(servico);
    },

    async updateServico(req,res){
        let servico = await Servico.findByIdAndUpdate(req.params.id, req.body, {new: true});
        return res.json(servico);
    },

    /* Filtro */
    async indexServico(req, res){
        let servico = await Servico.find(
        {categoriaServico: req.query.categoriaServico})
        return res.json(servico);
    },

    /* Filtro Duplo */
    async indexServicoDuplo(req, res){
        let servico = await Servico.find({
            tipoServico: req.query.tipoServico,
            categoriaServico: req.query.categoriaServico
        });
        return res.json(servico);
    }

};