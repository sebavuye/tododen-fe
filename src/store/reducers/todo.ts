import { AnyAction } from '@reduxjs/toolkit';
import * as ACTIONS from '../actions';
import { ToDoInitialState } from './types';

const initialState: ToDoInitialState = {
  list: [],
  loading: false,
  error: null
};

const ToDoReducer = (state = initialState, { payload, type }: AnyAction) => {
  switch (type) {
    // POST TO DO ITEM
    case ACTIONS.POST_TODO_ITEM_REQUEST: {
      return { ...state, loading: true };
    }
    case ACTIONS.POST_TODO_ITEM_SUCCESS: {
      return {
        ...state,
        list: [...state.list, payload],
        loading: false,
        error: null
      };
    }
    case ACTIONS.POST_TODO_ITEM_FAILURE: {
      return { ...state, error: payload, loading: false };
    }

    // GET TO DO LIST
    case ACTIONS.GET_TODO_LIST_REQUEST: {
      return { ...state, loading: true };
    }
    case ACTIONS.GET_TODO_LIST_SUCCESS: {
      return { ...state, list: payload, loading: false, error: null };
    }
    case ACTIONS.GET_TODO_LIST_FAILURE: {
      return { ...state, error: payload, loading: false };
    }

    // DELETE TO DO ITEM
    case ACTIONS.DELETE_TODO_ITEM_REQUEST: {
      return { ...state, loading: true };
    }
    case ACTIONS.DELETE_TODO_ITEM_SUCCESS: {
      return { ...state, list: payload, loading: false, error: null };
    }
    case ACTIONS.DELETE_TODO_ITEM_FAILURE: {
      return { ...state, error: payload, loading: false };
    }

    default:
      return state;
  }
};

export default ToDoReducer;
