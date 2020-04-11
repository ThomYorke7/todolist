import { projectList } from "./projects"
import { deleteProjectListener, createNotice, displayProjects } from "./projectsRenderer"
import { taskListeners, displayProjectTasks } from "./tasksRenderer"
import { taskFormHandler, submitTask, taskCounter } from "./taskModal"
import { projectHandler } from "./projectModal"
import { filtersListeners } from "./filters"

taskCounter()
displayProjects()
projectList.forEach(project => {
    displayProjectTasks(project.name)
});
createNotice()
projectHandler()
deleteProjectListener();
taskListeners();
taskFormHandler();
submitTask();
filtersListeners()