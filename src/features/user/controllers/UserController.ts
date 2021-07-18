import { Request, Response } from 'express';
import { Users } from '../../../core/data/database/entities/Users';
import { IID, IName, IUser } from '../interfaces/index';

class UserController {

  // Return all users
  public async index(req: Request, res: Response) {
    try {
      const users = await Users.find();
      return res.status(200).json({
        success: true,
        msg: "list users success",
        data: users
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        msg: 'user not found',
        data: error
      });
    }
  }

  // Saved user
  public async store(req: Request, res: Response) {
    const { name, password, repeatPass }: IUser = req.body;

    try {
      const users = await new Users(name, password, repeatPass).save();
      return res.status(201).json(users);
    } catch (error) {
      return res.status(500).json({
        success: false,
        data: error
      });
    }
  }

  // Return user for id
  public async show(req: Request, res: Response) {
    const { id }: IID = req.params;

    try {
      const user = await Users.findOne(id);
      return res.status(200).json({
        success: true,
        msg: "user success",
        data: user
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        data: error
      });
    }
  }

  // Delete user
  public async delete(req: Request, res: Response) {
    const { id }: IID = req.params;

    try {
      const result = await Users.delete(id);
      return res.status(200).json((result.affected as number) > 0 ? "User deleted" : "Not remove");
    } catch (error) {
      return res.status(500).json({
        success: false,
        data: error
      });
    }
  }

  // Update User
  public async update(req: Request, res: Response) {
    const { id }: IID = req.params;
    const { name, password, repeatPass }: IUser = req.body;

    try {
      const result = await Users.update(id, {
        name,
        password,
        "repeat_password": repeatPass
      });
      return res.status(200).json({
        success: true,
        data: result
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        data: error
      });
    }
  }

  // Find for name
  public async getName(req: Request, res: Response) {
    const { name }: IName = req.params;

    try {
      const result = await Users.find({ where: { name } });
      return res.status(200).json({
        success: true,
        data: result
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        data: error
      });
    }

  }

}

export default UserController;