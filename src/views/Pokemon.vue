<template>
  <h1>Pokemón View</h1>
</template>

<script>
import { useRoute } from 'vue-router';
export default {
 setup(){
  const route = useRoute()
  console.log(route.params);
 }
}
</script>