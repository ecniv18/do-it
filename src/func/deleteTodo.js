import ProjectContainer from '../class/ProjectContainer';
import populateTodoList from '../dom/popuplateTodoList';

export default function deleteTodo(todoId, TodoProjectId) {
  console.log(ProjectContainer.getDefaultProject());
  ProjectContainer.getDefaultProject().deleteTodo(todoId);
  ProjectContainer.list.forEach((project) => {
    if (project.id === TodoProjectId) {
      project.deleteTodo(todoId);
    }
  });

  populateTodoList();
}
