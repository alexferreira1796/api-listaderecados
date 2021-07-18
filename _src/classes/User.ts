import { v4 as uuidv4 } from 'uuid';
import Messages from './Messages';

class User {
  protected id: string;
  protected user: string;
  protected password: string;
  protected repeatPass: string;
  protected messages: Array<Messages>;

  constructor(user: string, password: string, repeatPass: string) {
    this.id = uuidv4();
    this.user = user;
    this.password = password;
    this.repeatPass = repeatPass;
    this.messages = [];
  }

  getUser(): string {
    return this.user;
  }

  getId(): string {
    return this.id;
  }

  getAllMessages(): Messages[] {
    return this.messages;
  }

  setMessages(desc: string, details: string): Messages {
    const msg = new Messages(desc, details);
    this.messages.push(msg);
    return this.messages[this.messages.length - 1];
  }

  updateMessages(messages: any): void {
    this.messages = messages || [];
  }
}

export default User;