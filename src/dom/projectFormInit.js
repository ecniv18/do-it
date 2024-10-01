import projectFormElement from './projectFormElement';

export default function projectFormInit() {
  const container = document.querySelector('.project-form-container');
  const projectFormButton = document.querySelector('.project-form-button');

  projectFormButton.addEventListener('click', () => {
    if (container.children.length > 0) return;
    container.appendChild(projectFormElement());
  });
}
