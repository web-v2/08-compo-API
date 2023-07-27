<template>
  <h1>Aprendiendo Slots</h1>
  <button class="active">Abril Modal</button>
  <modal title="Modal Slots">
    <h2>Titulo Slots</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    <button>Cerrar</button>
  </modal> 
</template>

<script>
import Modal from '@/components/Modal.vue'
export default {
  components: { Modal },
    setup(){
        
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