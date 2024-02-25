const projectManager = loadProjectManager() !== null ? loadProjectManager() : {
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
    localStorage.setItem("projectManagerData", JSON.stringify(projectManager));
}

export function loadProjectManager() {
    const storedData = localStorage.getItem("projectManagerData");

    if (!storedData) {
        console.log("No stored data found. Initializing new project manager.");
        return null;
    }

    try {
        const parsedData = JSON.parse(storedData);
        const loadedProjectManager = {
            projectLists: parsedData ? parsedData.projectLists : [],
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
        console.log("Project manager successfully loaded!");
        return loadedProjectManager;
    } catch (error) {
        console.error("Error loading project manager:", error);
        return null;
    }
}

export default projectManager;
