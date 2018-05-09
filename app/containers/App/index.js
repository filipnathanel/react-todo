/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import TodoPage from 'containers/TodoPage/Loadable';
import AddPage from 'containers/AddPage';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import media from 'utils/media';
import * as colors from 'utils/colors';

const AppWrapper = styled.div`
  max-width: calc( 481px + 3.5vw * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100vh;
  padding: 0 16px;
  flex-direction: column;
  // background-color:${colors.lightGray};

  ${media.mobile`
    max-width:100%;
    padding:0;
  `}
`;

export default function App() {
  return (
    <AppWrapper>
      <Helmet
        titleTemplate="%s - React.js Boilerplate"
        defaultTitle="React.js Boilerplate"
      >
        <meta name="description" content="A React.js Boilerplate application" />
      </Helmet>
      <Switch>
        <Route exact path="/" component={TodoPage} />
        <Route path="/add" component={AddPage} />
        <Route path="/edit/:id" component={AddPage} />
        <Route path="" component={NotFoundPage} />
      </Switch>
    </AppWrapper>
  );
}

