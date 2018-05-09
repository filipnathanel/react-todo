import React from 'react';

import { VisibilityFilters } from 'containers/TodoPage/actions';
import Wrapper from './Wrapper';
import Filter from './Filter';

function Filters() {
  return (
    <Wrapper>
      <Filter filter={VisibilityFilters.SHOW_ALL}>All</Filter>
      <Filter filter={VisibilityFilters.SHOW_ACTIVE}>Active</Filter>
      <Filter filter={VisibilityFilters.SHOW_COMPLETED}>Completed</Filter>
    </Wrapper>
  );
}

export default Filters;
