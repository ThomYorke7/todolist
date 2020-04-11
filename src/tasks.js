// Import Declarations
import { format } from 'date-fns'


// Global Variables
const taskList = [];
let taskID = localStorage.getItem('taskID') ? JSON.parse(localStorage.getItem('taskID')) : 0
localStorage.setItem('taskID', JSON.stringify(taskID))


// Task Factory
const taskFactory = (title, dueDate, priority) => {
    let id = taskID
    let date = null
    if (dueDate != "") {
        date = format(new Date(dueDate), "dd/MM/yyyy")
    }
    let task = { title, date, priority, id };
    taskID++
    localStorage.setItem('taskID', JSON.stringify(taskID))
    taskList.push(task);
    return task
};

export { taskList, taskFactory };