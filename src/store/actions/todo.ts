import { ToDoItem } from '../reducers/types';

// actions constants
export const POST_TODO_ITEM_REQUEST = 'todo/post-todo-item-request';
export const POST_TODO_ITEM_SUCCESS = 'todo/post-todo-item-success';
export const POST_TODO_ITEM_FAILURE = 'todo/post-todo-item-failure';

export const GET_TODO_LIST_REQUEST = 'todo/get-todo-list-request';
export const GET_TODO_LIST_SUCCESS = 'todo/get-todo-list-success';
export const GET_TODO_LIST_FAILURE = 'todo/get-todo-list-failure';

export const DELETE_TODO_ITEM_REQUEST = 'todo/delete-todo-item-request';
export const DELETE_TODO_ITEM_SUCCESS = 'todo/delete-todo-item-success';
export const DELETE_TODO_ITEM_FAILURE = 'todo/delete-todo-item-failure';

// action creators
export const addToDo = (toDoItem: ToDoItem) => ({
  type: POST_TODO_ITEM_REQUEST,
  payload: toDoItem
});

export const getToDoList = () => ({ type: GET_TODO_LIST_REQUEST });

export const deleteToDo = (toDoItemId: ToDoItem['id']) => ({
  type: DELETE_TODO_ITEM_REQUEST,
  payload: toDoItemId
});
