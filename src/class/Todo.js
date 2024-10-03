import { v4 as uuidv4 } from 'uuid';
import ProjectContainer from './ProjectContainer';

export default class Todo {
  constructor(title, description, dueDate, priority) {
    const formattedDate = dueDate === '' ? new Date() : new Date(dueDate);
    this.title = title;
    this.description = description;
    this.id = uuidv4();
    this.dueDate = `${formattedDate.getMonth()} / ${formattedDate.getDay()}`;
    this.priority = priority;
    this.projectId = ProjectContainer.getActiveProject().id;

    console.log(this.projectId);
  }
}
