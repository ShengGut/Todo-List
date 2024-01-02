export default function createTodoItem(title, description, dueDate, priority) {
  
    return {
      title: title || 'Default Title',
      description: description || 'No description',
      dueDate: dueDate || null,
      priority: priority || 'low'
  };
}
