import { createStore } from "vuex";
import { v4 as uuidv4 } from "uuid";

export default createStore({
  state: {
    todos: [
      { id: "1", text: "Tarea numero 1", completed: false },
      { id: "2", text: "Tarea numero 2", completed: true },
      { id: "3", text: "Tarea numero 3", completed: true },
      { id: "4", text: "Tarea numero 4", completed: false },
      { id: "5", text: "Tarea numero 5", completed: false },
    ],
  },
  getters: {},
  mutations: {
    toggleTodo(state, id) {
      const todoIdx = state.todos.findIndex((todo) => todo.id === id);
      state.todos[todoIdx].completed = !state.todos[todoIdx].completed;
    },
    createTodo(state, text = "") {
      if (text.length <= 1) return;

      state.todos.push({
        id: uuidv4(),
        completed: false,
        text,
      });
    },
  },
  actions: {},
  getters: {
    pendingTodos: (state, getters, rootState) => {
      return state.todos.filter((todo) => !todo.completed);
    },
    completedTodos: (state, getters, rootState) => {
      return state.todos.filter((todo) => todo.completed);
    },
    allTodos: (state, getters, rootState) => {
      return state.todos;
    },
    getTodosByTab: (state, getters) => (tab) => {
      switch (tab) {
        case "all":
          return getters.allTodos;
        case "pending":
          return getters.pendingTodos;
        case "completed":
          return getters.completedTodos;
      }
    },
  },
  modules: {},
});
