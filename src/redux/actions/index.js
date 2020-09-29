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


export const setLoading = (flag) => {
    return {
        type: actionTypes.SET_LOADING,
        flag
    }
}

export const fetchUsers = () => {
  return {
    type: actionTypes.FETCH_USERS,
  }
}

export const setTodos = (data) => {
    return {
      type: actionTypes.SET_TODOS,
      data
    }
}

export const fetchTodos = () => {
    return {
      type: actionTypes.FETCH_TODOS
    }
}
  

