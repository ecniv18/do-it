import ProjectContainer from '../class/ProjectContainer';
import populateTodoList from '../dom/popuplateTodoList';
import { filters } from '../dom/querySelectors';

export default function filterTodos(filter) {
  filters.forEach((f) => {
    if (f.dataset.name === filter.dataset.name) {
      if (filter.dataset.active !== 'inactive') {
        f.dataset.status = 'active';
      } else {
        f.dataset.status = 'inactive';
      }
    } else {
      f.dataset.status = 'inactive';
    }
  });

  const filteredTodos = ProjectContainer.getActiveProject().list.filter(
    (todo) => {
      console.log(todo.priority, filter.dataset.name);
      if (todo.priority === filter.dataset.name) {
        return todo;
      }
    }
  );

  populateTodoList(filteredTodos);
}
