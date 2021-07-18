import { Connection, createConnection } from 'typeorm';

class Database {
  private static conn: Connection;

  public getConnection(): Connection {
    if (Database.conn === null || Database.conn == undefined) {
      throw new Error('Conexão database não aberta')
    }

    return Database.conn;
  }

  public async openConnection(): Promise<void> {
    if (Database.conn === null || Database.conn == undefined) {
      try {
        Database.conn = await createConnection();
      } catch (error) {
        console.error("ERRO CONECTAR NO BANCO -> ", error);
      }
    }
  }

}

export default Database;