const CatProduto = require('../model/categoriaProduto');
console.log("CatProduto module loaded successfully.");

module.exports = {
    // listar todos 
    async show(req, res) {
        let catProduto = await CatProduto.find();
        return res.json(catProduto);
    },
    // adicionar
    async store(req, res) {
        const catProduto = await CatProduto.create(req.body);
        return res.send(catProduto);
    },
    // atualizar
    async update(req, res) {
        let catProduto = await CatProduto.findByIdAndUpdate(req.params.id, req.body, {new:true}); 
        return res.send(catProduto);
    },
    // deletar
    async destroy(req, res) {
        let catProduto = await CatProduto.findByIdAndDelete(req.params.id);
        return res.send(catProduto);
    }
};
console.log("ProdutoController started successfully.");