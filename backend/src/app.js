const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const config = require('../config/appConfig.json');
const router = require('./routes');

const app = express();

app.use(cors());

app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use(router);

app.listen(config.port, config.ip, () => {
    console.log(`API Running in http://${config.ip}:${config.port}/`);
});
