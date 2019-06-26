import { connect } from 'react-redux';
import ToDoList from './todo_list';
import allTodos from '../../reducers/selectors';

const mapPropsToState = (state) => ({
  todos: allTodos(state)
});

const mapDispatchToProps = (dispatch) => ({
  receiveTodo: (todo) => dispatch(receiveTodo(todo))
});

export default connect(
  mapPropsToState,
  mapDispatchToProps
)(ToDoList);