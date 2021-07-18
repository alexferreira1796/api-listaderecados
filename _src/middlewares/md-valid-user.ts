import {Request, Response, NextFunction} from 'express';

import { users } from '../data';

function validUser(req: Request, res: Response, next: NextFunction) {
  const {id, name}: {id?: string, name?: string} = req.params;
  let hasUser;
  
  if(id) {
    hasUser = users.find((item) => item.getId() === id);
  }
  if(name) {
    hasUser = users.find((item) => item.getUser() === name);
  }
  
  if(!hasUser) {
    return res.status(400).json({
      success: false,
      msg: 'User not found',
      data: null,
    })
  }

  req.body.data = hasUser;

  next();
}

export default validUser;