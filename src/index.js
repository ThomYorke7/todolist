// Import Declarations
import { projectList } from "./projects"
import { deleteProjectListener, createNotice, displayProjects } from "./projectsRenderer"
import { taskListeners, displayProjectTasks } from "./tasksRenderer"
import { taskFormHandler, submitTask, taskCounter } from "./taskModal"
import { projectHandler } from "./projectModal"
import { filtersListeners } from "./filters"

// Count existing tasks
taskCounter()

// Load existing projects and tasks
displayProjects()
projectList.forEach(project => {
    displayProjectTasks(project.name)
});

// Load general banner to select or create projects
createNotice()

// Load project modal
projectHandler()

// Load project delete option
deleteProjectListener();

// Load tasks modal
taskListeners();
taskFormHandler();
submitTask();

// Load filters
filtersListeners()