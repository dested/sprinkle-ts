import * as types from '../constants/ActionTypes'

export const addTodo = (text:string) => ({ type: types.ADD_TODO, text })
export const deleteTodo = (id:string) => ({ type: types.DELETE_TODO, id })
export const editTodo = (id:string, text:string) => ({ type: types.EDIT_TODO, id, text })
export const completeTodo = (id:string) => ({ type: types.COMPLETE_TODO, id })
export const completeAllTodos = () => ({ type: types.COMPLETE_ALL_TODOS })
export const clearCompleted = () => ({ type: types.CLEAR_COMPLETED })
export const setVisibilityFilter = filter => ({ type: types.SET_VISIBILITY_FILTER, filter})
