import {ADD_TODO, DELETE_TODO} from "./mutations-types"

export default {
  addTodo({commit}, todo) {
    commit(ADD_TODO, {todo})
  },

  deleteTodo({commit}, index) {
    commit(DELETE_TODO, {index})
  },
}
