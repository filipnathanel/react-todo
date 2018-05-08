import React from 'react';

const TodoForm = (props) => {
  return (
    <form>
      <input type="text" placeholder="What are you going to do?" />
      <input type="text" placeholder="where" />
    </form>
  );
};

export default TodoForm;
