const projectList = []

const projectFactory = (name) => {
    let taskList = []
    let status = "idle"

    const addTask = (task) => {
        taskList.push(task)
    }

    return { name, taskList, status, addTask }
}

const populateProjectList = (project) => {
    projectList.push(project)
}

export { projectFactory, populateProjectList, projectList }