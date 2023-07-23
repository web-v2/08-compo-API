<template>
    <div class="counter">
      <h1>This is an Counter page</h1>
      <h2>{{nameCount}}</h2>

      <button @click="decrease">-</button>
      <button @click="increase">+</button>
    </div>
  </template>

<script>
import useCounter from '@/hooks/useCounter'
export default {
    name: 'Counter',
    props: {},
    emies: [],
    setup() {
        const {nameCount, increase, decrease} = useCounter()

        return {nameCount, increase, decrease}
    }
}
</script>

<style>

</style>