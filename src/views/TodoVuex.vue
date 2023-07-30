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

<button class="newTodo" @click="isOpen=true">Crear Todo</button>

<Modal v-if="isOpen" @on:close="isOpen=false" title="New Todo">
  <template v-slot:header><h2>Agregar nuevo Todo</h2></template>
  <template v-slot:body>

  <div>
    <form @submit.prevent="createTodo(newTodoText)">
      <label for="fname">Texto del todo</label>
      <input type="text" id="todo" name="todo" placeholder="Nueva tarea" v-model="newTodoText">      
      <br>
      <br>
      <button class="btn-submit">Guardar</button>
    </form>
  </div>

  </template>
  <template v-slot:footer><button @click="isOpen=false">Cerrar</button></template>
</Modal>

</template>

<script>
import { ref } from 'vue'
import useTodos from '@/hooks/useTodos'
import Modal from '@/components/Modal.vue'

export default {
  components: { Modal },
  setup(){
    const {pending, currentTag, getTodosByTab, toggleTodo, createTodo} = useTodos();
    const isOpen = ref(false)
  
    return {
      currentTag, 
      getTodosByTab, 
      pending, 
      toggleTodo,
      createTodo,

      isOpen: ref(false),
      newTodoText: ref('')
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

.newTodo {
    background-color: #f44336; /* Green */
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

input[type=text] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

.btn-submit {
  width: 100%;
  background-color: #4CAF50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.btn-submit:hover {
  background-color: #45a049;
}

div form {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
}
</style>