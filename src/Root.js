import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import App from './components/app';
import Search from './containers/search_bar';
import Home from './containers/home';
import './styles/reset.css';

const store = configureStore(browserHistory);
const syncedHistory = syncHistoryWithStore(browserHistory, store);

const Root = () => (
  <Provider store={store}>
    <div>
      <Router history={syncedHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Home} />
        </Route>
      </Router>
    </div>
  </Provider>
);

export default Root;
