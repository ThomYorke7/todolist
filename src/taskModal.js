import { taskFactory } from "./tasks"
import { projectList } from "./projects.js"

const addTask = document.getElementById("add-task")
const formContainer = document.getElementById("task-form-container")
const submitTaskBtn = document.getElementById("add-task-btn")

const taskFormHandler = () => {
    const displayTaskForm = (() => {
        addTask.addEventListener("click", () => {
            formContainer.style.display = "flex";
        })
    })()

    const hideTaskForm = (() => {
        submitTaskBtn.addEventListener("click", () => {
            formContainer.style.display = "none";
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
        console.log(projectList)
    })

}



export { taskFormHandler, submitTask, findActiveProject }
