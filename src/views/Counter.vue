<template>
    <div class="counter">
      <h1>This is an Counter page</h1>
      <h2>{{nameCount}}</h2>

      <button @click="decrease">-</button>
      <button @click="increase">+</button>
    </div>
  </template>

<script>
import { ref } from 'vue';

export default {
    name: 'Counter',
    props: {},
    emies: [],
    setup() {
        const nameCount = ref(18);
        /*const increase = () =>{
            nameCount.value++
        }
        const decrease = () =>{
            nameCount.value--
        }*/
        return {
            nameCount,
            
            increase: () => nameCount.value++,
            decrease: () => nameCount.value--
        }
    }
}
</script>

<style>

</style>