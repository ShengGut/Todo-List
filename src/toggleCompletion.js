import changeStatus from './changeToDoItem.js';

export default function toggleCompletion() {
    document.addEventListener("DOMContentLoaded", function () {

    
        const dotCheckmarks = document.querySelectorAll('.dot-checkmark');
    
        dotCheckmarks.forEach(dotCheckmark => {
            dotCheckmark.addEventListener('change', function () {

                const todoItem = dotCheckmark.closest('.todo-item');
                const isChecked = dotCheckmark.checked;
    

                todoItem.classList.toggle('completed', isChecked);
    

                console.log(`Todo item "${todoItem.querySelector('.item-content').innerText}" is ${isChecked ? 'checked' : 'unchecked'}`);
            });
        });
    });
    
}
