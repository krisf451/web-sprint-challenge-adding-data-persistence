const db = require("../../data/dbConfig");

async function getAll() {
  const results = await db("projects as p").select(
    "p.project_id",
    "p.project_name",
    "p.project_description",
    "p.project_completed"
  );
  const projects = [];

  results.forEach((result) => {
    projects.push({
      project_id: result.project_id,
      project_name: result.project_name,
      project_description: result.project_description,
      project_completed: Boolean(result.project_completed),
    });
  });
  return projects;
}

async function getById(id) {
  const possibleProject = await db("projects").where("project_id", id).first();
  if (possibleProject.project_completed === 0) {
    possibleProject.project_completed = false;
  } else {
    possibleProject.project_completed = true;
  }
  return possibleProject;
}

function addProject(project) {
  return db("projects")
    .insert(project)
    .then((id) => {
      return getById(id[0]);
    });
}
module.exports = {
  getAll,
  addProject,
};
