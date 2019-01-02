const server = express();
server.use(express.json());

server.get('/', (req,res) => {
    res.status(200).json({Server : "Running Properly"})
})

server.get('/api/user/:id', (req,res) => {
    const ID = req.params;
    
})
