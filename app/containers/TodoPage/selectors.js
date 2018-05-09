import { createSelector } from 'reselect';
import {
  SHOW_ALL,
  SHOW_ACTIVE,
  SHOW_COMPLETED,
} from 'containers/TodoPage/constants';
/**
 * Direct selector to the todoPage state domain
 */
const selectTodosDomain = (state) => state.get('todos');
const selectActiveTodoId = (state, props) => props.match.params.id;
const selectFilterFromProps = (state, props) => props.filter;
/**
 * Other specific selectors
 */

const makeSelectLoading = () => createSelector(
  selectTodosDomain,
  (todosState) => todosState.get('loading')
);

const makeSelectError = () => createSelector(
  selectTodosDomain,
  (todosState) => todosState.get('error')
);

const makeSelectActiveFilter = () => createSelector(
  selectTodosDomain,
  (todosState) => todosState.get('filter')
);

const makeSelectSearch = () => createSelector(
  selectTodosDomain,
  (todosState) => todosState.get('search')
);

const selectIsFilterActive = createSelector(
  selectFilterFromProps,
  makeSelectActiveFilter(),
  (itemFilter, activeFilter) => itemFilter === activeFilter
);


const makeSelectTodos = () => createSelector(
  selectTodosDomain,
  (todosState) => todosState.get('todos').toJS()
);

const makeSelectFilteredTodos = () => createSelector(
  makeSelectTodos(),
  makeSelectActiveFilter(),
  (todos, activeFilter) => {
    switch (activeFilter) {
      case SHOW_ALL:
        return todos;
      case SHOW_ACTIVE:
        return todos.filter((todo) => !todo.completed);
      case SHOW_COMPLETED:
        return todos.filter((todo) => todo.completed);
      default:
        throw new Error('unknow Filter');
    }
  }
);

const makeSelectVisibleTodos = () => createSelector(
  makeSelectFilteredTodos(),
  makeSelectSearch(),
  (todos, search) => {
    if (search.length > 0) {
      return todos.filter((todo) => todo.name.toLowerCase().indexOf(search.toLowerCase()) >= 0);
    }
    return todos;
  }
);

const getActiveTodo = () => createSelector(
  makeSelectTodos(),
  selectActiveTodoId,
  (todos, id) => {
    if (id) {
      return todos.filter((todo) => todo.id === id)[0];
    }
    return false;
  }
);


// makeSelectTodo = (id) => createSelector([getTodo])

export default makeSelectTodos;
export {
  selectTodosDomain,
  makeSelectLoading,
  makeSelectError,
  makeSelectActiveFilter,
  makeSelectTodos,
  getActiveTodo,
  selectIsFilterActive,
  makeSelectVisibleTodos,
};

