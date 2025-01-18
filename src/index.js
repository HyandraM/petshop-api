const express = require("express");
const mongoose = require("mongoose");
const userController = require("./controller/userController");
const enderecoController = require("./controller/EnderecoController");
const produtoController = require("./controller/ProdutoController");
const servicoController = require("./controller/ServicoController");
const adestrarController = require("./controller/adestrarController");
const banhotosaController = require("./controller/banhotosaController");
const consultavacinaController = require("./controller/consultavacinaController");
const catAnimalController = require("./controller/catAnimalController");
const catProdutoController = require("./controller/catProdutoController");
const catServicoController = require("./controller/catServicoController");
const pedidoController = require("./controller/PedidosController");
const finalizarCompraController = require("./controller/finalizarCompraController");
const catalogoController = require("./controller/catalogoController");
const sacolaCompraController = require("./controller/sacolaCompraController");
const favoritoController = require("./controller/favoritoController");

const app = express();
const port = 3000;
app.use(express.json());

//Rotas para finalizar compra 
app.post("/compra/finalizar", finalizarCompraController.store);
app.get("/compra/finalizar", finalizarCompraController.show);
app.put("/compra/finalizar/:id", finalizarCompraController.update);
app.delete("/compra/finalizar/:id", finalizarCompraController.destroy);

// Rotas para categoria de animais 
app.post("/categoriaAnimal", catAnimalController.store);
app.get("/categoriaAnimal", catAnimalController.show);
app.put("/categoriaAnimal/:id", catAnimalController.update);
app.delete("/categoriaAnimal/:id", catAnimalController.destroy);

//Rotas para categoria de produtos
app.post("/categoriaProduto", catProdutoController.store);
app.get("/categoriaProduto", catProdutoController.show);
app.put("/categoriaProduto/:id", catProdutoController.update);
app.delete("/categoriaProduto/:id", catProdutoController.destroy);

//Rotas para categoria de serviços
app.post("/categoriaServico", catServicoController.store);
app.get("/categoriaServico", catServicoController.show);
app.put("/categoriaServico/:id", catServicoController.update);
app.delete("/categoriaServico/:id", catServicoController.destroy);

//Rotas para pedidos
app.post("/pedidos", pedidoController.store);
app.get("/pedidos", pedidoController.show);
app.put("/pedidos/:id", pedidoController.update);
app.delete("/pedidos/:id", pedidoController.destroy);

//Rotas para usuários
app.post("/user", userController.store);
app.get("/user", userController.show);
app.put("/user/:id", userController.update);
app.delete("/user/:id", userController.destroy);

//Filtros para usuário
app.get("/user/id", userController.indexUserId);
app.get("/user/email", userController.indexUserEmail);
app.get("/user/telefone", userController.indexUserTelefone);
app.get("/user/nome", userController.indexUserNome);
app.get("/user/nome/telefone", userController.indexUserDuplo);

/*URL = /user/email/?email=Merida@gmail.com
  URL = /user/id/?id=674f49e91d2ffdb0da633937
  URL = /user/telefone?telefone=1234-12311 
  URL = /user/nome?name=Merida */

//Rotas para endereços
app.post("/user/endereco", enderecoController.store);
app.get("/user/endereco", enderecoController.show);
app.put("/user/endereco/:id", enderecoController.update);
app.delete("/user/endereco/:id", enderecoController.destroy);

//Rotas para agendar adestramento
app.post("/user/agendar/adestramento", adestrarController.store);
app.get("/user/agendar/adestramento", adestrarController.show);
app.put("/user/agendar/adestramento/:id", adestrarController.update);
app.delete("/user/agendar/adestramento/:id", adestrarController.destroy);

//Rotas para agendar banho e tosa
app.post("/user/agendar/banhoetosa", banhotosaController.store);
app.get("/user/agendar/banhoetosa", banhotosaController.show);
app.put("/user/agendar/banhoetosa/:id", banhotosaController.update);
app.delete("/user/agendar/banhoetosa/:id", banhotosaController.destroy);

