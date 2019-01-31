export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_COMPLETE = 'TOGGLE_COMPLETE'

export function addNewTask(newTask) {
  console.log(newTask)
  return {
    type: ADD_TODO,
    payload: newTask
  };
}

export function toggleComplete(index) {
  return {
    type: TOGGLE_COMPLETE,
    payload: index
  };
}