import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { combineReducers } from '@reduxjs/toolkit';
import rootSaga from '../sagas';
import { loadingReducer, notificationsReducer, toDoListReducer } from './reducers';

// create redux-saga middleware
const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  combineReducers({
    toDo: toDoListReducer,
    loading: loadingReducer,
    notifications: notificationsReducer
  }),

  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);
