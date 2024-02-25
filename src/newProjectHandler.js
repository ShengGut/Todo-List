import createProjectList from "./createProjectList";
import { saveDOMData, saveProjectToLocal } from "./handleLocalStorage";

export default function handleNewProject(inputElement) {
    const projectName = prompt("Enter the name of the new project:");
    
    if (projectName) {
        const newProject = createProjectList(projectName); //creates a new project with the name. projectManager automatically adds it to the list.

        // create new DOM element in main, added before class new-list
        const newProjectElement = document.createElement('h2');
        newProjectElement.textContent = projectName;
        newProjectElement.classList.add('project-title');
 
        const newProjectListElement = document.querySelector('.new-list');
        newProjectListElement.parentNode.insertBefore(newProjectElement, newProjectListElement);
        saveProjectToLocal(newProject);
        saveDOMData();
    }
}