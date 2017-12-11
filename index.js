'use strict';
const express = require('express');
require('./services/passport'); //Don't need Const because I am not reusing it

const app = express();

//exporting a function so only need to call it with "app" to use the routes
require('./routes/authRoutes') (app); 


const PORT = process.env.PORT || 5000;
app.listen(PORT);


