const taskList = [];
let taskID = 0

const taskFactory = (title, dueDate, priority) => {
    let id = taskID
    let task = { title, dueDate, priority, id };
    taskID++
    taskList.push(task);
    return task
};

export { taskList, taskFactory };