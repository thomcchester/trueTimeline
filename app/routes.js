import React from 'react';
import {Route} from 'react-router';


export default (
  <Route component={App}>
    <Route path='/' component={Home} />
  </Route>
);
