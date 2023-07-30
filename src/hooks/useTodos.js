import { computed, ref } from "vue";
import { useStore } from "vuex";

function useTodos() {
  const store = useStore();
  const currentTag = ref("all");

  return {
    currentTag,

    pending: computed(() => store.getters["pendingTodos"]),
    all: computed(() => store.getters["allTodos"]),
    completed: computed(() => store.getters["completedTodos"]),
    getTodosByTab: computed(() =>
      store.getters["getTodosByTab"](currentTag.value)
    ),
    toggleTodo: (id) => store.commit("toggleTodo", id),
    createTodo: (text) => store.commit("createTodo", text),
  };
}

export default useTodos;
