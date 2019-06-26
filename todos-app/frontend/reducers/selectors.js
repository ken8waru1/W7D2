const allTodos = (state) => {
  const todosArr = Object.keys(state.todos);
  return todosArr.map(id => state.todos[id]);
}

export default allTodos;