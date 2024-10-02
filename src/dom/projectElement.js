import ProjectContainer from '../class/ProjectContainer';
import populateTodoList from './popuplateTodoList';

export default function projectElement(project) {
  const container = document.createElement('li');
  const link = document.createElement('a');
  container.appendChild(link);
  link.href = '#';
  link.innerText = project.name;

  link.addEventListener('click', (e) => {
    e.preventDefault();
    ProjectContainer.setActiveProject(project);

    populateTodoList();
  });

  return container;
}
