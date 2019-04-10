<template>
  <div id="app">
    <router-view/>
    <BackTop></BackTop>
  </div>
</template>
<script>
  import commonLayout from './components/commonLayout'
  export default {
    name: 'App',
    components: {
      commonLayout
    }
  }
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
}
ul li{
  list-style: none;
}
.content{
  margin:90px auto 0 auto; 
  max-width: 1080px;
}
</style>
