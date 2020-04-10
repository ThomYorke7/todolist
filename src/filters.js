import { projectList } from "./projects"
import { format, addDays } from 'date-fns'
import { displayProjectTitle, displayProjectTasks } from "./tasksRenderer"

const tasksList = document.getElementById("tasks-list")
const addTask = document.getElementById("add-task")

const filteredTaskContainer = (title, date, priority, project) => {
    const taskContainer = document.createElement("div")
    taskContainer.classList.add("task-container")
    const taskHeader = document.createElement("p")
    taskHeader.classList.add("task-header")
    taskHeader.textContent = title
    const taskDate = document.createElement("p")
    taskDate.classList.add("task-date")
    taskDate.textContent = date
    const taskPriority = document.createElement("span")
    taskPriority.classList.add("filtered-task-priority")
    if (priority) {
        taskPriority.textContent = "Important"
    }
    const taskProject = document.createElement("span")
    taskProject.classList.add("task-project")
    taskProject.textContent = project

    taskContainer.appendChild(taskHeader);
    taskContainer.appendChild(taskDate);
    taskContainer.appendChild(taskProject);
    taskContainer.appendChild(taskPriority);
    tasksList.appendChild(taskContainer)
}

const findImportant = () => {
    projectList.forEach(project => {
        let taskList = project.taskList
        taskList.forEach(task => {
            if (task.priority) {
                filteredTaskContainer(task.title, task.date, task.priority, project.name)
            }
        })
    })
}

const findToday = () => {
    let currentDay = format(new Date(), "dd/MM/yyyy")
    projectList.forEach(project => {
        let taskList = project.taskList
        taskList.forEach(task => {
            if (task.date == currentDay) {
                filteredTaskContainer(task.title, task.date, task.priority, project.name)
            }
        })
    })
}

const findThisWeek = () => {
    let nextWeek = format(addDays(new Date(), 7), "dd/MM/yyyy")
    projectList.forEach(project => {
        let taskList = project.taskList
        taskList.forEach(task => {
            if (task.date <= nextWeek) {
                filteredTaskContainer(task.title, task.date, task.priority, project.name)
            }
        })
    })
}

const addLinkToProject = (projectName) => {
    displayProjectTitle(projectName)
    displayProjectTasks(projectName)
}

const filtersListeners = () => {
    tasksList.addEventListener("click", (e) => {
        if (e.target.classList.contains("task-project")) {
            addLinkToProject(e.target.textContent)
        }
    })


    const projectTitle = document.getElementById("project-title")
    const important = document.getElementById("important")
    important.addEventListener("click", () => {
        projectTitle.textContent = "Important Tasks"
        tasksList.innerHTML = "";
        addTask.style.display = "none"
        findImportant();
    })

    const today = document.getElementById("today")
    today.addEventListener("click", () => {
        projectTitle.textContent = "Today's Tasks"
        tasksList.innerHTML = "";
        addTask.style.display = "none"
        findToday()
    })


    const nextWeek = document.getElementById("next-week")
    nextWeek.addEventListener("click", () => {
        projectTitle.textContent = "This Week's Tasks"
        tasksList.innerHTML = "";
        addTask.style.display = "none"
        findThisWeek()

    })




}


export { filtersListeners }