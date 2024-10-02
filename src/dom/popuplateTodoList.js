import ProjectContainer from '../class/ProjectContainer';
import todoElement from './todoElement';

export default function populateTodoList(
  todoList = ProjectContainer.getActiveProject().list,
  container = document.querySelector('.todo-list-container')
) {
  container.innerHTML = '';
  todoList.forEach((todo) => {
    container.appendChild(todoElement(todo));
  });

  const heading = document.querySelector('.todo-heading');
  heading.innerText = ProjectContainer.getActiveProject().name;
}
