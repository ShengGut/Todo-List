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

export function saveProjectToLocal(project) {
    localStorage.setItem("projectData", JSON.stringify(project));
}

export function loadProjectFromLocal() {
    let loadedProject = JSON.parse(localStorage.getItem("projectData"));
    // add properties and functions back to loaded project
    loadedProject = {
        projectName: loadedProject ? loadedProject.projectName : "Default",
        todoItems: loadedProject ? loadedProject.todoItems : [],
        getTodoItems: () => [...todoItems],
        addTodoItems: (todoItem) => todoItems.push(todoItem),
        deleteTodoItem: (todoId) => {
            projectManager.deleteTodoItemFromAllProjects(todoId);
        },
    };
    return loadedProject;
}

// export function saveDOMData(){
//     const mainContainer = document.querySelector('main');
//     const projectTitles = mainContainer.querySelectorAll('.project-title');
    
//     const data = {
//         mainContent: mainContainer.innerHTML,
//         projectTitles: Array.from(projectTitles).map(title => title.innerHTML),
//         todoItems: saveToDoData(projectManager.projectLists.flatMap(project => project.todoItems)),
//         projectLists: saveProjectData(projectManager.projectLists)
//     };

//     localStorage.setItem("DOMData", JSON.stringify(data));
//     console.log("DOM data saved:", data);
// }

// export function loadDOMData(){
//     const mainContainer = document.querySelector('main');
//     const savedData = JSON.parse(localStorage.getItem("DOMData"));

//     if (savedData) {
//         mainContainer.innerHTML = savedData.mainContent;

//         const projectTitles = mainContainer.querySelectorAll('.project-title');
//         const savedTitles = savedData.projectTitles;

//         projectTitles.forEach((title, index) => {
//             title.innerHTML = savedTitles[index];
//         });

//         const savedTodoItems = savedData.todoItems || [];
//         const savedProjectLists = savedData.projectLists || [];

//         // Update the project manager with the loaded data
//         savedProjectLists.forEach(savedProject => {
//             const project = createProjectList(savedProject.projectName);
//             savedProject.todoItems.forEach(todoItem => {
//                 project.addTodoItems(todoItem);
//             });
//         });

//         // Update todo items
//         projectManager.projectLists.forEach(project => {
//             const savedProject = savedProjectLists.find(savedProject => savedProject.projectName === project.projectName);
//             if (savedProject) {
//                 project.todoItems.forEach(todoItem => {
//                     const savedTodoItem = savedTodoItems.find(item => item.id === todoItem.id);
//                     if (savedTodoItem) {
//                         todoItem.description = savedTodoItem.description;
//                         todoItem.priority = savedTodoItem.priority;
//                         todoItem.dueDate = savedTodoItem.dueDate;
//                         todoItem.status = savedTodoItem.status;
//                     }
//                 });
//             }
//         });
//         projectManager.projectLists = savedProjectLists;
//     }
// }

// // When a todo is generated, it will save all properties/index of that todo
// function saveToDoData(todoItems) {
//     localStorage.setItem("todoItems", JSON.stringify(todoItems));
// }

// function loadToDoData() {
//     const savedTodoItems = JSON.parse(localStorage.getItem("todoItems"));
//     return savedTodoItems || [];
// }


// // When a new project is created, or a todo is added to it, it will save all the data for the project array
// function saveProjectData(projectLists) {
//     localStorage.setItem("projectLists", JSON.stringify(projectLists));
// }

// function loadProjectData() {
//     const savedProjectLists = JSON.parse(localStorage.getItem("projectLists"));
//     return savedProjectLists || [];
// }

