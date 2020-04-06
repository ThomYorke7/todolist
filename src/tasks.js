const taskList = [];

const taskFactory = (title, description, dueDate, priority) => {
    let task = { title, description, dueDate, priority };
    taskList.push(task);
    return task
};

export { taskList, taskFactory };