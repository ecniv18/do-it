const { v4: uuidv4 } = require('uuid');

export default class Project {
  constructor(name) {
    this.name = name;
    this.list = [];
    this.id = uuidv4();
    this.activeStatus = false;
  }

  setActive() {
    this.activeStatus = true;
  }

  setInactive() {
    this.activeStatus = false;
  }

  addTodo(todo) {
    this.list.push(todo);
  }

  deleteTodo(todoId) {
    this.list = this.list.filter((todo) => {
      return todo.id !== todoId;
    });
  }
}
