import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import App from './containers/app';
import Home from './containers/home';
import Breweries from './containers/breweries';
import configureStore from './store.dev';
import DevTools from './components/devtools/devtools';

const store = configureStore(browserHistory);
const syncedHistory = syncHistoryWithStore(browserHistory, store);

const Root = () => (
  <Provider store={store}>
    <div>
      <Router history={syncedHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Home} />
          <Route path="/breweries" component={Breweries} />
        </Route>
      </Router>
      {true && <DevTools />}
    </div>
  </Provider>
);

export default Root;
