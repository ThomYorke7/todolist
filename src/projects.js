//const projectList = []
let projectList = localStorage.getItem('projects') ? JSON.parse(localStorage.getItem('projects')) : []

localStorage.setItem('projects', JSON.stringify(projectList))
const data = JSON.parse(localStorage.getItem('projects'))

const projectFactory = (name) => {
    let taskList = []
    let status = "idle"

    const addTask = (task) => {
        taskList.push(task)
    }

    const removeTask = (taskID) => {
        for (let i = 0; i < taskList.length; i++) {
            if (taskList[i].id == taskID) {
                taskList.splice([i], 1)
            }
        }
    }

    return { name, taskList, status, addTask, removeTask }
}

const populateProjectList = (project) => {
    projectList.push(project)
    localStorage.setItem('projects', JSON.stringify(projectList))
}

export { projectFactory, populateProjectList, projectList }