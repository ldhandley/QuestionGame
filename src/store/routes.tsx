import * as React from 'react';
const { IndexRoute, Route } = require('react-router');

import App from '../containers/app';


export default (
  [
    <Route path="/" component={ App }> </Route>,
    <Route path="/QuestionGame/" component={ App }> </Route>
  ]
);
