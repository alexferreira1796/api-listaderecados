"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
// Modules User
var data_1 = require("./data");
var User_1 = __importDefault(require("./classes/User"));
// Middlewares
var md_valid_id_1 = __importDefault(require("./middlewares/md-valid-id"));
var md_valid_user_1 = __importDefault(require("./middlewares/md-valid-user"));
var md_valid_name_1 = __importDefault(require("./middlewares/md-valid-name"));
var md_valid_password_1 = __importDefault(require("./middlewares/md-valid-password"));
var md_valid_description_1 = __importDefault(require("./middlewares/md-valid-description"));
var md_valid_details_1 = __importDefault(require("./middlewares/md-valid-details"));
var md_valid_message_1 = __importDefault(require("./middlewares/md-valid-message"));
var app = express_1.default();
app.use(cors_1.default());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
var port = process.env.PORT || 3000;
app.listen(port, function () { });
// Rota principal
app.get('/', function (req, res) {
    res.send("\n  <body style='margin:0;padding:0'>\n      <div style='display: flex;justify-content: center;align-items: center; align-content: center;width:99vw;height:99vh'>\n        <h1 style='font-size:60px;font-weigth:600'>\uD83D\uDE80 API Recados</h1>\n      </div>\n  </body>\n  ");
});
// Rotas de Usuário
// Retornando todos os users
app.get("/users", function (req, res) {
    var newList = data_1.users.map(function (item) { return ({
        id: item.getId(),
        user: item.getUser()
    }); });
    res.status(200).json({
        success: true,
        msg: "list users success",
        data: newList
    });
});
// Retornando o usuário pelo ID
app.get("/user/:id", [md_valid_id_1.default, md_valid_user_1.default], function (req, res) {
    var data = req.body.data;
    return res.status(200).json({
        success: true,
        msg: "user success",
        data: data
    });
});
// Retornando o usuário pelo Name
app.get("/user/name/:name", [md_valid_user_1.default], function (req, res) {
    var data = req.body.data;
    return res.status(200).json({
        success: true,
        msg: "User exists",
        data: data
    });
});
// Adicionado um novo usuário
app.post("/user/add", [md_valid_name_1.default, md_valid_password_1.default], function (req, res) {
    var _a = req.body, name = _a.name, password = _a.password, repeatPass = _a.repeatPass;
    var lowerName = name.toLowerCase();
    var hasUser = data_1.users.find(function (item) { return item.getUser() === lowerName; });
    if (hasUser) {
        return res.status(400).json({
            success: false,
            msg: 'User exists',
            data: null,
        });
    }
    var newUser = new User_1.default(lowerName, password, repeatPass);
    data_1.users.push(newUser);
    return res.status(201).json({
        success: true,
        msg: "user saved with success",
        data: data_1.users[data_1.users.length - 1]
    });
});
// Rotas dos Recados
// Retornando todas as mensagem de um usuário
app.get("/messages/:id", [md_valid_id_1.default, md_valid_user_1.default], function (req, res) {
    var data = req.body.data;
    return res.status(200).json({
        success: true,
        msg: "all messages",
        data: data.getAllMessages()
    });
});
// Salvando uma mensagem de um usuário
app.post("/message/add/:id", [md_valid_id_1.default, md_valid_user_1.default, md_valid_description_1.default, md_valid_details_1.default], function (req, res) {
    var _a = req.body, description = _a.description, details = _a.details, data = _a.data;
    var messages = data.setMessages(description, details);
    return res.status(201).json({
        success: true,
        msg: "saved with success",
        data: messages
    });
});
// Retornando uma mensagem de um usuário
app.get("/user/:id/message/:idMessage", [md_valid_id_1.default, md_valid_user_1.default, md_valid_message_1.default], function (req, res) {
    var data = req.body.data;
    return res.status(200).json({
        success: true,
        msg: "message success",
        data: data
    });
});
// Atualizar mensagem
app.put("/user/:id/message/:idMessage", [md_valid_id_1.default, md_valid_user_1.default, md_valid_description_1.default, md_valid_details_1.default, md_valid_message_1.default], function (req, res) {
    var _a = req.body, description = _a.description, details = _a.details, data = _a.data;
    var newDescription = description || data.getDescription();
    var newDetails = details || data.getDetails();
    var thisMessage = data.updateMessage(newDescription, newDetails);
    res.status(200).json({
        success: true,
        msg: "updated with success",
        data: thisMessage
    });
});
// Deletar mensagem
app.delete("/user/:id/message/:idMessage", [md_valid_id_1.default, md_valid_user_1.default], function (req, res) {
    var idMessage = req.params.idMessage;
    var data = req.body.data;
    var allMessages = data.getAllMessages();
    var message = allMessages.some(function (item) { return item.getId() === idMessage; });
    if (!message) {
        return res.status(400).json({
            success: false,
            msg: 'message not found',
            data: null
        });
    }
    var newData = allMessages.filter(function (item) { return item.getId() !== idMessage; });
    data.updateMessages(newData);
    return res.status(200).json({
        success: true,
        msg: "deleted with success",
        data: newData
    });
});
