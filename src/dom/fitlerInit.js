import { filterClearBtn, filters } from './querySelectors';
import filterTodos from '../func/filter';
import populateTodoList from './popuplateTodoList';
import clearFilter from '../func/clearFilter';

export default function filterTodosInit() {
  filters.forEach((filter) => {
    filter.addEventListener('click', (e) => {
      e.preventDefault();
      filterTodos(filter);
    });
  });
  filterClearBtn.addEventListener('click', (e) => {
    e.preventDefault();
    clearFilter();
  });
}
