import { taskList, taskFactory } from "./tasks.js"
import { projectFactory, projectList, populateProjectList } from "./projects.js"
import { findActiveProject } from "./taskModal"

const projects = document.getElementsByClassName("project")
const personalProjectsContainer = document.getElementById("personal-projects-container")
const formContainer = document.getElementById("task-form-container")
const tasksContainer = document.getElementById("tasks-container")
const tasksList = document.getElementById("tasks-list")
const removeTaskBtn = document.getElementsByClassName("task-remove-btn")

const createTaskContainer = (title, date, priority, taskID) => {
    const taskContainer = document.createElement("div")
    taskContainer.classList.add("task-container")
    const taskHeader = document.createElement("p")
    taskHeader.classList.add("task-header")
    taskHeader.textContent = title
    const taskDate = document.createElement("p")
    taskDate.classList.add("task-date")
    taskDate.textContent = date
    const taskPriority = document.createElement("span")
    taskPriority.classList.add("task-priority")
    if (priority) {
        taskPriority.textContent = "Important"
    }
    const taskRemoveBtn = document.createElement("div")
    taskRemoveBtn.classList.add("task-remove-btn")
    taskRemoveBtn.id = taskID

    taskContainer.appendChild(taskHeader);
    taskContainer.appendChild(taskDate);
    taskContainer.appendChild(taskPriority);
    taskContainer.appendChild(taskRemoveBtn);
    tasksList.appendChild(taskContainer)
}

const displayProjectTitle = (project) => {
    let projectTitle = document.getElementById("project-title")
    projectTitle.textContent = project
}

const findProject = (projectName) => {
    for (let i = 0; i < projectList.length; i++) {
        if (projectList[i].name == projectName) {
            projectList[i].status = "active"
            return projectList[i]
        } else {
            projectList[i].status = "idle"
        }
    }
}

const displayProjectTasks = (projectName) => {
    let projectToDisplay = findProject(projectName)
    let projectTasks = projectToDisplay.taskList
    tasksList.innerHTML = ""
    if (projectTasks.length > 0) {
        for (let i = 0; i < projectTasks.length; i++) {
            createTaskContainer(...Object.values(projectTasks[i]))
        }
    }
}

const taskListeners = () => {

    personalProjectsContainer.addEventListener("click", (e) => {
        if (e.target && e.target.classList.contains("project")) {
            displayProjectTitle(e.target.textContent);
            displayProjectTasks(e.target.textContent)
        }
    })

    formContainer.addEventListener("click", (e) => {
        if (e.target && e.target.id == "add-task-btn") {
            let activeProject = document.getElementById("project-title").textContent
            displayProjectTasks(activeProject)
        }
    })

    tasksContainer.addEventListener("click", (e) => {
        if (e.target && e.target.classList.contains("task-container")) {
            e.target.classList.toggle("erased")
        }
    })

    tasksContainer.addEventListener("click", (e) => {
        if (e.target && e.target.classList.contains("task-remove-btn")) {
            let taskID = e.target.id
            let activeProject = findActiveProject()
            activeProject.removeTask(taskID)
            displayProjectTasks(activeProject.name)
        }
    })
}



export { taskListeners, projects, displayProjectTasks, displayProjectTitle, findProject }