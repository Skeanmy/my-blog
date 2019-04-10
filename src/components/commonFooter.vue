<template>
  <div class="footer">
    <div class="inner_footer">
      
    </div>
  </div>
</template>

<script>
export default {
  name: 'commonFooter',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer{
  height: 70px;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.94);
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
  bottom: 0;
}
.inner_footer{
  width: 1080px;
  height: 100%;
  margin: 0 auto;
}
</style>