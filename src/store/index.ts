import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { combineReducers } from '@reduxjs/toolkit';
import rootSaga from '../sagas';
import { ToDoReducer, loadingReducer } from './reducers';
import { toDoList } from './reducers/todo';

// create redux-saga middleware
const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  combineReducers({
    ToDoReducer,
    toDoList,
    loading: loadingReducer
  }),

  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);
