export default function createTodoItem(title, description, dueDate, priority, status) {

    return {
      title: title || 'Default Title',
      description: description || 'No description',
      dueDate: dueDate || null,
      priority: priority || 'low',
      status: "Incomplete"
  };
}
