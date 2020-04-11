import { projectList } from "./projects.js"
import { taskCounter } from "./taskModal"

const projectUl = document.getElementById("projects-list")
const lateralContainer = document.getElementById("lateral-container")
const addTask = document.getElementById("add-task")



const displayProjects = () => {
    projectUl.innerHTML = ""
    for (let i = 0; i < projectList.length; i++) {
        let project = document.createElement("li")
        project.classList.add("project")
        project.style.color = projectList[i].color
        project.appendChild(document.createTextNode(projectList[i].name))
        const projectRemoveBtn = document.createElement("div")
        projectRemoveBtn.classList.add("project-remove-btn")
        project.appendChild(projectRemoveBtn)
        projectUl.appendChild(project)
    }
}


const createNotice = () => {
    const tasksList = document.getElementById("tasks-list")
    const projectTitle = document.getElementById("project-title")
    if (projectList.length == 0) {
        projectTitle.textContent = "You have no projects. Let's create a new one!"
        tasksList.textContent = ""
        addTask.style.display = "none"
    } else if (projectList.length > 0) {
        projectTitle.textContent = "Select one of your projects"
        tasksList.textContent = ""
        addTask.style.display = "none"
    }
}

const deleteProject = projectName => {
    for (let i = 0; i < projectList.length; i++) {
        if (projectList[i].name == projectName && projectList[i].status == "active") {
            projectList.splice([i], 1)
            localStorage.setItem('projects', JSON.stringify(projectList))
            createNotice()
        } else if (projectList[i].name == projectName) {
            projectList.splice([i], 1)
            localStorage.setItem('projects', JSON.stringify(projectList))
            createNotice()
        }
    }
}


const deleteProjectListener = () => {
    lateralContainer.addEventListener("click", (e) => {
        if (e.target.classList.contains("project-remove-btn")) {
            let projectName = (e.target.previousSibling.textContent)
            let deleteConfirm = confirm("Press OK to delete the project")
            if (deleteConfirm) {
                deleteProject(projectName);
            }
            displayProjects()
            taskCounter()
        }
    })
}





export { deleteProjectListener, createNotice, displayProjects }