const taskList = [];
//let taskID = 0
let taskID = localStorage.getItem('taskID') ? JSON.parse(localStorage.getItem('taskID')) : 0
localStorage.setItem('taskID', JSON.stringify(taskID))

const taskFactory = (title, dueDate, priority) => {
    let id = taskID
    let task = { title, dueDate, priority, id };
    taskID++
    localStorage.setItem('taskID', JSON.stringify(taskID))
    taskList.push(task);
    return task
};

export { taskList, taskFactory };