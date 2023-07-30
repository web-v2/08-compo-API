<template>
  <h1>Aprendiendo Slots</h1>
  <button class="active" @click="openModal">Abril Modal</button>

<Modal v-if="isOpen" @on:close="closeModal" title="helloWorld">
  <template v-slot:header><h2>Titulo Slots</h2></template>
  <template v-slot:body><p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p></template>
  <template v-slot:footer><button @click="closeModal">Cerrar</button></template>  
  <template v-slot:exposed="{newTitle}">{{ newTitle }}</template>  
</Modal>
  
</template>
<script>
import Modal from '@/components/Modal.vue'
import { ref } from 'vue';
export default {
  components: { Modal },
    setup(){
      const isOpen = ref(false)
        return {
          isOpen,

          openModal: () => isOpen.value = true,
          closeModal: () => isOpen.value = false
        }
    }
}
</script>

<style scoped>
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
</style>