export default function todoElement(prop) {
  const container = document.createElement('li');
  const todo = document.createElement('article');
  const todoInfoCont = document.createElement('div');
  const todoTitle = document.createElement('h3');
  const todoDesc = document.createElement('p');
  const todoControlsCont = document.createElement('div');
  const todoModifyButton = document.createElement('button');
  const todoTrashButton = document.createElement('button');
  const todoDate = document.createElement('span');
  const todoPriority = document.createElement('span');

  todo.classList.add('todo');
  todoInfoCont.classList.add('todo-info');
  todoTitle.classList.add('todo-title');
  todoDesc.classList.add('todo-description');
  todoControlsCont.classList.add('todo-controls');
  todoModifyButton.classList.add('todo-modify-button');
  todoTrashButton.classList.add('todo-trash-button');
  todoDate.classList.add('todo-date');
  todoPriority.classList.add('todo-priority');

  // contents
  todoTitle.innerText = prop.title;
  todoDesc.innerText = prop.description;
  todoDate.innerText = prop.dueDate;
  todoPriority.innerText = prop.priority;
  todoModifyButton.innerText = 'modify';
  todoTrashButton.innerText = 'trash';

  container.appendChild(todo);
  todo.appendChild(todoInfoCont);
  todo.appendChild(todoControlsCont);
  todoInfoCont.appendChild(todoTitle);
  todoInfoCont.appendChild(todoDesc);
  todoInfoCont.append(todoPriority);
  todoControlsCont.appendChild(todoModifyButton);
  todoControlsCont.appendChild(todoTrashButton);
  todoControlsCont.appendChild(todoDate);

  return container;
}

/**
 *  <li class="todo-wrapper">
              <article class="todo">
                <div class="todo-info">
                  <h3 class="todo-title">title</h3>
                  <p clas="todo-description">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Voluptatem ipsa beatae modi recusandae corrupti quam?
                  </p>
                </div>
                <div class="todo-controls">
                  <button class="todo-modify-button">modify</button>
                  <button class="todo-trash-button">trash</button>
                </div>
              </article>
            </li>
 * 
 */
