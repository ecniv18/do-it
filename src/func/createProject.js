import Project from "../class/Project";
import ProjectContainer from "../class/ProjectContainer";

export function createProject(name) {
  ProjectContainer.addProject(new Project(name));
}
