import Project from './Project';

class DeafaultProject extends Project {
  constructor(name) {
    super(name);
    this.activeStatus = true;
  }
}

export default (function () {
  return new DeafaultProject('All Todos');
})();
