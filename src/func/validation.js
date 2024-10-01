// return an array of error objects to be used a
export function validateTodo(todo) {
  const errors = [];
  if (todo.title.length <= 0) {
    errors.push('title is required');
  }
  if (todo.title.length > 20) {
    errors.push('title must not be more than 20 characters');
  }
  if (todo.description.length <= 0) {
    errors.push('description is required');
  }
  if (todo.description.length > 100) {
    errors.push('description length must not be more than 100 characters');
  }

  console.log(errors);
  return errors;
}

export function validateProject(name) {
  const errors = [];
  if (name <= 0) {
    errors.push('Project name is required');
  }
  console.log(errors);
  return errors;
}
