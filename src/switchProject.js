import projectManager from "./projectManager";
import handleTodoFormInput from "./todoFormHandler";
import createDOMTodo from "./createDOMTodo";
import { saveProjectToLocal } from "./handleLocalStorage";

export default function switchProject(defaultProject) {
    let activeProject = defaultProject;

    // Use event delegation to check for newly-added project-title
    document.body.addEventListener('click', function(event) {
        if (event.target.classList.contains('project-title')) {
            const projectName = event.target.textContent;
            const clickedProject = projectManager.projectLists.find(project => project.projectName === projectName); // Find the project in the array

            // Change activeProject based on the clicked project
            if (clickedProject) {
                activeProject = clickedProject;
                handleTodoFormInput(activeProject);
                console.log(`Now project ${activeProject.projectName}`);
                console.log(activeProject.getTodoItems());
                // Clear DOM elements for mainContainer when switching to the selected project
                const mainContainer = document.querySelector('.main-container');
                mainContainer.innerHTML = "";

                // Load todo elements for the chosen, active project
                activeProject.getTodoItems().forEach(todoItem => {
                    createDOMTodo(todoItem);
                });
         
              saveProjectToLocal(activeProject);
            }
        }
    });

    return activeProject;
}