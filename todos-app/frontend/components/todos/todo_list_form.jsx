import React from 'react';
import uniqueId from '../../util/todo_ids'

class ToDoListForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: uniqueId,
      title: '',
      body: '', 
      done: false
    }
    this.handleClick = this.handleClick.bind(this);
    this.updateTitle = this.updateTitle.bind(this);
    this.updateBody = this.updateBody.bind(this);
  }

  updateTitle(e) {
    this.setState({
      title: e.currentTarget.value
    });
  }

  updateBody(e) {
    this.setState({
      body: e.currentTarget.value
    });
  }

  handleClick(e) {
    e.preventDefault();
    this.props.receiveTodo(this.state);
  }

  render() {
    return (
    <form onSubmit={this.handleClick}>
      <h2>Add a To-Do Item</h2>
      <label>Title:
        <br />
        <input type="text" 
        onChange={this.updateTitle} 
        value={this.state.title}
        />
      </label>

      <br />
      <br />
      <label>Body:
        <br />
        <textarea
        onChange={this.updateBody} 
        value={this.state.body} cols="30" rows="10">
        </textarea>
      </label>

      <br />
      <br />

      <input type="submit" value="Add To-Do Item" />
    </form>
    )
  }
}

export default ToDoListForm;