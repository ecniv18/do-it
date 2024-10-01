import Project from '../class/Project';
import ProjectContainer from '../class/ProjectContainer';
import { sendErrorMsg } from '../dom/errorMsg';
import { validateProject } from './validation';
import populateProjectList from '../dom/popuplateProjectList';

export function createProject(name) {
  const errors = validateProject(name);
  if (errors.length > 0) {
    sendErrorMsg(errors, document.querySelector('.project-form'));
    return;
  }

  ProjectContainer.addProject(new Project(name));
  populateProjectList();
  document.querySelector('.project-form').remove();
}
