const router = require("express").Router();
const Projects = require("./model");

router.get("/", (req, res, next) => {
  res.send("projects router working");
});
// router.get("/", (req, res, next) => {
//   Projects.getAll()
//     .then((projects) => {
//       res.status(200).json(projects);
//     })
//     .catch(next);
// });
module.exports = router;
