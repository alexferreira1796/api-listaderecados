import { Request, Response } from 'express';
import { Users } from '../../../core/data/database/entities/Users';
import { IID, IUser } from '../interfaces/index';

class UserController {

  // Return all users
  public async index(req: Request, res: Response) {
    try {
      const users = await Users.find();
      return res.status(200).json(users);
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  // Saved user
  public async store(req: Request, res: Response) {
    const { name, pass, repetPass }: IUser = req.body;

    try {
      const users = await new Users(name, pass, repetPass).save();
      return res.status(201).json(users);
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  // Return user for id
  public async show(req: Request, res: Response) {
    const { id }: IID = req.params;

    try {
      const user = await Users.findOne(id);
      return res.status(200).json(user);
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  // Delete user
  public async delete(req: Request, res: Response) {
    const { id }: IID = req.params;

    try {
      const result = await Users.delete(id);
      return res.status(200).json((result.affected as number) > 0 ? "User deleted" : "Not remove");
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  // Update User
  public async update(req: Request, res: Response) {
    const { id }: IID = req.params;
    const { name, pass, repetPass }: IUser = req.body;

    try {
      const result = await Users.update(id, {
        name,
        password: pass,
        "repeat_password": repetPass
      });
      return res.json(result);
    } catch (error) {
      return res.status(500).json(error);
    }
  }
}

export default UserController;