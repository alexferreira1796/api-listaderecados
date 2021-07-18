create schema list;

create table list.tb_users (
  id serial not null,
  name varchar(20) not null,
  password varchar(50) not null,
  repeat_password varchar(50) not null,
  constraint pk_id_users primary key(id)
);

create table list.tb_messages (
  id serial not null,
  description text not null,
  details text not null,
  id_user int not null,
  constraint pk_id_messages primary key(id),
  constraint fk_id_user foreign key(id_user) references list.tb_users(id),
);