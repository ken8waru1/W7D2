import React from 'react';
import ToDoListItem from './todo_list_item';
import ToDoListForm from './todo_list_form';

const ToDoList = ({todos, receiveTodo}) => (
  <div>
    <ul>
      <ToDoListItem todos={todos}/>
    </ul>

    <ToDoListForm receiveTodo={receiveTodo}/>
  </div>
)

export default ToDoList