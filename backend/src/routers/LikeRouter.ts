import { NextFunction, Request, Response, Router } from 'express';
import Joi from 'joi';
import LikeController from '../controllers/LikeController';
import ErrorHandler from '../models/ErrorHandler';

/**
* Endpoint for like button
*/
class LikeRouter {
  private _router = Router();
  private controller = LikeController;

  get router() {
    return this._router;
  }

  constructor() {
    // GET - Likes -----------------------------------------------------------------
    this._router.get('/:app', (req: Request, res: Response, next: NextFunction) => {
      try {
        // Validate request
        const { error, value: params } = Joi.object({
          app: Joi.number().integer().required()
        }).validate(req.params);
        if (error) {
          throw new ErrorHandler(422, error.message);
        }
        res.status(200).json(this.controller.getLikes(String(params.app)));
      } catch (error) {
        next(error);
      }
    });
    // PUT - Likes -----------------------------------------------------------------
    this._router.put('/:app', (req: Request, res: Response, next: NextFunction) => {
      try {
        // Validate request
        const { error, value: params } = Joi.object({
          app: Joi.number().integer().required()
        }).validate(req.params);
        if (error) {
          throw new ErrorHandler(422, error.message);
        }
        res.status(200).json(this.controller.addLike(String(params.app)));
      } catch (error) {
        next(error);
      }
    });
  }
}

export = new LikeRouter().router;