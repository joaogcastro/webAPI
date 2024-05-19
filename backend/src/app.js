import bodyParser from 'body-parser';
import cors from 'cors';
// eslint-disable-next-line
import config from '../config/appConfig.json' assert { type: "json" };
import express from 'express';
import { routes } from "./routes.js";

const app = express();

app.use(cors());

app.use(express.json());

app.use (bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json())

app.use(routes);

app.listen(config.port, config.ip, () => {
    console.log(`API Running in http://${config.ip}:${config.port}/`);
});
