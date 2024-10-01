import { createProject } from '../func/createProject';
import populateProjectList from './popuplateProjectList';

export default function projectForm() {
  const form = document.createElement('form');
  const nameInput = document.createElement('input');
  const submitButton = document.createElement('button');
  const closeButton = document.createElement('button');

  form.classList.add('project-form');
  nameInput.classList.add('project-name-input');
  submitButton.classList.add('project-submit-button');
  closeButton.classList.add('project-close-button');

  nameInput.type = 'text';
  submitButton.innerText = 'Create';
  closeButton.innerText = 'Close';

  submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    createProject(nameInput.value);
  });

  closeButton.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('.project-form').remove();
  });

  form.appendChild(nameInput);
  form.appendChild(submitButton);
  form.appendChild(closeButton);

  return form;
}
