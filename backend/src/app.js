//Imports the functionalities of the express
const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const { errors } = require('celebrate');

//This creates the app
const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

module.exports = app;

//The door used to access my app
// app.listen(3333);
