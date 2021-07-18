import express from "express";
import Database from "./core/data/connections/Database";

import UsersRoutes from './features/user/routes/UsersRoutes';
import MessagesRoutes from "./features/messages/routes/MessagesRoutes";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rotas de Usuários
const userRoutes = new UsersRoutes().init();
const messagesRoutes = new MessagesRoutes().init();

app.use(userRoutes, messagesRoutes);

const port = process.env.PORT || 3000;

const init = async () => {
  await new Database().openConnection();
  app.listen(port, () => {
    console.log(`Server working in port ${port}`);
  });
}

init();