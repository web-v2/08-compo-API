<template>
  <h1>Thanos Todo List</h1>
  <h4>Pendientes: {{ pending.length }}</h4>
  <hr>
  <button 
    :class="{ 'active': currentTag === 'all' }"
    @click="currentTag = 'all'">
      Todos
  </button>

  <button 
    :class="{ 'active': currentTag === 'pending' }"
    @click="currentTag = 'pending'">
      Pendientes
  </button>

  <button 
    :class="{ 'active': currentTag === 'completed' }"
    @click="currentTag = 'completed'">
      Completados
  </button>


  <div>
    <ul>
      <li v-for="todo in getTodosByTab" :key="todo.id" :class="{ 'completed': todo.completed}" @dblclick="toggleTodo(todo.id)">
          {{ todo.text }}
      </li>
    </ul>
  </div>
</template>

<script>
import { computed, ref } from 'vue';
import { useStore } from 'vuex';

export default {
  setup(){
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
}
</script>

<style scoped>
button {
    background-color: #555555; /* Green */
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    border-radius: 10px;
}

div {
  display: flex;
  justify-content: center;
  text-align: center;
}
ul {
  width: 300px;
  text-align: center;
}
li {
  cursor: pointer;
  padding-top: 20px;
}

.active {
    background-color: #4CAF50; /* Green */
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 18px;
    border-radius: 10px;
}
.completed {
  text-decoration: line-through;
}
</style>