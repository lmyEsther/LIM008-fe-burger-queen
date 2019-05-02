import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Layer from './components/Layer';
import OrderBuilder from './components/OrderBuilder';
import OrderList from './components/OrderList';

const app = () => (
  <Layer>
    <Switch>
      <Route path="/orders" component={OrderList} />
      <Route path="/" exact component={OrderBuilder} />
    </Switch>
  </Layer>
);

export default app;
