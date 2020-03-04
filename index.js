'use strict'

const app = require('./app');
const config = require('./config/config');

/*
  const cors = require ('cors');

- app.use(cors({     origin: 'http://localhost:4200',     credentials: true }));
*/
var server = app.listen(config.PORT, () => {
    console.log(`base de datos corriendo en http://localhost:${config.PORT}`);
});

server.timeout = 600000;

