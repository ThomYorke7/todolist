import { taskList, taskFactory } from "./tasks"
import { projectFactory, projectList } from "./projects"
import { promptNewProject, deleteProjectListener, createNotice, displayProjects } from "./projectsRenderer"
import { taskListeners, displayProjectTasks } from "./tasksRenderer"
import { taskFormHandler, submitTask, taskCounter } from "./taskModal"
import { filtersListeners } from "./filters"

taskCounter()
displayProjects()
projectList.forEach(project => {
    displayProjectTasks(project.name)
});
createNotice()
promptNewProject();
deleteProjectListener();
taskListeners();
taskFormHandler();
submitTask();
filtersListeners()



/*
migliorare css
pulire file
scegliere colore nome progetti nel prompt
mostrare colori progetti nei filtri
implementare chiusura form per nuovi task / progetti
aggiungere ricerca
*/