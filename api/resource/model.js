const db = require("../../data/dbConfig.js");

const getAll = () => {
  return db("resources");
};

module.exports = {
  getAll,
};
