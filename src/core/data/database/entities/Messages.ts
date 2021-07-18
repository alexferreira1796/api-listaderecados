import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Users } from "./Users";

@Entity({ name: 'tb_messages' })
export class Messages extends BaseEntity {
  @PrimaryGeneratedColumn({
    name: 'id',
    type: 'int'
  })
  id?: number;

  @Column({
    name: 'description'
  })
  description: string;

  @Column({
    name: 'details'
  })
  details: string;

  @Column({
    name: 'id_user'
  })
  idUser: string;

  @ManyToOne(() => Users, (user) => user.message)
  @JoinColumn({ name: 'id_user', referencedColumnName: "id" })
  user?: Users

  constructor(desc: string, details: string, id: string) {
    super();
    this.description = desc;
    this.details = details
    this.idUser = id;
  }
}
