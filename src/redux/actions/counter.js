import * as actionTypes from '../constants';

export const increment = () => {
  return {
    type: actionTypes.INCREMENT
  }
}

export const decrement = () => {
    return {
      type: actionTypes.DECREMENT
    }
}

export const incrementAsync = () => {
  return {
    type: actionTypes.INCREMENT_ASYNC
  }
}


export const fetchUsers = (data) => {
  return {
    type: actionTypes.FETCH_USERS,
    data
  }
}


export const fetchTodos = (data) => {
    return {
      type: actionTypes.FETCH_TODOS,
      data
    }
}
  

