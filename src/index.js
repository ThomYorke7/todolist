import { taskList, taskFactory } from "./tasks"
import { projectFactory } from "./projects"
import { promptNewProject } from "./projectsRenderer"
import { eventListener } from "./tasksRenderer"
import { taskFormHandler, submitTask } from "./taskModal"


promptNewProject();
eventListener();
taskFormHandler();
submitTask();