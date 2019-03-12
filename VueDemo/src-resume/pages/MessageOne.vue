<template>
  <ul>
    <li v-for="(news, index) in newsArr" :key="index">{{news}}</li>
  </ul>
</template>

<script>
  export default {
    data () {
      return {
        newsArr: ['Html', 'css', 'javascript']
      }
    }
  }
</script>

<style>

</style>
