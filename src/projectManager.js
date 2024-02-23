// projectManager.js
const projectManager = {
    projectLists: [],
    addProjectToList: function(project) {
        this.projectLists.push(project);
    },
    deleteTodoItemFromAllProjects: function(todoId) {
        this.projectLists.forEach(project => {
            const indexToDelete = project.todoItems.findIndex(todo => todo.id === todoId);
            if (indexToDelete !== -1) {
                project.todoItems.splice(indexToDelete, 1);
                console.log(`Todo with ID ${todoId} deleted from project: ${project.projectName}`);
            }
        });
    }
};

export default projectManager;
