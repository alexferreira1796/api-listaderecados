```
yarn typeorm migration:create -n CreateTableUsers
yarn typeorm migration:create -n CreateTableMessages
```
yarn typeorm entity:create -n Users
yarn typeorm entity:create -n Messages

```
localmente
yarn build
yarn start

```
const todolist = await TodoList.find({ where: { id_user: id_user } });