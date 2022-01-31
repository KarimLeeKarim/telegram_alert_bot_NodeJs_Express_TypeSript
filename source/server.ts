import http from 'http';
import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import logging from './config/logging';
import config from './config/config';
import { alertRouter } from './routes/alerRouter';

const NAMESPACE = 'Server';
const router = express();

/** Logging the request **/
router.use((req: Request, res: Response, next) => {
    logging.info(
        NAMESPACE,
        `METHOD - [${req.method}], URL - [${req.url}], IP - 
    [${req.socket.remoteAddress}]`
    );

    res.on('finish', () => {
        logging.info(
            NAMESPACE,
            `METHOD - [${req.method}], URL - [${req.url}], IP - 
        [${req.socket.remoteAddress}], STATUS - [${res.statusCode}]`
        );
    });
    next();
});

/** Parse the request **/
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

/** Routers **/
router.use('/alert-service/v1', alertRouter);

/** Error Handling **/
router.use((req: Request, res: Response, next) => {
    const error = new Error('not found');
    console.log(req.body);

    return res.status(404).json({
        message: error.message
    });
});

/** Create server **/
const httpServer = http.createServer(router);

httpServer.listen(config.server.port, () =>
    logging.info(
        NAMESPACE,
        `Server is running on 
${config.server.hostname}:${config.server.port}`
    )
);
