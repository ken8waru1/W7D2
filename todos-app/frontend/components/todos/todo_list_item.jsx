import React from 'react';
import ToDoListForm from './todo_list_form';

const ToDoListItem = ({todos}) => (
  todos.map(todo => <li key={todo.id}>{todo.title}</li>)
)

export default ToDoListItem