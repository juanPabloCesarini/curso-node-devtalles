const { getAge } = require("./get-age.plugin");
const { idConstructor } = require("./get-uuid.plugin");
const { http } = require("./http-client.plugin");
const buildLogger = require("./logger.plugin");

module.exports = {
  getAge,
  idConstructor,
  http,
  buildLogger
};
