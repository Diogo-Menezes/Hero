//Imports the functionalities of the express
const express = require('express');
const routes = require('./routes');
const cors = require('cors');

//This creates the app
const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);

//The door used to access my app
app.listen(3333);
