// Load Projects from LocalStorage
const projectList = localStorage.getItem("projects")
  ? JSON.parse(localStorage.getItem("projects"))
  : [];
localStorage.setItem("projects", JSON.stringify(projectList));

// Project Factory
const projectFactory = (name, color) => {
  const taskList = [];
  const status = "idle";
  return { name, color, taskList, status };
};

// Functions
const populateProjectList = (project) => {
  projectList.push(project);
  localStorage.setItem("projects", JSON.stringify(projectList));
};

// Export Declarations
export { projectFactory, populateProjectList, projectList };
