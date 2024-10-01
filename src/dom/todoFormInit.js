import createTodo from "../func/createTodo";
import populateTodoList from "./popuplateTodoList";

export default function todoFormInit() {
  const titleInput = document.querySelector(".title-input");
  const descInput = document.querySelector(".desc-textarea");
  const dueDateInput = document.querySelector(".time-input");
  const prioritySelect = document.querySelector(".priority-select");
  const submitButton = document.querySelector(".submit-button");

  submitButton.addEventListener("click", (e) => {
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
