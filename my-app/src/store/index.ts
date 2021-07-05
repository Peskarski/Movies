import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { initialState } from './initialState';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

const composedEnhacers = compose(
  applyMiddleware(sagaMiddleware),
  process.env.NODE_ENV === 'development' ? (window as any).__REDUX_DEVTOOLS_EXTENSION__() : null || compose
);

export default createStore(rootReducer, initialState, composedEnhacers);

sagaMiddleware.run(rootSaga);
