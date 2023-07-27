import { computed, ref } from 'vue';
import { useStore } from 'vuex';

const useTodos = () => {
    const store = useStore()    
    const currentTag = ref('all')


    return {
      currentTag, 
      
      pending: computed( ()=> store.getters['pendingTodos']),
      all: computed( ()=> store.getters['allTodos']),
      completed: computed( ()=> store.getters['completedTodos']),
      getTodosByTab: computed( ()=> store.getters['getTodosByTab'](currentTag.value)),
      toggleTodo: (id) => store.commit('toggleTodo', id)
    }

}

export default useTodos