// Import Declarations
import { taskFactory } from "./tasks";
import { projectList } from "./projects.js";

// Global Variables
const addTask = document.getElementById("add-task");
const formContainer = document.getElementById("task-form-container");
const submitTaskBtn = document.getElementById("add-task-btn");

// Functions
const taskCounter = () => {
  const taskCounterDiv = document.getElementById("task-counter");
  let counter = 0;
  projectList.forEach((project) => {
    const { taskList } = project;
    taskList.forEach((task) => {
      counter++;
    });
  });
  taskCounterDiv.textContent = counter;
};

const taskFormHandler = () => {
  const displayTaskForm = (() => {
    addTask.addEventListener("click", () => {
      formContainer.style.display = "flex";
    });
  })();

  const hideTaskForm = (() => {
    formContainer.addEventListener("click", (e) => {
      if (e.target.id == "add-task-btn" || e.target.id == "close-task-btn") {
        e.preventDefault();
        formContainer.style.display = "none";
      }
    });
  })();
};

const findActiveProject = () => {
  for (let i = 0; i < projectList.length; i++) {
    if (projectList[i].status == "active") {
      return projectList[i];
    }
  }
};

const submitTask = () => {
  submitTaskBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const taskName = document.getElementById("name").value;
    const taskDate = document.getElementById("date").value;
    const taskPriority = document.getElementById("priority").checked;
    const newTask = taskFactory(taskName, taskDate, taskPriority);
    const activeProject = findActiveProject();
    activeProject.taskList.push(newTask);
    localStorage.setItem("projects", JSON.stringify(projectList));
    taskCounter();
  });
};

// Export Declarations
export { taskFormHandler, submitTask, findActiveProject, taskCounter };
