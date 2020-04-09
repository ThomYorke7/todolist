import { taskList, taskFactory } from "./tasks"
import { projectFactory } from "./projects"
import { promptNewProject, deleteProjectListener, createNotice } from "./projectsRenderer"
import { taskListeners } from "./tasksRenderer"
import { taskFormHandler, submitTask } from "./taskModal"

createNotice()
promptNewProject();
deleteProjectListener();
taskListeners();
taskFormHandler();
submitTask();




/*
Aggiungere conferma rimozione progetto [X]
Visualizzare scritta se si cancella il progetto attivo ("es non ci sono progetti attivi, seleziona un progetto") [X]
Visualizzare scritta di default se projectlength = 0 per far aggiungere progetti [X]
Muovere today, this week e important in una sezione filters sotto i progetti e toglierci add task [X]
collegare localstorage
*/