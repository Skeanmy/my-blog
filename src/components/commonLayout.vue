<template>
  <div class="container">
    <commonHeader></commonHeader>
    <transition name='slide-fade'>
      <router-view></router-view>
    </transition>
    <common-footer></common-footer>
  </div>
</template>

<script>
import commonHeader from '@/components/commonHeader'
import commonFooter from '@/components/commonFooter'
export default {
  name: 'commonLayout',
  data () {
    return {
    }
  },
  components: {
    commonHeader,
    commonFooter
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

</style>
