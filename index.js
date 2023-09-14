
const express = require('express');
const MainRouter = require('./routes');

const bodyParser = require('body-parser')
const server = express();

server.use(bodyParser.json());
server.use('/api', MainRouter);

server.get('/', (req, res) => {
    return res.json({ 
        message: "Move to the /api route for all the endpoints"
    })
})




server.listen(process.env.PORT || 3000);