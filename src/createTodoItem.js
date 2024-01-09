let todoIdCounter = 0;

export default function createTodoItem(title, description, dueDate, priority, status) {

    return {
      id: ++todoIdCounter,
      title: title || 'Default Title',
      description: description || 'No description',
      dueDate: dueDate || null,
      priority: priority || 'low',
      status: "Incomplete"
  };
}
