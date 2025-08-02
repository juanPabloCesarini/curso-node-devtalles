const { getAge } = require("./get-age.plugin");
const { idConstructor } = require("./get-uuid.plugin");
const { http } = require("./http-client.plugin");

module.exports = {
  getAge,
  idConstructor,
  http,
};
