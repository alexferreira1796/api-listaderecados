import { v4 as uuidv4 } from 'uuid';

class Messages {
  protected id: string;
  protected description: string;
  protected details: string;

  constructor(desc: string, details: string) {
    this.id = uuidv4();
    this.description = desc;
    this.details = details;
  }

  getId(): string {
    return this.id;
  }

  getDescription(): string {
    return this.description;
  }

  getDetails(): string {
    return this.details;
  }

  updateMessage(desc: string, details: string): Messages {
    this.description = desc;
    this.details = details;
    return this;
  }

}

export default Messages;