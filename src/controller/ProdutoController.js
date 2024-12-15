const mongoose = require("mongoose");
const Produto = require("../model/Produto");

module.exports = {
    /* CRUD - Produtos */
    async showProduto(req, res) {
        let produto = await Produto.find();
        return res.json(produto);
    },

    async storeProduto(req, res) {
        let produto = await Produto.create(req.body);
        return res.json(produto);
    },

    async destroyProduto(req, res) {
        let produto = await Produto.findByIdAndDelete(req.params.id);
        return res.json(produto);
    },

    async updateProduto(req, res) {
        let produto = await Produto.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        return res.json(produto);
    },

    /* Lista Filtros */
    async indexProduto(req, res) {
        let produto = await Produto.find({
            tipoProduto: req.query.tipoProduto,
        });
        return res.json(produto);
    },

    async indexProdutoDuplo(req, res) {
        let produto = await Produto.find({
            tipoProduto: req.query.tipoProduto,
            categoriaProduto: req.query.categoriaProduto,
        });
        return res.json(produto);
    },
    
};
