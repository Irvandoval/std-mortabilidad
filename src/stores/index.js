import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import githubSaga from '../sagas/github-saga';
import reducers from '../reducers';

function reduxStore() {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(reducers, applyMiddleware(sagaMiddleware),
    window.devToolsExtension && window.devToolsExtension());
  sagaMiddleware.run(githubSaga);
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      // We need to require for hot reloading to work properly.
      const nextReducer = require('../reducers');  // eslint-disable-line global-require

      store.replaceReducer(nextReducer);
    });
  }

  return store;
}

export default reduxStore;
