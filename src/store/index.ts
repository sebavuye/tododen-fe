import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootSaga from '../sagas';
import { ToDoReducer } from './reducers';

// create redux-saga middleware
const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  ToDoReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);
