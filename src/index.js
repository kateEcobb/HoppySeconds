import React from 'react';
import { AppContainer } from 'react-hot-loader';
import ReactDOM from 'react-dom';
import Root from './Root';

const rootEl = document.getElementById('root');

function render(Component) {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    rootEl,
  );
}

render(Root);

if (module.hot) {
  module.hot.accept('./Root', () => {
    const hotRoot = require('./Root').default; // eslint-disable-line
    render(hotRoot);
  });
}
