import populateTodoList from '../dom/popuplateTodoList';
import { filters } from '../dom/querySelectors';

export default function clearFilter() {
  filters.forEach((filter) => {
    filter.dataset.status = 'inactive';
  });
  populateTodoList();
}
