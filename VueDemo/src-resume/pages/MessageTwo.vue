<template>
  <ul>
    <li v-for="(message, index) in MessageArr" :key="index">{{message}}</li>
  </ul>
</template>

<script>
  export default {
    data () {
      return {
        MessageArr: ['jQuery', 'vueJs', 'Less', 'bootStrap', 'nodeJs']
      }
    }
  }
</script>

<style>

</style>
