// importa o express
const express = require('express');

// instância das rotas
const routes = new express.Router();

// define o middleware
routes.get('/', (req, res) => {
    return res.send('Hello Big World!');
});

// exporta mo módulo
module.exports = routes;