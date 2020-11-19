const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
var projectController = require('./controller/projectcontroller.js');
var siteController = require('./controller/sitecontroller.js');
const { mongoose } = require('./database.js');

var app = express();
app.use(bodyParser.json());
//app.use(app.router);
app.use(cors({ origin: 'http://localhost:4200' }));

app.listen(3000, () => console.log('Server started at port : 3000'));

app.use('/ProjectDetails', projectController);
app.use('/SiteDetails', siteController);

