<template>
  <h1>Buscar Pokemón: {{ pokemonId }}</h1>
  <form @submit.prevent="onSubmit">
    <input type="number" name="nPokemon" placeholder="Número del Pokemón" v-model="pokemonId" ref="txtSearchId">
  </form>
  <br>
  <span>Presione enter para buscar</span>
</template>

<script>
import { ref, onActivated } from 'vue';
import { useRouter } from 'vue-router';
export default {
  setup(){
    const router = useRouter()
    const pokemonId = ref(1)
    const txtSearchId = ref()

    onActivated(() => {
      txtSearchId.value.select() 
    })

    return { 
      pokemonId,
      txtSearchId,

      onSubmit: ()=>{
        //console.log('Pokemón Id: ', pokemonId.value);
        router.push({name: 'pokemon-id', params: {id: pokemonId.value}})
      }
     }
  }
}
</script>
