const router = require("express").Router();
const Resources = require("./model");

router.get("/", (req, res, next) => {
  Resources.getAll()
    .then((resources) => {
      res.status(200).json(resources);
    })
    .catch(next);
});

router.post("/", (req, res, next) => {
  Resources.addResource(req.body)
    .then((resource) => {
      res.status(201).json(resource);
    })
    .catch(next);
});
module.exports = router;
