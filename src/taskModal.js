import { taskFactory } from "./tasks"
import { projectList } from "./projects.js"

const addTask = document.getElementById("add-task")
const formContainer = document.getElementById("task-form-container")
const submitTaskBtn = document.getElementById("add-task-btn")

const taskCounter = () => {
    const taskCounter = document.getElementById("task-counter-container")
    let counter = 0
    projectList.forEach(project => {
        let taskList = project.taskList
        taskList.forEach(task => {
            counter++
        })
    })
    taskCounter.textContent = `Total Tasks: ${counter}`
}

const taskFormHandler = () => {
    const displayTaskForm = (() => {
        addTask.addEventListener("click", () => {
            formContainer.style.display = "flex";
        })
    })()

    const hideTaskForm = (() => {
        formContainer.addEventListener("click", (e) => {
            if (e.target.id == "add-task-btn" || e.target.id == "close-task-btn") {
                e.preventDefault()
                formContainer.style.display = "none";
            }
        })
    })()
}

const findActiveProject = () => {
    for (let i = 0; i < projectList.length; i++) {
        if (projectList[i].status == "active") {
            return projectList[i]
        }
    }
}

const submitTask = () => {
    submitTaskBtn.addEventListener("click", (e) => {
        e.preventDefault()
        let taskName = document.getElementById("name").value
        let taskDate = document.getElementById("date").value
        let taskPriority = document.getElementById("priority").checked
        let newTask = taskFactory(taskName, taskDate, taskPriority);
        let activeProject = findActiveProject();
        activeProject.taskList.push(newTask);
        localStorage.setItem('projects', JSON.stringify(projectList))
        taskCounter()
    })

}



export { taskFormHandler, submitTask, findActiveProject, taskCounter }
