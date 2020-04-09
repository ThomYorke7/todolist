import { projectFactory, projectList, populateProjectList } from "./projects.js"
import { taskList, taskFactory } from "./tasks.js"
import { displayProjectTasks, displayProjectTitle } from "./tasksRenderer"

const addProjectButton = document.getElementById("ul-title")
const projectUl = document.getElementById("projects-list")
const lateralContainer = document.getElementById("lateral-container")
const addTask = document.getElementById("add-task")


const createProject = () => {
    let projectName = prompt("Project Name: ");
    if (projectName) {
        let project = projectFactory(projectName);
        populateProjectList(project)
    }
}

const displayProjects = () => {
    projectUl.innerHTML = ""
    for (let i = 0; i < projectList.length; i++) {
        let project = document.createElement("li")
        project.classList.add("project")
        project.appendChild(document.createTextNode(projectList[i].name))
        const projectRemoveBtn = document.createElement("div")
        projectRemoveBtn.classList.add("project-remove-btn")
        project.appendChild(projectRemoveBtn)
        projectUl.appendChild(project)
    }
}


const promptNewProject = () => {
    addProjectButton.addEventListener("click", () => {
        createProject();
        displayProjects();
        displayProjectTitle(projectList[projectList.length - 1].name)
        projectList[projectList.length - 1].status = "active"
        displayProjectTasks(projectList[projectList.length - 1].name)
        addTask.style.display = "block"
    });
}

const createNotice = () => {
    const tasksList = document.getElementById("tasks-list")
    const projectTitle = document.getElementById("project-title")
    addTask.style.display = "none"
    if (projectList.length == 0) {
        projectTitle.textContent = "You have no projects. Let's create a new one!"
        projectTitle.style.textAlign = "center"
        tasksList.textContent = ""
    } else if (projectList.length > 0) {
        tasksList.textContent = "This project has been deleted. Select another project or create a new one."
    }
}

const deleteProject = projectName => {
    for (let i = 0; i < projectList.length; i++) {
        if (projectList[i].name == projectName && projectList[i].status == "active") {
            projectList.splice([i], 1)
            createNotice()
        } else if (projectList[i].name == projectName) {
            projectList.splice([i], 1)
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
        }
    })
}





export { promptNewProject, deleteProjectListener, createNotice }