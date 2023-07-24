<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>

import
  {onBeforeMount,
  onMounted, 
  onBeforeUpdate,
  onUpdated,
  onUnmounted,
  onBeforeUnmount,
  onErrorCaptured,
  onRenderTracked,
  onRenderTriggered,
  onActivated,
  onDeactivated} from 'vue'

export default {
  setup() {
    onBeforeMount( ()=> {
      console.log('Llamando al onBeforeMount');
    })
    onMounted( ()=> {
      console.log('Llamando al onMounted');
    })    
    onBeforeUpdate( ()=> {
      console.log('Llamando al onBeforeUpdate');
    })
    onUpdated( ()=> {
      console.log('Llamando al onUpdated');
    })
    onUnmounted( ()=> {
      console.log('Llamando al onUnmounted');
    })    
    onBeforeUnmount( ()=> {
      console.log('Llamando al onBeforeUnmount');
    })
    onErrorCaptured( ()=> {
      console.log('Llamando al onErrorCaptured');
    })
    onRenderTracked( ()=> {
      console.log('Llamando al onRenderTracked');
    })
    onRenderTriggered( ()=> {
      console.log('Llamando al onRenderTriggered');
    })
    onActivated( ()=> {
      console.log('Llamando al onActivated');
    })
    onDeactivated( ()=> {
      console.log('Llamando al onDeactivated');
    })    

  },
}
</script>
