import { saveTodoToLocal, saveProjectToLocal } from "./handleLocalStorage";

export default function toggleCompletion(activeProject) {
    document.addEventListener("DOMContentLoaded", function () {
        const mainContainer = document.querySelector(".main-container");

        mainContainer.addEventListener('change', function (event) {
            const dotCheckmark = event.target.closest('.dot-checkmark');

            if (dotCheckmark) {
                const todoItem = dotCheckmark.closest('.todo-item');
                const isChecked = dotCheckmark.checked;

                todoItem.classList.toggle('completed', isChecked);
                saveTodoToLocal(todoItem);
                saveProjectToLocal(activeProject);
                console.log(`Todo item "${todoItem.querySelector('.item-content').innerText}" is ${isChecked ? 'checked' : 'unchecked'}`);
            }
        });
    });
}
