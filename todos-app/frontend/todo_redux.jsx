import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { receiveTodos, receiveTodo } from './actions/todo_actions';
import allTodos from './reducers/selectors' 
import fetchTodos from './util/todo_api_util'

const store = configureStore();
window.store = store;
window.receiveTodos = receiveTodos;
window.receiveTodo = receiveTodo;
window.allTodos = allTodos;
window.fetchTodos = fetchTodos;


document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('content');
  ReactDOM.render(<Root store={store} />, content)
}); 

