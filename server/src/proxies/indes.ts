import express from "express";
import { IncomingMessage, ServerResponse } from "http";
import httpProxy from "http-proxy";

const app = express();
const proxyServer = httpProxy.createProxyServer();

proxyServer.on(
  "error",
  (err: Error, req: IncomingMessage, res: ServerResponse) => {
    res.statusCode = 500;
    res.end(
      JSON.stringify({
        statusCode: 500,
        message: "Internal Server Error",
        error: [err]
      })
    );
  }
);

app.use("/todo", (req, res) => {
  proxyServer.web(req, res, {
    target: "localhost:8080/todo",
    headers: { Host: "localhost:8080" }
  });
});
