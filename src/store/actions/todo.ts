import { ToDoItem } from '../reducers/types';

// actions constants
export const POST_TODO_ITEM_REQUEST = 'todo/post-todo-item-request';
export const POST_TODO_ITEM_SUCCESS = 'todo/post-todo-item-success';
export const POST_TODO_ITEM_FAILURE = 'todo/post-todo-item-failure';

// action creators
export const addToDo = (toDoItem: ToDoItem) => ({
  type: POST_TODO_ITEM_REQUEST,
  payload: toDoItem
});
