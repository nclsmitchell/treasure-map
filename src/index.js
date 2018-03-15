import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import reducers from './reducers';
import thunk from 'redux-thunk';

import TreasureMap from './containers/TreasureMap';
import './css/main.css';

const middleware = [thunk];

const store = createStore(reducers, applyMiddleware(...middleware));

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div className="main-container">
        <Switch>
  				<Route exact path="/" component={TreasureMap} />
  				<Redirect
  					to={{
  						pathname: '/',
  					}}
  				/>
  			</Switch>
      </div>
    </Router>
  </Provider>
  ,
  document.getElementById('root')
);