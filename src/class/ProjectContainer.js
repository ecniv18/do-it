import clearFilter from '../func/clearFilter';
import DefaultProject from './DefaultProject';

export default class ProjectContainer {
  // already include the default project
  static #list = [DefaultProject];

  static get list() {
    return this.#list;
  }

  static addProject(project) {
    this.#list.push(project);
  }

  static getActiveProject() {
    return this.#list.reduce((acc, curr) => {
      if (curr.activeStatus === true) {
        acc = curr;
      }
      return acc;
    });
  }

  static setActiveProject(project) {
    project.setActive();
    clearFilter();
    this.#list.forEach((proj) => {
      if (proj.id !== project.id) {
        proj.setInactive();
      }
    });
  }
}
