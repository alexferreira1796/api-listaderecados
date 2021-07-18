import { Request, Response, NextFunction } from 'express';
import { IName, IID } from '../interfaces/index';
import { Users } from '../../../core/data/database/entities/Users';

async function validUser(req: Request, res: Response, next: NextFunction) {
  const { id, name }: { id?: string, name?: IName } = req.params;
  let hasUser: any;

  if (id) {
    hasUser = await Users.findOne(id);
  }
  if (name) {
    hasUser = await Users.find({ where: { name } });
  }

  if (!hasUser || hasUser.length <= 0) {
    return res.status(400).json({
      success: false,
      msg: 'User not found',
      data: null,
    })
  }

  next();
}

export default validUser;