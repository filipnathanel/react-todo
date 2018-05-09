import { createSelector } from 'reselect';

/**
 * Direct selector to the todoPage state domain
 */
const selectTodosDomain = (state) => state.get('todos');
const selectActiveTodoId = (state, props) => props.match.params.id;
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
  makeSelectTodos,
  getActiveTodo,
};

