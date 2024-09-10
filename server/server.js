const jsonServer = require("json-server");
const cors = require("cors");
const auth = require("json-server-auth");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.db = router.db;

// تمكين CORS
server.use(cors());
server.use(middlewares);
server.use(auth);
server.use(router);
const port = process.env.PORT || 3000;

// Listen on `port` and 0.0.0.0
server.listen(port, "0.0.0.0", function () {
  // ...
});
