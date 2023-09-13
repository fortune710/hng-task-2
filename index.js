
const express = require('express');
const MainRouter = require('./routes');

const bodyParser = require('body-parser')
const server = express();

server.use(bodyParser.json())
server.use('/api', MainRouter)




server.listen(3000);