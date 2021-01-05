const express = require("express");
const app = express();
const path = require("path");

app.use(express.static("public"));
  app.use(
    "/css",
    express.static(path.resolve(__dirname + `/css`))
  );

  app.use(
    "/js",
    express.static(path.resolve(__dirname + `/js`))
  );
  
app.get("/status", (request, response, res) => {
  res.redirect('https://asunabot.statuspage.io');
});
app.get("/support", (request, response) => {
  response.redirect("https://discord.gg/T4BMtSu")
});
app.get("/invite", (request, response) => {
  response.redirect("https://discord.com/oauth2/authorize?client_id=689171084867665989&scope=bot&permissions=8")
});
app.get("/*", (request, response) => {
  response.redirect("/")
});
