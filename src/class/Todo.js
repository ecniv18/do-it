export default class Todo {
  constructor(title, description, dueDate, priority) {
    const formattedDate = new Date(dueDate);
    this.title = title;
    this.description = description;
    this.dueDate = `${formattedDate.getMonth()} / ${formattedDate.getDay()}`;
    this.priority = priority;
  }
}
