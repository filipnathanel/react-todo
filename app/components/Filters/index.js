import React from 'react';
import {
  SHOW_ALL,
  SHOW_ACTIVE,
  SHOW_COMPLETED,
} from 'containers/TodoPage/constants';
import Wrapper from './Wrapper';
import Filter from './Filter';

function Filters() {
  return (
    <Wrapper>
      <Filter filter={SHOW_ALL}>All</Filter>
      <Filter filter={SHOW_ACTIVE}>Active</Filter>
      <Filter filter={SHOW_COMPLETED}>Completed</Filter>
    </Wrapper>
  );
}

export default Filters;
