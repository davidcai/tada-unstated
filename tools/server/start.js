#!/usr/bin/env node

const dbServer = require("./db-server");
const appServer = require("./app-server");
const { isDevelopment, log } = require("../utils");
const { dbPort, appPort } = require("./config");

const mode = isDevelopment() ? "development" : "production";
log("server", `Running in ${mode.magenta} mode`);

dbServer.listen(dbPort, err => {
  if (err) {
    throw err;
  }

  log("server", `Running JSON server at ${`http://localhost:${dbPort}`.cyan}`);
});

appServer.listen(appPort, err => {
  if (err) {
    throw err;
  }

  log("server", `Hosting app at ${`http://localhost:${appPort}`.cyan}`);
});
