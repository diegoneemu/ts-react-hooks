import express from "express";
import * as http from "http";

const app = express();
const server = new http.Server(app);

server.listen(3001, () => {
  console.log(`[SERVER] Running at http://localhost:3001`);
});
