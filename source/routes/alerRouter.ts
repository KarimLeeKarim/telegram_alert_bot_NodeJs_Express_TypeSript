import express from 'express';
import { alertController } from '../controllers/alertController';
import { healthController } from '../controllers/healthController';

export const alertRouter = express.Router();

alertRouter.get('/health', healthController);
alertRouter.get('/readiness', healthController);


alertRouter.post('/alert', alertController);