//Rotas para agendar consulta e vacina
app.post("/user/agendar/consultaevacina", consultavacinaController.store);
app.get("/user/agendar/consultaevacina", consultavacinaController.show);
app.put("/user/agendar/consultaevacina/:id", consultavacinaController.update);
app.delete("/user/agendar/consultaevacina/:id", consultavacinaController.destroy);

//Cadastro de produtos
app.post("/produto", produtoController.storeProduto);
app.get("/produto", produtoController.showProduto);
app.delete("/produto/:id", produtoController.destroyProduto);
app.put("/produto/:id", produtoController.updateProduto);

//Filtros de produtos
app.get("/produto/buscarproduto", produtoController.indexProduto);
app.get("/produto/buscarproduto-duplo", produtoController.indexProdutoDuplo);

// Filtro Simples - Produtos
/* URL = /produto/buscarproduto/?tipoProduto=cachorro*/
/* URL = /produto/buscarproduto/?tipoProduto=gato*/

// Filtro Duplo - Produtos
/* URL = /produto/buscarproduto-duplo?tipoProduto=cachorro&categoriaProduto=higiene*/
/* URL = /produto/buscarproduto-duplo?tipoProduto=cachorro&categoriaProduto=racao*/
/* URL = /produto/buscarproduto-duplo?tipoProduto=cachorro&categoriaProduto=acessorios*/
/* URL = /produto/buscarproduto-duplo?tipoProduto=cachorro&categoriaProduto=medicamentos*/
/* URL = /produto/buscarproduto-duplo?tipoProduto=gato&categoriaProduto=higiene*/
/* URL = /produto/buscarproduto-duplo?tipoProduto=gato&categoriaProduto=racao*/
/* URL = /produto/buscarproduto-duplo?tipoProduto=gato&categoriaProduto=acessorios*/
/* URL = /produto/buscarproduto-duplo?tipoProduto=gato&categoriaProduto=medicamentos*/

//Cadastro de serviços
app.post("/servico", servicoController.storeServico);
app.get("/servico", servicoController.showServico);
app.delete("/servico/:id", servicoController.destroyServico);
app.put("/servico/:id", servicoController.updateServico);

//Filtros de serviços
app.get("/servico/buscarservico/", servicoController.indexServico);
app.get("/servico/buscarservico-duplo", servicoController.indexServicoDuplo);

// Filtro - Serviços
/* URL = /servico/buscarservico/?categoriaServico=vacinacao*/
/* URL = /servico/buscarservico/?categoriaServico=banho_tosa*/
/* URL = /servico/buscarservico/?categoriaServico=adestramento*/

//Página de apresentação
app.get("/", (req, res) => {
    res.send("Apresentacao Loja");
});

//rotas para catálogo
app.post("/catalogo", catalogoController.store);
app.get("/catalogo", catalogoController.show);
app.delete("/catalogo/:id", catalogoController.destroy);
app.put("/catalogo/:id", catalogoController.update);

//rota para favorito
app.get("/favoritos", favoritoController.show);

//rota para sacola de compras
app.get("/compra/sacola", sacolaCompraController.show);

// Adestramento
app.get("/servico/adestramento", (req, res) => {
     res.send("informações sobre sobre o serviço de adestramento");
 });

// Banho e tosa
 app.get("/servico/banhoetosa", (req, res) => {
     res.send("informações sobre sobre o serviço de banho e tosa");
 });

// Consulta e vacinação
 app.get("/servico/consultaevacina", (req, res) => {
     res.send("informações sobre sobre o serviço de consulta e vacinação");
 });

app.listen(port, () => {
     mongoose.connect(
          "mongodb+srv://Hyandra:123456oi@ifpets.aglme.mongodb.net/?retryWrites=true&w=majority&appName=IfPets",
     );
     console.log("Conectado ao MongoDB e servidor");
});
