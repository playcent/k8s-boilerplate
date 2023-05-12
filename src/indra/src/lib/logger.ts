import winston from 'winston';

// Create a logger instance
const logger = winston.createLogger({
  level: 'debug', // Set the logging level (e.g., 'info', 'debug', 'error')
  format: winston.format.simple(), // Set the log format
  transports: [
    new winston.transports.Console(), // Log to the console
  ],
});

export default logger;
