import { Router, Request, Response } from 'express';
import mongoose from 'mongoose';
import { logger } from '@cashoco/common';

const router: Router = Router();

router.get('/ready', async (req: Request, res: Response) => {
  logger.info('Checking the readiness of the application');
  try {
    // Check if the MongoDB connection is established and ready
    const isConnected = (await mongoose.connection.readyState) === 1;

    if (isConnected) {
      res.status(200).json({ message: 'Application is ready' });
    } else {
      res.status(503).json({ message: 'Application is not ready' });
    }
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while checking the readiness' });
  }
});

router.get('/live', (req, res) => {
  logger.info('Checking the liveness of the application');
  res.status(200).json({ message: 'Application is live' });
});

export { router as healthRouter };
