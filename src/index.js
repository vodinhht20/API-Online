console.log("Iniciando o Servidor");

const jsonServer = require("json-server");
const path = require("path");
const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, "api.json"));
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);
server.listen(5555, () => {
  console.log("JSON Server is running");
});
