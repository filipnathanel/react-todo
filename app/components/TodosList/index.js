import React from 'react';
import PropTypes from 'prop-types';

import List from 'components/List';
import LoadingIndicator from 'components/LoadingIndicator';
import TodoListItem from 'containers/TodoListItem';

function TodosList({ loading, error, todos }) {

  if (loading) {
    return <List component={LoadingIndicator} />;
  }

  if (todos !== false) {
    return <List items={todos} component={TodoListItem} />;
  }

}

TodosList.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
  todos: PropTypes.any,
};

export default TodosList;
