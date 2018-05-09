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
  EDIT_TODO,
  REMOVE_TODO,
  TOGGLE_TODO,
  SET_VISIBILITY_FILTER,
  SHOW_ALL,
  SET_SEARCH,
} from './constants';

const initialState = fromJS({
  loading: false,
  error: false,
  filter: SHOW_ALL,
  search: '',
  todos: [
    {
      id: uid(),
      type: 'personal',
      name: 'Postowanie śmiesznych psów',
      place: 'Dogecore',
      completed: true,
    },
    {
      id: uid(),
      type: 'business',
      name: 'Spotkanie pod krawatem',
      place: 'Mordor',
      completed: false,
    },
    {
      id: uid(),
      type: 'personal',
      name: 'Prasowanie dywanów',
      place: 'Dom Kolegów',
      completed: true,
    },
    {
      id: uid(),
      type: 'business',
      name: 'Pojedynek Programistów',
      place: 'superhacker.dev',
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
      return state.update('todos', (todos) =>
        todos.push(fromJS(action.todo)));
    case EDIT_TODO:
      return state.update('todos', (todos) =>
        todos.map((todo) => todo.get('id') === action.todo.id
          ? todo.merge(action.todo)
          : todo
        )
      );
    case REMOVE_TODO:
      return state.update('todos', (todos) =>
        todos.filter((todo) => todo.get('id') !== action.todo.id));
    case TOGGLE_TODO:
      return state.update('todos', (todos) =>
          todos.map((todo) => todo.get('id') === action.id
            ? todo.update('completed', (completed) => !completed)
            : todo
          )
      );
    case SET_VISIBILITY_FILTER:
      return state.set('filter', action.filter);
    case SET_SEARCH:
      return state.set('search', action.needle);
    default:
      return state;
  }
}

export default todoPageReducer;
