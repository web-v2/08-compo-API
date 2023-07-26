<template>
  <h1>Thanos Todo List</h1>
  <h4>Pendientes: {{ pending.length }}</h4>
  <h4>Completadas: {{ completed.length }}</h4>
  <hr>
  <h4>Todas: {{ all.length }}</h4>
</template>

<script>
import { computed } from 'vue';
import { Computed } from 'vuex';
import { useStore } from 'vuex';

export default {
  setup(){
    const store = useStore()    

    return {
      pending: computed( ()=> store.getters['pendingTodos']),
      all: computed( ()=> store.getters['allTodos']),
      completed: computed( ()=> store.getters['completedTodos'])
    }
  }
}
</script>

<style>

</style>