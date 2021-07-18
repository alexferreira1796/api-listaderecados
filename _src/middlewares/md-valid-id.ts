import {Request, Response, NextFunction} from 'express';
import { validate } from 'uuid';

function validId(req: Request, res: Response, next: NextFunction) {
  const {id, idMessage}: {id?: string, idMessage?:string} = req.params;

  if(id && !validate(id)) {
    return res.status(400).json({
      success: false,
      msg: 'ID not validate',
      data: null
    })
  }

  if(idMessage && !validate(idMessage)) {
    return res.status(400).json({
      success: false,
      msg: 'ID Message not validate',
      data: null
    })
  }
  
  next();
}

export default validId;