#!/user/bin/env nodejs
const http = require("http");
const express = require("express");

const app = express();
const server = http.Server(app);
const port = 8080;

server.listen(port, () => console.log(`Server listening on ${port}`));

app.use(express.static("public"));

