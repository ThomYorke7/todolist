import { projectList } from "./projects"
import { createTaskContainer } from "./tasksRenderer"

const important = document.getElementById("important")
const tasksList = document.getElementById("tasks-list")

const findImportant = () => {
    projectList.forEach(project => {
        let taskList = project.taskList
        taskList.forEach(task => {
            if (task.priority) {
                createTaskContainer(...Object.values(task))
            }
        })
    })
}

const filtersListeners = () => {
    important.addEventListener("click", () => {
        const projectTitle = document.getElementById("project-title")
        projectTitle.textContent = "Important Tasks"
        projectTitle.style.textAlign = "center"
        tasksList.innerHTML = ""
        //findImportant()
    })
}

// Modificare behaviour remove button che visualizza automaticamente il contenuto del progetto da dove si è eliminato il task
export { filtersListeners }