const Catalogo = require('../model/Catalogo');
const Favoritos = require('../model/Favorito');
const SacolaCompras = require('../model/SacolaCompra');

module.exports = {
    // listar todos 
    async show(req, res) {
        try {
            const { search } = req.query; // Captura o parâmetro de busca
    
            let produtos;
            if (search) {
                produtos = await Catalogo.find({
                    nome: { $regex: search, $options: 'i' }, // Filtra pelo nome do produto, ignorando maiúsculas/minúsculas
                });
            } else {
                produtos = await Catalogo.find(); // Se não houver busca, retorna todos os produtos
            }
    
            return res.json(produtos);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Erro ao buscar produtos' });
        }
    },    

    // adicionar 
    async store(req, res) {
        const produto = await Catalogo.create(req.body);

        if (produto.favorito) {
            await Favoritos.create({ _idProduto: produto._id, nome: produto.nome });
        }
        if (produto.addCarrinho) {
            await SacolaCompras.create({ _idProduto: produto._id, nome: produto.nome });
        }

        return res.json(produto);
    },

    async update(req, res) {
        try {
            const produtoAtualizado = await Catalogo.findByIdAndUpdate(req.params.id, req.body, { new: true });
    
            if (!produtoAtualizado) {
                return res.status(404).json({ message: 'Catálogo não encontrado' });
            }
            if (produtoAtualizado.favorito) {
                const favoritoExistente = await Favoritos.findOne({ _idProduto: produtoAtualizado._id });
                
                if (!favoritoExistente) {
                    await Favoritos.create({ _idProduto: produtoAtualizado._id, nome: produtoAtualizado.nome });
                }
            } else {
                await Favoritos.findOneAndDelete({ _idProduto: produtoAtualizado._id });
            }
    
            if (produtoAtualizado.addCarrinho) {
                const sacolaExistente = await SacolaCompras.findOne({ _idProduto: produtoAtualizado._id });
    
                if (!sacolaExistente) {
                    await SacolaCompras.create({ _idProduto: produtoAtualizado._id, nome: produtoAtualizado.nome });
                }
            } else {
                await SacolaCompras.findOneAndDelete({ _idProduto: produtoAtualizado._id });
            }
    
            return res.json(produtoAtualizado);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Erro ao atualizar o catálogo', error });
        }
    },

    // Deletar um produto do catalogo e remover de favorito e carrinho de compras
async destroy(req, res) {
    try {
        const produtoDeletado = await Catalogo.findByIdAndDelete(req.params.id);

        if (!produtoDeletado) {
            return res.status(404).json({ message: 'Catálogo não encontrado' });
        }

        // Atualizar na lista de Favoritos e Sacola de Compras
        await Favoritos.findOneAndDelete({ _idProduto: produtoDeletado._id });
        await SacolaCompras.findOneAndDelete({ _idProduto: produtoDeletado._id });

        return res.json({
            message: `Catálogo ${produtoDeletado.nome} removido com sucesso`,
        });
    } catch (error) {
        console.error(error); 
        return res.status(500).json({ message: 'Erro ao excluir o catálogo', error });
    }
}};
