const express = require('express');
const morgan = require('morgan');

require('./utils/mongoConnection');

const usersRouter = require('./routers/users.router');
const songsRouter = require('./routers/songs.router');

const app = express();
const port = 3003;

app.use(morgan('dev'));

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, Cache-Control, X-HTTP-Method-Override, Access-Control-Allow-Origin');
    next();
});

app.get("/", (req,res) => {
    res.send("Bienvenido a Biblioteca de musica API");
});

app.use(express.json({limit: '50mb'}));

app.use('/users', usersRouter);
app.use('/songs', songsRouter);

app.listen(port, () => {
    console.log("Servidor iniciado en http://localhost:"+port);
});