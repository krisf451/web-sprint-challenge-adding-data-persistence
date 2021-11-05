const router = require("express").Router();
const Projects = require("./model");

router.get("/", (req, res, next) => {
  Projects.getAll()
    .then((projects) => {
      res.status(200).json(projects);
    })
    .catch(next);
});

router.post("/", (req, res, next) => {
  Projects.addProject(req.body)
    .then((project) => {
      res.status(201).json(project);
    })
    .catch(next);
});
module.exports = router;
