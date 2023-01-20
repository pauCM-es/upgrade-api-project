const express = require('express');
const dotenv = require('dotenv');
dotenv.config()
const cors = require('cors')

//DB CONNECTION
const db = require('./src/utils/db');
db.connectDB();

//ROUTES IMPORT
const indexRoutes = require('./src/api/index/index.routes')
const thingiesRoutes = require('./src/api/thingies/thingy.routes')




const PORT = process.env.PORT || 3100;

const server = express();

server.use(cors());
server.use(express.json());
server.use(express.urlencoded({extended: true}));


//SERVER ROUTES
// server.use('/users', usersRoutes);
// server.use('/prints', printsRoutes);
server.use('/thingies', thingiesRoutes);
server.use('/', indexRoutes);

server.use('*', (req, res, next) => {{
  return res.status(404).json("No se encuentra la URL. Prueba con otra URL")
}})

//ERROR CONTROLLER
server.use((error, req, res, next) => {
  const status = error.status || 500;
  const message = error.message || "Unexpected Error";
  return res.status(status).json(message);
});


server.listen(PORT, () => {
  console.log(`[Server] Conectado en http://localhost:${PORT}`);
});