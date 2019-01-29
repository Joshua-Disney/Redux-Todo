import React from 'react';
import { connect } from 'react-redux';

import { addTodo } from '../actions';

const handleChanges = (event) => {
  this.setState({ [event.target.name]: event.target.value });
}

class Todo extends React.Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <h1>Code me, Papi!</h1>
          <input
            type='text'
            name='newtask'
            placeholder='Type me, Papi!'
            onChange={this.handleChanges}
          />
          <button onClick={() => {this.props.addTodo(this.props.todos)}}>Add me, Papi</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  };
};

export default connect(mapStateToProps, { addTodo })(Todo);