import { projectFactory, projectList, populateProjectList } from "./projects.js"
import { findActiveProject, taskCounter } from "./taskModal"

const personalProjectsContainer = document.getElementById("personal-projects-container")
const formContainer = document.getElementById("task-form-container")
const tasksContainer = document.getElementById("tasks-container")
const tasksList = document.getElementById("tasks-list")
const addTask = document.getElementById("add-task")

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
    addTask.style.display = "block"
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
        if (e.target && e.target.classList.contains("task-remove-btn")) {
            let taskID = e.target.id
            let activeProject = findActiveProject()
            for (let i = 0; i < activeProject.taskList.length; i++) {
                if (activeProject.taskList[i].id == taskID) {
                    activeProject.taskList.splice([i], 1)
                }
            }
            localStorage.setItem('projects', JSON.stringify(projectList))
            displayProjectTasks(activeProject.name)
            taskCounter()
        }
    })
}



export { taskListeners, displayProjectTasks, displayProjectTitle, findProject, createTaskContainer }