import { Request, Response } from 'express';
import { Messages } from '../../../core/data/database/entities/Messages';
import { IID, IMessages } from '../interfaces';

class MessagesController {

  // Return All Messages
  public async index(req: Request, res: Response) {
    try {

      const messages = await Messages.find();
      return res.status(200).json(messages);

    } catch (error) {
      return res.status(500).json(error);
    }
  }

  // Save Message
  public async store(req: Request, res: Response) {
    const { id }: IID = req.params;
    const { description, details }: IMessages = req.body;

    try {
      const messages = await new Messages(description, details, id).save();

      return res.status(201).json(messages);
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  // Get One Message for User ID
  public async show(req: Request, res: Response) {
    const { id }: IID = req.params;

    const message = await Messages.findOne(id, {
      relations: ['user']
    });
    return res.json(message);
  }

  // Get All Messages for User ID
  public async getAll(req: Request, res: Response) {
    const { id }: IID = req.params;

    const messages = await Messages.find({ where: { idUser: id } });
    return res.json(messages);
  }

  // Update Message for User ID
  public async update(req: Request, res: Response) {
    const { id }: IID = req.params;
    const { description, details }: IMessages = req.body;

    const result = await Messages.update(id, {
      description,
      details,
    });

    return res.json(result);
  }

  // Delete Message for User
  public async delete(req: Request, res: Response) {
    const { id }: IID = req.params;

    const result = await Messages.delete(id);

    return res
      .status(200)
      .json((result.affected as number) > 0 ? "Message deleted" : "Not remove");
  }

}

export default MessagesController;