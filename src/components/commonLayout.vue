<template>
  <div class="container">
    <commonHeader class='headroom'></commonHeader>
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
  },
  mounted () {
    const ele = document.querySelector('.headroom');
    const headroom = new Headroom(ele,{
      // 垂直滚动多少px才会触发动画
      tolerance: 0,
      // 从距离顶部多少px开始触发动画
      offset: 100,
      classes: {
          // 当元素初始化后所设置的class
          initial: "animated",
          // 向上滚动时设置的class
          pinned: "slideInDown",
          // 向下滚动时所设置的class
          unpinned: "slideOutUp"
      }
    });
    headroom.init();
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
