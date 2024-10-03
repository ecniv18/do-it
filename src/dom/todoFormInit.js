import createTodo from '../func/createTodo';
import populateTodoList from './popuplateTodoList';
import {
  titleInput,
  descInput,
  dueDateInput,
  prioritySelect,
  submitButton,
} from './querySelectors';

export default function todoFormInit() {
  submitButton.addEventListener('click', (e) => {
    e.preventDefault();

    createTodo(
      titleInput.value,
      descInput.value,
      dueDateInput.value,
      prioritySelect.value
    );

    populateTodoList();
  });
}

/**
 * <div class="form-container">
          <form class="form">
            <input type="text" class="title-input" />
            <textarea class="desc-texarea"></textarea>
            <input type="date" />
            <select class="priority">
              <option value="high">High</option>
              <option value="high">Normal</option>
              <option value="high">Lowest</option>
            </select>
            <button>Submit</button>
          </form>
        </div>
 */
