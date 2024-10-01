import ProjectContainer from '../class/ProjectContainer';
import todoElement from './todoElement';

export default function populateTodoList(
  container = document.querySelector('.todo-list-container')
) {
  container.innerHTML = '';
  ProjectContainer.getActiveProject().list.forEach((todo) => {
    container.appendChild(todoElement(todo));
  });

  const heading = document.querySelector('.todo-heading');
  heading.innerText = ProjectContainer.getActiveProject().name;
}
