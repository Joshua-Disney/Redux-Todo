import React from 'react';
import { connect } from 'react-redux';

import { addNewTask, toggleComplete } from '../actions';



class TodoList extends React.Component {
  state = {
    newTask: ''
  }

  handleChanges = (event) => {
    this.setState({ newTask: event.target.value });
  }

  addTodo = event => {
    event.preventDefault();
    this.props.addNewTask(this.state.newTask);
  }

  toggleComplete = (event, index) => {
    event.preventDefault();
    this.props.toggleComplete(index);
  }
  
  render() {
    console.log(this.props)
    return (
      <div>
        <h1>Code me, Papi!</h1>
        <div>
          {this.props.todos.map((todo, index) => (
            <p onClick={event => this.toggleComplete(event, index)} key={index}>
              {todo.taskName}
            </p>
          ))}
        </div>
          <input
            type='text'
            value={this.state.newTask}
            placeholder='Type me, Papi!'
            onChange={this.handleChanges}
          />
          <button onClick={this.addTodo}>Add me, Papi</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  };
};

export default connect(mapStateToProps, { addNewTask, toggleComplete })(TodoList);