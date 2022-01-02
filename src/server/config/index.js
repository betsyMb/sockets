import express from "express";
import http from "http";
import path from "path";

module.exports = () => {
  const app = express();
  
  app.set("PORT", process.env.PORT || 3000);
  app.use(express.static(path.join(__dirname, "../../public")));

  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
  });

  const server = http.createServer(app);
  return server;
};
