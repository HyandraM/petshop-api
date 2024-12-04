const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userController = require('./controller/userController');
const adressController = require('./controller/adressController');

const app = express();
const port = 3000;
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//rotas para User
app.post('/user', userController.store);
app.get('/user', userController.show);
app.put('/user/:id', userController.update);
app.delete('/user/:id', userController.destroy);

//rotas para Adress
app.post('/user/adress', adressController.store);
app.get('/user/adress', adressController.show);
app.put('/user/adress', adressController.update);
app.delete('/user/adress/:id', adressController.destroy);

app.listen(port, () => {
    mongoose.connect('mongodb+srv://Hyandra:123456oi@ifpets.aglme.mongodb.net/?retryWrites=true&w=majority&appName=IfPets');
     console.log('Conectado ao MongoDB e servidor');
});
