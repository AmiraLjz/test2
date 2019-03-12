<template>
  <div>
    <h3>专业技能（Master skill）</h3>
    <div>
      <ul class="nav nav-tabs">
        <li><router-link to="/list/messageone">基础语言（Basic Language）</router-link></li>
        <li><router-link to="/list/messagetwo">程序框架（Program Frame）</router-link></li>
      </ul>

      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style>
  li {
    font-size: 20px;
  }
</style>
