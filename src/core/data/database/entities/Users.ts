import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Messages } from "./Messages";

@Entity({ name: 'tb_users' })
export class Users extends BaseEntity {
  @PrimaryGeneratedColumn({
    name: 'id',
    type: 'int'
  })
  id?: number;

  @Column({
    name: 'name'
  })
  name: string;

  @Column({
    name: 'password'
  })
  password: string;

  @Column({
    name: 'repeat_password'
  })
  repeat_password: string;

  @OneToMany(() => Messages, (msg) => msg.user)
  message?: Messages[];

  constructor(name: string, pass: string, repeat: string) {
    super();
    this.name = name;
    this.password = pass;
    this.repeat_password = repeat;
  }
}
