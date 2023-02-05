'use strict'

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

// Importação rotas
const index = require('./routes/index');

const app = express();
const PORT = 3000;

// Config template engine
app.set('view engine', 'ejs');

// Config views
app.set('views', path.join(__dirname, 'views'));

// Config public
app.use(express.static(path.join(__dirname, 'public')));

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(index);

app.listen(PORT, () => {
   console.log(`Servidor online na porta ${PORT}`); 
});