const express = require("express");
const app = express();
const path = require("path");

app.get("/blog", (request, response) => {
  response.sendFile(__dirname + "403.html");
});
app.get("/premium", (request, response) => {
  response.sendFile(__dirname + "403.html");
});
app.get("/os", (request, response) => {
  response.sendFile(__dirname + "403.html");
});
app.get("/*", (request, response) => {
  response.sendFile(__dirname + "404.html");
});
