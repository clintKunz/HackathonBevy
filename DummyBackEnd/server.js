const server = express();
server.use(express.json());
const db = require('./database/dbConfig.js');

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
