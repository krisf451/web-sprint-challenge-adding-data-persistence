const db = require("../../data/dbConfig.js");

const getAll = () => {
  return db("resources");
};

function addResource(resource) {
  return db("resources")
    .insert(resource)
    .then(() => {
      return db("resources")
        .select(
          "resources.resource_name",
          "resources.resource_description",
          "resources.resource_id"
        )
        .first();
    });
}

module.exports = {
  getAll,
  addResource,
};
