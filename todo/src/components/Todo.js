import React from 'react';
import { connect } from 'react-redux';

import { addNewTask, toggleComplete } from '../actions';

import './Todo.css';



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
      <div className='container'>
        <h1 className='heading'>Things to do!</h1>
        <div className='taskList'>
          <div>
            {this.props.todos.map((todo, index) => (
              <p className={todo.completed  && 'completed'} onClick={event => this.toggleComplete(event, index)} key={index}>
                {todo.taskName}
              </p>
            ))}
          </div>
          <input
            type='text'
            value={this.state.newTask}
            placeholder='add new task...'
            onChange={this.handleChanges}
          />
          <button onClick={this.addTodo}>Add it!</button>
        </div>
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