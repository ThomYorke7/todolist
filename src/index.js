import { taskList, taskFactory } from "./tasks"
import { projectFactory, projectList } from "./projects"
import { promptNewProject, deleteProjectListener, createNotice, displayProjects } from "./projectsRenderer"
import { taskListeners, displayProjectTasks } from "./tasksRenderer"
import { taskFormHandler, submitTask, findActiveProject } from "./taskModal"
import { filtersListeners } from "./filters"

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
Aggiungere conferma rimozione progetto [X]
Visualizzare scritta se si cancella il progetto attivo ("es non ci sono progetti attivi, seleziona un progetto") [X]
Visualizzare scritta di default se projectlength = 0 per far aggiungere progetti [X]
Muovere today, this week e important in una sezione filters sotto i progetti e toglierci add task [X]
collegare localstorage
editare css e correggere grandezza cestino se non c'è priorità
*/