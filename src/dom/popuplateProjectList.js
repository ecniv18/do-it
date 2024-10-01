import ProjectContainer from '../class/ProjectContainer';
import projectElement from './projectElement';

export default function populateProjectList(
  container = document.querySelector('.project-list')
) {
  container.innerHTML = '';
  ProjectContainer.list.forEach((project) => {
    container.appendChild(projectElement(project));
  });
}
