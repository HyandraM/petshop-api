const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const userController = require("./controller/userController");
const enderecoController = require("./controller/enderecoController");
const produtoController = require("./controller/ProdutoController");
const servicoController = require("./controller/ServicoController");
const adestrarController = require("./controller/adestrarController");
const banhotosaController = require("./controller/banhotosaController");
const consultavacinaController = require("./controller/consultavacinaController");

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

//filtro - user
app.get("/user/id", userController.indexUserId);
app.get("/user/email", userController.indexUserEmail);
app.get("/user/telefone", userController.indexUserTelefone);
app.get("/user/nome", userController.indexUserNome);
app.get("/user/nome/telefone", userController.indexUserDuplo);

/*URL = /user/email/?email=Merida@gmail.com*/
/*URL = /user/id/?id=674f49e91d2ffdb0da633937*/
/*URL = /user/telefone?telefone=1234-12311*/
/*URL = /user/nome?name=Merida*/

//rotas para endereco
app.post("/user/endereco", enderecoController.store);
app.get("/user/endereco", enderecoController.show);
app.put("/user/endereco", enderecoController.update);
app.delete("/user/endereco/:id", enderecoController.destroy);

//rota para Agendar Adestramento
app.post("/user/agendar/adestramento", adestrarController.store);
app.get("/user/agendar/adestramento", adestrarController.show);
app.put("/user/agendar/adestramento", adestrarController.update);
app.delete("/user/agendar/adestramento/:id", adestrarController.destroy);

//rota para Agendar Banho/Tosa
app.post("/user/agendar/banhoetosa", banhotosaController.store);
app.get("/user/agendar/banhoetosa", banhotosaController.show);
app.put("/user/agendar/banhoetosa", banhotosaController.update);
app.delete("/user/agendar/banhoetosa/:id", banhotosaController.destroy);

//rota para Agendar Consulta/Vacina
app.post("/user/agendar/consultaevacina", consultavacinaController.store);
app.get("/user/agendar/consultaevacina", consultavacinaController.show);
app.put("/user/agendar/consultaevacina", consultavacinaController.update);
app.delete(
     "/user/agendar/consultaevacina/:id",
     consultavacinaController.destroy,
);

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
