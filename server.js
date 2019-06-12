#!/user/bin/env nodejs
const http = require("http");
const express = require("express");

const app = express();
const port = 8080;

app.use(express.static("public"));

app.listen(process.env.PORT || port, function(){
    console.log('Your node js server is running');
});
