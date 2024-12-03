const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userController = require('./controller/userController');

const app = express();
const port = 3000;
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/user', userController.store);
app.get('/user', userController.show);
app.put('/user/:id', userController.update);
app.delete('/user/:id', userController.destroy);

app.listen(port, () => {
    mongoose.connect('mongodb+srv://Hyandra:123456oi@ifpets.aglme.mongodb.net/?retryWrites=true&w=majority&appName=IfPets');
     console.log('Conectado ao MongoDB e servidor');
});
