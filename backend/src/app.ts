import dotenv from 'dotenv';
import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import AppRouter from './routers/AppRouter';
import ErrorHandler from './models/ErrorHandler';

dotenv.config({ path: '.env' });

class Server {
  public app = express();
  public router = AppRouter;
}

const server = new Server();

// Json & Cors
server.app.use(express.json());
server.app.use(express.urlencoded({ extended: true }));
server.app.use(cors());

// API mapping
server.app.use('/api', server.router);

// Error Handler
server.app.use((err: ErrorHandler, req: Request, res: Response, next: NextFunction) => {
  res.status(err.status || 500).json({
    status: 'error',
    statusCode: err.status,
    message: err.message
  });
  if ([422, 404].includes(err.status)) {
    console.warn(err.message);
  } else {
    console.error(err);
  }
});

// Starts server
((port = process.env.API_PORT || 5000) => {
  server.app.listen(port, () => console.log(`API listening on port ${port}`));
})();

export default server;