import { Router } from 'express';
import LikeRouter from './LikeRouter';

/**
* Main router for mapping endpoints
*/
class AppRouter {
  private _router = Router();
  private likeRouter = LikeRouter;

  get router() {
    return this._router;
  }

  constructor() {
    this._router.use('/like', this.likeRouter);
  }
}

export = new AppRouter().router;