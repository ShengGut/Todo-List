import createProjectList from "./createProjectList";

/* Write the logic for creating a new project here.
When "+ New List" is pressed, it should prompt the user for the name of the project
Then it should create the project with the entered name
Then it should update the todo task space with tasks specific to the new project
In addition, change "project-title" to the current named project
Lastly, it should create a new project title that's selectable via drop-down (if more than 2 projects)
Be sure to console log project for its array
*/

export default function handleNewProject(inputElement) {
    const projectName = prompt("Enter the name of the new project:");
    
    if (projectName) {
        const newProject = createProjectList(projectName);
        
        // Update project title in the UI
        const projectTitleElement = document.querySelector('.project-title');
        projectTitleElement.textContent = projectName;
        
        // Update todo task space with tasks specific to the new project
        const mainContainer = document.querySelector('.main-container');
        mainContainer.innerHTML = ""; // Clear existing todo items
        
        newProject.getTodoItems().forEach(todoItem => {
            createDOMTodo(todoItem); // Create DOM elements for todo items
        });
        
        console.log(newProject); // Console log the new project
    }
}
