import {Request, Response, NextFunction} from 'express';

import { users } from '../data';

function validMessage(req: Request, res: Response, next: NextFunction) {
  const {id, idMessage}: {id?: string, idMessage?: string} = req.params;

  const hasUser = users.find((item) => item.getId() === id);
  if(hasUser) {
    const allMessages = hasUser.getAllMessages();

    const message = allMessages.find((item) => item.getId() === idMessage);
    if(!message) {
      return res.status(400).json({
        success: false,
        msg: 'message not found',
        data: null
      })
    }

    req.body.data = message;

  } else {
    return res.status(400).json({
      success: false,
      msg: 'user not found',
      data: null
    })
  }
  
  next();
}

export default validMessage;