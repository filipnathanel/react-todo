import { createSelector } from 'reselect';

/**
 * Direct selector to the todoPage state domain
 */
const selectTodosDomain = (state) => state.get('todos');

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

const makeSelectTodos = () => createSelector(
  selectTodosDomain,
  (todosState) => todosState.get('todos').toJS()
);

export default makeSelectTodos;
export {
  selectTodosDomain,
  makeSelectLoading,
  makeSelectError,
  makeSelectTodos,
};
