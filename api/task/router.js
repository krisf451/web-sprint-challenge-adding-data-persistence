const router = require("express").Router();
const Tasks = require("./model");

router.get("/", (req, res, next) => {
  Tasks.getAll()
    .then((tasks) => {
      res.status(200).json(tasks);
    })
    .catch(next);
});

router.post("/", (req, res, next) => {
  Tasks.addTask(req.body)
    .then((task) => {
      res.status(201).json(task);
    })
    .catch(next);
});
module.exports = router;
