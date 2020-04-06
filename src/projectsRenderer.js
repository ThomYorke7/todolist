import { projectFactory, projectList, populateProjectList } from "./projects.js"
import { taskList, taskFactory } from "./tasks.js"

const addProjectButton = document.getElementById("ul-title")
const projectUl = document.getElementById("projects-list")


const createProject = () => {
    let projectName = prompt("Project Name: ");
    if (projectName) {
        let project = projectFactory(projectName);
        populateProjectList(project)
    }
}

const displayProjects = () => {
    if (projectList.length > 0) {
        let latestProject = projectList[projectList.length - 1]
        let project = document.createElement("li")
        project.classList.add("project")
        project.appendChild(document.createTextNode(latestProject.name));
        projectUl.appendChild(project)
    }
}


const promptNewProject = () => {
    addProjectButton.addEventListener("click", () => {
        createProject();
        displayProjects();
    });
}





export { promptNewProject }