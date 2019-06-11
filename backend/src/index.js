// importa o express
const express = require('express');

// importar o mongose
const mongoose = require('mongoose');

// inicia a aplicação
const app = express();

// conexão com o mongo
mongoose.connect('mongodb+srv://fabmelo:@o2i5x4c9b@@cluster0-f6jhz.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
});

// define o caminhos para usar as rotas
app.use(require('./routes'));

// define a porta
app.listen(3333);
