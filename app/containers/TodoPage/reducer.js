/*
 *
 * TodoPage reducer
 *
 */

import { fromJS } from 'immutable';
import uid from 'uid';
import {
  LOAD_TODOS_SUCCESS,
  LOAD_TODOS,
  LOAD_TODOS_ERROR,
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_TODO,
} from './constants';

const initialState = fromJS({
  loading: false,
  error: false,
  todos: [
    {
      id: uid(),
      type: 'personal',
      name: 'DogePosting',
      completed: false,
    },
    {
      id: uid(),
      type: 'business',
      name: 'Spotkanie pod krawatem',
      completed: false,
    },
  ],
});

function todoPageReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_TODOS:
      return state
        .set('loading', true)
        .set('error', false)
        .set('todos', false);
    case LOAD_TODOS_SUCCESS:
      return state
        .set('todos', action.todos)
        .set('loading', false);
    case LOAD_TODOS_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false);
    case ADD_TODO:
      return state;
    case REMOVE_TODO:
      return state;
    case TOGGLE_TODO:
      return state.update('todos', (todos) =>
          todos.map((todo) => todo.get('id') === action.id
            ? todo.update('completed', (completed) => !completed)
            : todo
          )
      );
    default:
      return state;
  }
}

export default todoPageReducer;
