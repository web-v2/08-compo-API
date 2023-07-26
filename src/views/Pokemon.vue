<template>
  <h1 v-if="!pokemon && !errorMessage">Buscando...</h1>
  <h1 v-else-if="errorMessage">{{ errorMessage }}</h1>

  <template v-else>    
    <h1>{{ pokemon.name }}</h1>
    <div v-if="pokemon.abilities.length > 0">
    <h2>Abilities:</h2>
    <ol>
        <li v-for="{ability, name} in pokemon.abilities" :key="name">
            <h3>{{ ability.name }}</h3>            
        </li>
    </ol>
  </div>
    <div class="pokemon-container">        
        <img :src="pokemon.sprites.other.dream_world.front_default" :alt="pokemon.name">  
    </div>
    <router-link class="button" :to="{name: 'pokemon-search'}">Regresar</router-link>
  </template>

</template>

<script>
import { watch, withScopeId } from 'vue';
import { useRoute, onBeforeRouteLeave } from 'vue-router';
import usePokemons from '@/hooks/usePokemon';

export default {
 setup(){
  const route = useRoute()
  const {errorMessage, isLoading, pokemon, searchPokemon} = usePokemons(route.params.id)
  console.log(pokemon);  
  watch(  
    () => route.params.id,
    () => searchPokemon(route.params.id)    
  )

  onBeforeRouteLeave( ()=>{
      const answer = window.confirm('¿Esta seguro que desea salir?')
      if(!answer) return false
  })

  return { errorMessage, isLoading, pokemon }
 }
}
</script>

<style scoped>
h3 {text-align: center; width: 100%;}
div {display: flex; justify-content: center; text-align: center}
ol {width: 250px}
.pokemon-container {
    height: 200px;
    padding: 50px;
}
.button {
    background-color: #4CAF50; /* Green */
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    border-radius: 10px;
}
</style>