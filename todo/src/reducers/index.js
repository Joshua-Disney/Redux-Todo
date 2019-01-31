import { ADD_TODO, TOGGLE_COMPLETE } from '../actions';

const initialState = {
  todos: []
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
    console.log('add-todo', action);
    const newTask = {
      taskName: action.payload,
      completed: false
    }
    return {
      ...state,
      todos: [...state.todos, newTask]
    }
    case TOGGLE_COMPLETE:
    return {
      ...state,
      todos: state.todos.map((todo, index) => 
      action.payload === index
      ? { ...todo, completed: !todo.completed }
      : todo   
      )
    }
    default:
      return state;
  }
}

export default reducer;