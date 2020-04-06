const projectList = []

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
}

export { projectFactory, populateProjectList, projectList }