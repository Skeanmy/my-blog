<template>
  <div class="footer">
    <div class="inner_footer">
      <div class="footer-col">
        <h5>学习链接</h5>
        <ul class="learn-links">
          <li>
            <a href="">掘金社区</a>
          </li>
          <li>
            <a href="">SegmentFault思否</a>
          </li>
          <li>
            <a href="">前端乱炖</a>
          </li>
          <li>
            <a href="">MDN</a>
          </li>
          <li>
            <a href="">腾讯课堂</a>
          </li>
        </ul>
      </div>
      <div class="footer-col">
        <h5>博客推荐</h5>
        <ul class="learn-links">
          <li>
            <a href="">掘金社区</a>
          </li>
          <li>
            <a href="">SegmentFault思否</a>
          </li>
          <li>
            <a href="">前端乱炖</a>
          </li>
          <li>
            <a href="">腾讯课堂</a>
          </li>
        </ul>
      </div>
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
  /*height: 70px;*/
  width: 100%;
  background-color: #455A64;
}
.inner_footer{
  display: flex;
  max-width: 1080px;
  height: 100%;
  margin: 0 auto;
  padding: 30px 0;
}
.footer-col{
  flex: 0 0 50%;
}
.footer-col h5{
  font-size: 1.5em;
  color: #CFD8DC;
  margin-bottom: 15px;
}
.footer li{
  margin: 10px 0;
}
.footer-col a{
  font-size: 14px;
  color: #ffffff;
}
</style>


