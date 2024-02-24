const projectManager = { //perhaps the problem is that it is also equaling to the properties below. Maybe use ternary here to load
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

export function saveProjectManager(projectManager) {
    console.log("saved project manager!")
    localStorage.setItem("projectManagerData", JSON.stringify(projectManager));
    console.log("test load in save method:", JSON.parse(localStorage.getItem("projectManagerData")));
}

export function loadProjectManager() {
    let loadedProjectManager = JSON.parse(localStorage.getItem("projectManagerData"));
    console.log("project manager successfully loaded!");
    // If no data is found, return a new instance of projectManager
    if (loadedProjectManager === null) {

        return projectManager;
    }

    // If data is found, load projectLists and re-create functions
    loadedProjectManager = {
        projectLists: loadedProjectManager.projectLists,
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
    return loadedProjectManager;
}


export default projectManager;
