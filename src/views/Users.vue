<template>
  <h2 v-if="isLoading">Espere por favor...</h2>
  <h2 v-else>Usuarios</h2>
  <h5 v-if="errorMessage">{{errorMessage}}</h5>
  <div v-if="users.length > 0">
    <ul>
        <li v-for="{first_name, last_name, email, id} in users" :key="id">
            <h4 >{{ first_name }} {{ last_name }}</h4>
            <h4>{{ email }}</h4>
        </li>
    </ul>
  </div>
  <button @click="prevPage">Atras</button>
  <button @click="nextPage">Siguiente</button>
  <span>Página: {{ currentPage }}</span>
</template>

<script>
import useUsers from '@/hooks/useUsers'

export default {
    setup() {        
        const {users, isLoading, currentPage,errorMessage, nextPage, prevPage} = useUsers()

        return {
            users,
            isLoading,
            currentPage,
            errorMessage,
            nextPage,
            prevPage
        }
    }
}
</script>

<style scoped>
h2 {text-align: center;width: 100%;}
div {display: flex; justify-content: center; text-align: center}
ul {width: 250px}
</style>