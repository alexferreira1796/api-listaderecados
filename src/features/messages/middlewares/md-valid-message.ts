import { Request, Response, NextFunction } from 'express';
import { Messages } from '../../../core/data/database/entities/Messages';
import { IID } from '../interfaces/index';

async function validMessage(req: Request, res: Response, next: NextFunction) {
  const { id }: IID = req.params;

  const existe = await Messages.findOne(id);
  if (!existe) {
    return res.status(400).json({
      success: false,
      msg: 'message not found',
      data: null
    })
  }

  next();
}

export default validMessage;