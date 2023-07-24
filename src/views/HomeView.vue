<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div class="about">
      <h1>Ref Vs Reactive</h1>
      <h2>{{ iroman }}</h2>
      <h2>{{ hulk }}</h2>

      <button @click="changeIroman">Cambiar Iroman</button>
      <button @click="changeHulk">Cambiar Hulk</button>

      <h3>Iroman: {{ iromanIsAlive }}</h3>
      <h3>Hulk: {{ hulkIsAlive }}</h3>

      <button @click="changeStatus">Cambiar status</button>
    </div>
  </div>
</template>

<script>
import { ref, reactive } from 'vue';


export default {
  name: 'HomeView',
  setup() {
    const iroman = ref({name: 'Tony', age: 50})
    const hulk = reactive({name: 'Brush', age: 45})

    const iromanIsAlive = reactive(false)
    const hulkIsAlive = ref(true)

    const changeStatus = ()=> {
      hulkIsAlive.value = !hulkIsAlive.value
      //iromanIsAlive = !iromanIsAlive
    }

    return{
      iroman, 
      hulk,
      iromanIsAlive,
      hulkIsAlive,
      changeStatus,

      changeIroman: () => {
        iroman.value.name = 'Tony Stark',
        iroman.value.age = 55
      },
      changeHulk: () => {
        hulk.name = 'Brush Weapon',
        hulk.age = 52
      }      
    }
  }
}
</script>
