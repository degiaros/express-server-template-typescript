import { Request, Response } from 'express';

export interface HomeController {
  index(_req: Request, res: Response): void;
}

export const index: HomeController['index'] = (_req: Request, res: Response): void => {
  res.send('Home');
};

export default {
  index
};