import { Router } from 'express';
import mongoose from 'mongoose';

const router: Router = Router();

router.get('/health/ready', async (_req, res) => {
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

router.get('/health/live', (_req, res) => {
  res.status(200).json({ message: 'Application is live' });
});

export { router as healthRouter };
