import dotenv from 'dotenv';
dotenv.config();
import logging from '../config/logging';
import { Request, Response } from 'express';

const NAMESPACE = 'Sample controller';

export const healthController = (req: Request, res: Response) => {
    logging.info(NAMESPACE, 'Sample health check router is called');

    res.status(200).json({
        message: 'Get info is success'
    });
};

