import express from 'express';
import { alertController } from '../controllers/alertController';
import { healthController } from '../controllers/healthController';
import { getAlertInfo } from '../controllers/alertInfoController';

export const alertRouter = express.Router();

alertRouter.get('/health', healthController);
alertRouter.get('/readiness', healthController);

alertRouter.get('/alert-info', getAlertInfo);
alertRouter.post('/alert', alertController);