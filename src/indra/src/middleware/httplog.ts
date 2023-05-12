import morgan, { StreamOptions } from 'morgan';
import logger from '../lib/logger';

// Override the stream method by telling
// Morgan to use our custom logger instead of the console.log.
const stream: StreamOptions = {
  // Use the http severity
  write: (message) => logger.http(message),
};

const morganMiddleware = morgan(':method :url :status :res[content-length] - :response-time ms', { stream });

export default morganMiddleware;
