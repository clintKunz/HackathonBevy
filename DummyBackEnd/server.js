const express = require('express');
const db = require('./database/dbConfig.js');
const cors = require('cors');
const server = express();
server.use(express.json());
server.use(cors())


server.get('/', (req,res) => {
    res.status(200).json({Server : "Running Properly"});
})

server.get('/api/user/:id', (req,res) => {
    const ID = req.params;
    db('users')
    .where(ID)
    .first()
    .then(user => {
        res.status(200).send(user)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

server.get('/api/solicits/borrows',(req,res) => {
    db('borrows')
    .then(borrows => {
        if(borrows.length){//checks if object has anything in it
            res.status(200).json(borrows)
        }else{
            res.status(500).send("borrows object is empty")
        }
    })
    .catch(err => {res.send(err)})
})
server.get('/api/solicits/lends',(req,res) => {
    db('lends')
    .then(lends => {
        if(lends.length){
            res.status(200).json(lends)
        }else{
            res.status(500).send("lends object is empty")
        }
    })
    .catch(err => {res.send(err)})
})

module.exports = {
    server,
};
