const express = require('express');
const mongoose = require ('mongoose');
const cors = require('cors');
const http = require('http');

const routes = require('./routes');
const { setupWebsocket } = require('./websocket');

const app = express();
const server = http.Server(app);

setupWebsocket(server);

mongoose.connect('mongodb+srv://gustavo:gustavo@cluster0-cvvf5.mongodb.net/week10S?retryWrites=true&w=majority', {
    useNewUrlParser: true ,
    useUnifiedTopology: true
});

app.use(cors())
app.use(express.json());
app.use(routes);

//Métodos HTTP: GET, POST, PUT E DELETE

//Tipos de parâmetros:
//Query Params: req.query (filtros, ordenação, paginação...)
//Route Params: request.params (identificar um recurso na alteração ou remoção)
//Body: request.body (Dados para criação ou alteração de um registro)

//MongoDB (Não-relacional)


server.listen(3333);