import { projectFactory, projectList, populateProjectList } from "./projects.js"
import { displayProjects } from "./projectsRenderer"
import { displayProjectTasks, displayProjectTitle } from "./tasksRenderer"

const addProjectBtn = document.getElementById("add-project-btn")
const addProject = document.getElementById("ul-title")
const projectFormContainer = document.getElementById("project-form-container")


const projectHandler = () => {
    addProject.addEventListener("click", () => {
        projectFormContainer.style.display = "flex"
    })


    projectFormContainer.addEventListener("click", (e) => {
        if (e.target.id == "add-project-btn" || e.target.id == "close-project-btn") {
            e.preventDefault()
            projectFormContainer.style.display = "none";
        }
    })


    addProjectBtn.addEventListener("click", (e) => {
        e.preventDefault()
        let projectName = document.getElementById("project-name").value
        let projectColor = document.getElementById("project-color").value
        let newProject = projectFactory(projectName, projectColor)
        populateProjectList(newProject)
        displayProjects()
        displayProjectTitle(projectList[projectList.length - 1].name)
        projectList[projectList.length - 1].status = "active"
        displayProjectTasks(projectList[projectList.length - 1].name)
    })
}

export { projectHandler }

