<template>
  <div class="content">
    <!-- <Timeline>
        <TimelineItem color="green">发布1.0版本</TimelineItem>
        <TimelineItem color="green">发布2.0版本</TimelineItem>
        <TimelineItem color="red">严重故障</TimelineItem>
        <TimelineItem color="blue">发布3.0版本</TimelineItem>
    </Timeline> -->
    <div class="timeline">
      <h2 class="timeline-titile">前端面试手记</h2>
      <div class="timeline-subtitle">
        <h3>2019</h3>
        <div class="timeline-item">
          <time>2019-04-09</time>
          <a href="">ES6难点整理</a>
        </div>
        <div class="timeline-item">
          <time>2019-04-09</time>
          <a href="">ES6难点整理</a>
        </div>
        <div class="timeline-item">
          <time>2019-04-09</time>
          <a href="">ES6难点整理</a>
        </div>
        <div class="timeline-item">
          <time>2019-04-09</time>
          <a href="">ES6难点整理</a>
        </div>
      </div>
      <div class="timeline-subtitle">
        <h3>2018</h3>
        <div class="timeline-item">
          <time>2019-04-09</time>
          <a href="">ES6难点整理</a>
        </div>
        <div class="timeline-item">
          <time>2019-04-09</time>
          <a href="">ES6难点整理</a>
        </div>
        <div class="timeline-item">
          <time>2019-04-09</time>
          <a href="">ES6难点整理</a>
        </div>
        <div class="timeline-item">
          <time>2019-04-09</time>
          <a href="">ES6难点整理</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Archives',
  data () {
    return {
      msg: 'this is archive',
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.timeline{
  max-width: 768px;
  margin: 30px 40px;
  padding-left: 40px;
  border-left: 4px solid #3db4f0;
}
h2{
  font-size: 28px;
  margin-bottom: 25px;
}
h3{
  font-size: 24px;
  margin-bottom: 25px;
}
.timeline-item{
  margin-bottom: 25px;
  font-size: 16px;
}
.timeline-item a{
  display: inline-block;
  margin-left: 50px;
}
h2,h3,.timeline-item{
  position: relative;
}
h2::before,h3::before,.timeline-item::before{
  box-sizing: content-box;
  position: absolute;
  border-radius: 50%;
  top: 50%;
  transform: translateY(-50%);
  background-color: white;
  content: "";
}
.timeline-item::before{
  border:2px solid #3db4f0;
  width: 12px;
  height: 12px;
  left:-50px;
}
h2::before{
  border:4px solid #3db4f0;
  width: 16px;
  height: 16px;
  left:-54px;
}
h3::before{
  border:3px solid #3db4f0;
  width: 14px;
  height: 14px;
  left:-52px;
}
</style>
