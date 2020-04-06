import { taskList, taskFactory } from "./tasks.js"
import { projectFactory, projectList, populateProjectList } from "./projects.js"

const projects = document.getElementsByClassName("project")
const personalProjectsContainer = document.getElementById("personal-projects-container")
const formContainer = document.getElementById("task-form-container")
const tasksList = document.getElementById("tasks-list")

const createTaskContainer = (title, description, date, priority) => {
    const taskContainer = document.createElement("div")
    taskContainer.classList.add("task-container")
    const taskHeader = document.createElement("h3")
    taskHeader.classList.add("task-header")
    taskHeader.textContent = title
    const taskDescription = document.createElement("p")
    taskDescription.classList.add("task-description")
    taskDescription.textContent = description
    const taskDate = document.createElement("p")
    taskDate.classList.add("task-date")
    taskDate.textContent = date
    const taskPriority = document.createElement("span")
    taskPriority.classList.add("task-priority")
    if (priority) {
        taskPriority.textContent = "!"
    }
    const taskDetailsBtn = document.createElement("button")
    taskDetailsBtn.classList.add("task-button")
    taskDetailsBtn.textContent = ("Show Details")

    taskContainer.appendChild(taskPriority);
    taskContainer.appendChild(taskHeader);
    taskContainer.appendChild(taskDescription);
    taskContainer.appendChild(taskDate);
    taskContainer.appendChild(taskDetailsBtn);
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

const eventListener = () => {

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
}



export { eventListener, projects, displayProjectTasks, findProject }