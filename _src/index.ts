import express, { Request, Response } from 'express';
import cors from 'cors';

// Modules User
import {users as listUser} from './data';
import User from './classes/User';
import IUser from './interfaces/IUser';

import Message from './classes/Messages';

// Middlewares
import validId from './middlewares/md-valid-id';
import validUser from './middlewares/md-valid-user';
import validName from './middlewares/md-valid-name';
import validPassword from './middlewares/md-valid-password';
import validDescription from './middlewares/md-valid-description';
import validDetails from './middlewares/md-valid-details';
import validMessage from './middlewares/md-valid-message';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const port = process.env.PORT || 3000;
app.listen(port, () => {});

// Rota principal
app.get('/', (req: Request, res: Response) => {
  res.send(`
  <body style='margin:0;padding:0'>
      <div style='display: flex;justify-content: center;align-items: center; align-content: center;width:99vw;height:99vh'>
        <h1 style='font-size:60px;font-weigth:600'>🚀 API Recados</h1>
      </div>
  </body>
  `);
});

// Rotas de Usuário
// Retornando todos os users
app.get("/users", (req: Request, res: Response) => {
  const newList = listUser.map((item) => (
    { 
      id: item.getId(), 
      user: item.getUser()
    }
  )) 

  res.status(200).json({
    success: true,
    msg: "list users success",
    data: newList
  });
});

// Retornando o usuário pelo ID
app.get("/user/:id", [validId, validUser], (req: Request, res: Response) => {
  const {data}: {data: User} = req.body;
  
  return res.status(200).json({
    success: true,
    msg: "user success",
    data: data
  });

});

// Retornando o usuário pelo Name
app.get("/user/name/:name", [validUser], (req: Request, res: Response) => {
  const {data}: {data: User} = req.body;
  
  return res.status(200).json({
    success: true,
    msg: "User exists",
    data: data
  });

});

// Adicionado um novo usuário
app.post("/user/add", [validName, validPassword], (req: Request, res: Response) => {
  const {name, password, repeatPass}: {name: string, password: string, repeatPass: string} = req.body;

  const lowerName = name.toLowerCase();
  const hasUser = listUser.find((item) => item.getUser() === lowerName);
  if(hasUser) {
    return res.status(400).json({
      success: false,
      msg: 'User exists',
      data: null,
    })
  }

  const newUser = new User(lowerName, password, repeatPass);
  listUser.push(newUser);

  return res.status(201).json({
    success: true,
    msg: "user saved with success",
    data: listUser[listUser.length - 1]
  });
  
});

// Rotas dos Recados
// Retornando todas as mensagem de um usuário
app.get("/messages/:id", [validId, validUser], (req: Request, res: Response) => {
  const {data}: {data: User} = req.body;
  return res.status(200).json({
    success: true,
    msg: "all messages",
    data: data.getAllMessages()
  });
});


// Salvando uma mensagem de um usuário
app.post("/message/add/:id", [validId, validUser, validDescription, validDetails], (req: Request, res: Response) => {
  const {description, details, data}: {description: string, details: string, data: User} = req.body;

  const messages = data.setMessages(description, details);

  return res.status(201).json({
    success: true,
    msg: "saved with success",
    data: messages
  });

});

// Retornando uma mensagem de um usuário
app.get("/user/:id/message/:idMessage", [validId, validUser, validMessage], (req: Request, res: Response) => {
  const {data}: {data: User} = req.body;

  return res.status(200).json({
    success: true,
    msg: "message success",
    data
  });
});

// Atualizar mensagem
app.put("/user/:id/message/:idMessage", [validId, validUser, validDescription, validDetails, validMessage], (req: Request, res: Response) => {
  const {description, details, data}: {description: string, details: string, data: Message} = req.body;

  let newDescription = description || data.getDescription();
  let newDetails = details || data.getDetails();

  const thisMessage = data.updateMessage(newDescription, newDetails);

  res.status(200).json({
    success: true,
    msg: "updated with success",
    data: thisMessage
  })

});

// Deletar mensagem
app.delete("/user/:id/message/:idMessage", [validId, validUser], (req: Request, res: Response) => {
  const {idMessage}: {idMessage?: string} = req.params;
  const {data}: {data: User} = req.body;
  
  const allMessages = data.getAllMessages();

  const message = allMessages.some((item) => item.getId() === idMessage);
  if(!message) {
    return res.status(400).json({
      success: false,
      msg: 'message not found',
      data: null
    })
  }

  const newData = allMessages.filter((item) => item.getId() !== idMessage);
  data.updateMessages(newData);

  return res.status(200).json({
    success: true,
    msg: "deleted with success",
    data: newData
  });

});