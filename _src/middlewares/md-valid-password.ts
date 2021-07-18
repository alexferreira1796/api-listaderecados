import {Request, Response, NextFunction} from 'express';

function validPassword(req: Request, res: Response, next: NextFunction) {
  const {password, repeatPass}: {password: string, repeatPass: string} = req.body;

  if(!password) {
    return res.status(400).json({
      success: false,
      message: 'Please, enter the password',
      data: null
    });
  }

  if(password.trim().length < 8) {
    return res.status(400).json({
      success: false,
      message: 'Minimum characters are eight',
      data: null
    });
  }

  if(!repeatPass) {
    return res.status(400).json({
      success: false,
      message: 'Please, enter the password again',
      data: null
    });
  }

  if(repeatPass.trim().length < 8) {
    return res.status(400).json({
      success: false,
      message: 'Minimum characters are eight',
      data: null
    });
  }

  if(password !== repeatPass) {
    return res.status(400).json({
      success: false,
      message: 'Passwords do not match',
      data: null
    });
  }

  next();
}

export default validPassword;