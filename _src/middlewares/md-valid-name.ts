import {Request, Response, NextFunction} from 'express';

import { users } from '../data';

function validName(req: Request, res: Response, next: NextFunction) {
  const {name}: {name: string} = req.body;

  if(!name) {
    return res.status(400).json({
      success: false,
      message: 'Please, enter the name',
      data: null
    });
  }

  if(name.trim().length < 3) {
    return res.status(400).json({
      success: false,
      message: 'Minimum characters are three',
      data: null
    });
  }

  const hasUser = users.find((item) => item.getUser() === name);
  if(hasUser) {
    return res.status(400).json({
      success: false,
      msg: 'User exists',
      data: null
    })
  }
  
  next();
}

export default validName;