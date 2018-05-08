/*
 *
 * TodoPage actions
 *
 */

import uid from 'uid';

import {
  LOAD_TODOS,
  LOAD_TODOS_SUCCESS,
  LOAD_TODOS_ERROR,
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_TODO,
} from './constants';

/**
 * Load the todos, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_TODOS
 */
export function loadTodos() {
  return {
    type: LOAD_TODOS,
  };
}

/**
 * Dispatched when the todos are loaded by the request saga
 *
 * @param  {array} todos The todos data
 * @param  {string} username The current username
 *
 * @return {object}      An action object with a type of LOAD_TODOS_SUCCESS passing the todos
 */
export function todosLoaded(todos) {
  return {
    type: LOAD_TODOS_SUCCESS,
    todos,
  };
}

/**
 * Dispatched when loading the todos fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_TODOS_ERROR passing the error
 */
export function repoLoadingError(error) {
  return {
    type: LOAD_TODOS_ERROR,
    error,
  };
}

  return {
    type: TOGGLE_TODO,
    payload: {
      id,
    },
  };
}

export function removeTodo(id) {
  return {
    type: REMOVE_TODO,
    id,
  };
}

export function toggleTodo(id) {
  return {
    type: TOGGLE_TODO,
    id,
  };
}
