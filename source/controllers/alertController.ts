import logging from '../config/logging';
import { Request, Response } from 'express';
import { telegramPostFunc } from '../telegramPostFunc';
import config from '../config/config';
import { ResponseSchema } from '../types';
import { createAlertInfo } from './alertInfoController';

export const alertController = async (req: Request, res: Response) => {
    logging.info(config.ns, 'Sample health check router is called');
    const postText = req.body;

    let result: ResponseSchema = await telegramPostFunc(postText);
    res.status(result.status_code).json({
        message: result.message
    });

    createAlertInfo(postText);
};
