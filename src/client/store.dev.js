import { createStore, compose, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import reducers from './reducers/';

export default function configureStore(history, initialState) {
  const store = compose(
    applyMiddleware(
      thunk,
      routerMiddleware(history),
    ),
  )(createStore)(
    reducers,
    initialState,
  );

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      store.replaceReducer(require('./reducers').default) // eslint-disable-line
    });
  }

  return store;
}
