// Load Projects from LocalStorage
let projectList = localStorage.getItem('projects') ? JSON.parse(localStorage.getItem('projects')) : []
localStorage.setItem('projects', JSON.stringify(projectList))


// Project Factory
const projectFactory = (name, color) => {
    let taskList = []
    let status = "idle"
    return { name, color, taskList, status }
}


// Functions
const populateProjectList = (project) => {
    projectList.push(project)
    localStorage.setItem('projects', JSON.stringify(projectList))
}


// Export Declarations
export { projectFactory, populateProjectList, projectList }