import { format } from 'date-fns'

const taskList = [];
//let taskID = 0
let taskID = localStorage.getItem('taskID') ? JSON.parse(localStorage.getItem('taskID')) : 0
localStorage.setItem('taskID', JSON.stringify(taskID))

const taskFactory = (title, dueDate, priority) => {
    let id = taskID
    let date = format(new Date(dueDate), "dd/MM/yyyy")
    let task = { title, date, priority, id };
    taskID++
    localStorage.setItem('taskID', JSON.stringify(taskID))
    taskList.push(task);
    console.log(task)
    return task
};

export { taskList, taskFactory };