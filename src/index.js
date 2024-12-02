const express = require('express')
const mongoose = require('mongoose');

const app = express()
app.use(express.json())
const port = 3000

//cadastro de usuários
const User = mongoose.model('User', { 
    name: String,
    email: String,
    telefone : String,
    cpf : String,
    senha : String
});

app.get('/user', async(req, res) => {
    const user = await User.find()
    return res.send(user)
})

app.post('/user', async(req, res) => {
    const user = new User({
        name : req.body.name,
        email : req.body.email,
        telefone : req.body.telefone,
        cpf : req.body.cpf,
        senha : req.body.senha
    })
    await user.save()
    return res.send(user)
})

app.put("/user/:id", async(req, res) => {
    const user = await User.findByIdAndUpdate(req.params.id, {
        name : req.body.name,
        email : req.body.email,
        telefone : req.body.telefone,
        cpf : req.body.cpf,
        senha : req.body.senha
    }, {
        new : true
    })
    return res.send(user)
})

app.delete("/user/:id", async(req, res) => {
    const user = await User.findByIdAndDelete(req.params.id)
    return res.send(user)
})

app.listen(port, () => {
    mongoose.connect('mongodb+srv://Hyandra:123456oi@ifpets.aglme.mongodb.net/?retryWrites=true&w=majority&appName=IfPets');
    console.log('petshop-api rodando...')
})
