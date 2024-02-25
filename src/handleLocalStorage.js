import projectManager from "./projectManager";
import createProjectList from "./createProjectList";


// Saves a newly-generated todo to local storage
export function saveTodoToLocal(todo) {
    localStorage.setItem("todoData", JSON.stringify(todo));
}

export function getTodoFromLocal() {
    return JSON.parse(localStorage.getItem("todoData"));
}

export function saveTodoIdToLocal(id) {
    localStorage.setItem("todoIdCounterData", id);
}

export function getTodoIdFromLocal() {
    return JSON.parse(localStorage.getItem("todoIdCounterData"));
}

// going to have to rewrite this so the JSON data is an array ordered by id or smth. That way loadProjectFromLocal should load all back into projectManager
export function saveProjectToLocal(project) {
    localStorage.setItem("projectData", JSON.stringify(project));
}

//This only loads the last created project. Need to aggregate over projectlists[] to load them all
export function loadProjectFromLocal() {
    let loadedProject = JSON.parse(localStorage.getItem("projectData"));
     
    // Check if there's no project loaded
    if (!loadedProject) {
        console.log("No project data found in local storage.");
        return null;
    }

    // Add properties and functions back to loaded project
    loadedProject = {
        projectName: loadedProject ? loadedProject.projectName : "Default",
        todoItems: loadedProject ? loadedProject.todoItems : [],
        getTodoItems: () => [...todoItems],
        addTodoItems: (todoItem) => todoItems.push(todoItem),
        deleteTodoItem: (todoId) => {
            projectManager.deleteTodoItemFromAllProjects(todoId);
        },
    };
    
    // Find the project in projectManager with the same projectName
    const projectIndex = projectManager.projectLists.findIndex(project => project.projectName === loadedProject.projectName);
    
    if (projectIndex !== -1) {
        // Replace the existing project with the loaded project
        projectManager.projectLists[projectIndex] = loadedProject;
    } else {
        // If no matching project found, add the loaded project to projectManager
        projectManager.addProjectToList(loadedProject);
    }
    
    return loadedProject;
}



export function addProjectFunctionsBack(project, projectManager) {
    // Add properties and functions back to the loaded project
    project.projectName = project ? project.projectName : "Default";
    project.todoItems = project ? project.todoItems : [];
    project.getTodoItems = () => [...project.todoItems];
    project.addTodoItems = (todoItem) => project.todoItems.push(todoItem);
    project.deleteTodoItem = (todoId) => {
        projectManager.deleteTodoItemFromAllProjects(todoId);
    };
    return project;
}


// 
export function saveDOMData(){
    const mainContainer = document.querySelector('main');
    const projectTitles = mainContainer.querySelectorAll('.project-title');
    
    const data = {
        mainContent: mainContainer.innerHTML,
        projectTitles: Array.from(projectTitles).map(title => title.innerHTML),
    };
    localStorage.setItem("DOMData", JSON.stringify(data));
    console.log("DOM data saved:", data);
}
// So far, it does load, but the DOM data have no association with the datastructure and logic above
// keep getting function reference errors, which suggests that projects aren't being bound properly.
export function loadDOMData(){
    const mainContainer = document.querySelector('main');
    const savedData = JSON.parse(localStorage.getItem("DOMData"));

    if (savedData) {
        mainContainer.innerHTML = savedData.mainContent;

        const projectTitles = mainContainer.querySelectorAll('.project-title');
        const savedTitles = savedData.projectTitles;

        projectTitles.forEach((title, index) => {
            title.innerHTML = savedTitles[index];
        });
    }
}
