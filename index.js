const express = require('express');
const server = express();
const PORT = 4000;
server.use(express.json());

server.post('/crayons', (req, res) => {

});

server.get('/crayons', (req, res) => {

});

server.get('/crayons/:id', (req, res) => {

});

server.put('/crayons/:id', (req, res) => {

});

server.delete('/crayons/:id', (req, res) => {

});

server.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`)
})