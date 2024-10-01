import ProjectContainer from "../class/ProjectContainer";
import Todo from "../class/Todo";

export default function createTodo(title, description, dueDate, priority) {
  const newTodo = new Todo(title, description, dueDate, priority);
  // ProjectContainer.getDefaultProject().addTodo(newTodo);
  ProjectContainer.getActiveProject().addTodo(newTodo);
}
