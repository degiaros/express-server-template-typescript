import { Request, Response } from 'express';

export interface ApiController {
  getApi(_req: Request, res: Response): void;
}

export const getApi: ApiController['getApi'] = (_req: Request, res: Response): void => {
  res.json({
    status: 'API is working!',
    message: 'Welcome!'
  })
};

export default {
  getApi
};