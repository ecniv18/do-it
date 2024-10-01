import DefaultProject from '../class/DefaultProject';
import ProjectContainer from '../class/ProjectContainer';
import Todo from '../class/Todo';
import { removeErrorMsg, sendErrorMsg } from '../dom/errorMsg';

import { validateTodo } from './validation';

export default function createTodo(title, description, dueDate, priority) {
  const errors = validateTodo({ title, description, dueDate, priority });
  if (errors.length > 0) {
    sendErrorMsg(errors);
    return;
  } else {
    removeErrorMsg();
  }
  const newTodo = new Todo(title, description, dueDate, priority);
  if (ProjectContainer.getActiveProject() !== DefaultProject) {
    DefaultProject.addTodo(newTodo);
  }

  ProjectContainer.getActiveProject().addTodo(newTodo);
}
