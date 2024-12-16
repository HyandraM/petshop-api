const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const userController = require("./controller/userController");
const adressController = require("./controller/adressController");
const produtoController = require("./controller/ProdutoController");
const servicoController = require("./controller/ServicoController");

const app = express();
const port = 3000;
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//rotas para User
app.post("/user", userController.store);
app.get("/user", userController.show);
app.put("/user/:id", userController.update);
app.delete("/user/:id", userController.destroy);

//rotas para Adress
app.post("/user/adress", adressController.store);
app.get("/user/adress", adressController.show);
app.put("/user/adress", adressController.update);
app.delete("/user/adress/:id", adressController.destroy);

/* ----------- Produtos -----------*/
/* Cadastro de Produtos */
app.post("/produto", produtoController.storeProduto);
app.get("/produto", produtoController.showProduto);
app.delete("/produto/:id", produtoController.destroyProduto);
app.put("/produto/:id", produtoController.updateProduto);

// Filtro Simples - Produtos
/* URL = /produto/buscarproduto/?tipoProduto=cachorro*/
/* URL = /produto/buscarproduto/?tipoProduto=gato*/
app.get("/produto/buscarproduto", produtoController.indexProduto);

// Filtro Duplo - Produtos
/* URL = /produto/buscarproduto-duplo?tipoProduto=cachorro&categoriaProduto=higiene*/
/* URL = /produto/buscarproduto-duplo?tipoProduto=cachorro&categoriaProduto=racao*/
/* URL = /produto/buscarproduto-duplo?tipoProduto=cachorro&categoriaProduto=acessorios*/
/* URL = /produto/buscarproduto-duplo?tipoProduto=cachorro&categoriaProduto=medicamentos*/
/* URL = /produto/buscarproduto-duplo?tipoProduto=gato&categoriaProduto=higiene*/
/* URL = /produto/buscarproduto-duplo?tipoProduto=gato&categoriaProduto=racao*/
/* URL = /produto/buscarproduto-duplo?tipoProduto=gato&categoriaProduto=acessorios*/
/* URL = /produto/buscarproduto-duplo?tipoProduto=gato&categoriaProduto=medicamentos*/
app.get("/produto/buscarproduto-duplo", produtoController.indexProdutoDuplo);

/* ----------- Servicos -----------*/
/* Cadastro de Serviços */
app.post("/servico", servicoController.storeServico);
app.get("/servico", servicoController.showServico);
app.delete("/servico/:id", servicoController.destroyServico);
app.put("/servico/:id", servicoController.updateServico);

// Filtro - Serviços
/* URL = /servico/buscarservico/?categoriaServico=vacinacao*/
/* URL = /servico/buscarservico/?categoriaServico=banho_tosa*/
/* URL = /servico/buscarservico/?categoriaServico=adestramento*/
app.get("/servico/buscarservico/", servicoController.indexServico);

// Filtro Duplo - Serviços
/* URL = /servico/buscarservico-duplo?categoriaServico=vacinacao&?tipoServico=cachorro*/
/* URL = /servico/buscarservico-duplo?categoriaServico=banho_tosa&?tipoServico=cachorro*/
/* URL = /servico/buscarservico-duplo?categoriaServico=adestramento&?tipoServico=cachorro*/
/* URL = /servico/buscarservico-duplo?categoriaServico=vacinacao&?tipoServico=gato*/
/* URL = /servico/buscarservico-duplo?categoriaServico=banho_tosa&?tipoServico=gato*/
/* URL = /servico/buscarservico-duplo?categoriaServico=adestramento&?tipoServico=gato*/
app.get("/servico/buscarservico-duplo", servicoController.indexServicoDuplo);

/* Apresentação */
app.get("/", (req, res) => {
     res.send("Apresentacao Loja");
});


app.listen(port, () => {
     mongoose.connect(
          "mongodb+srv://Hyandra:123456oi@ifpets.aglme.mongodb.net/?retryWrites=true&w=majority&appName=IfPets",
     );
     console.log("Conectado ao MongoDB e servidor");
});
