<template>
  <div class="header">
    <div class="inner_header">
      <div class="head left"><Icon type="md-cog" />
      <span>Skeanmy</span>
      </div>
      <div class="nav right">
        <div class="search">
          <Icon type="ios-search" />
          <input type="text" maxlength="30" placeholder="请输入查询内容..." class="s-inp">
        </div>
        <ul class="nav-bar">
          <li>
            <a href=""><Icon type="ios-home" />首页</a>
          </li>
          <li class="sub-item">
            <Icon type="md-filing" />归档
            <ul class="nav-child">
              <li>
                <a href=""><i></i>首页1</a>
              </li>
              <li>
                <a href=""><i></i>首页2</a>
              </li>
              <li>
                <a href=""><i></i>首页3</a>
              </li>
            </ul>
          </li>
          <li>
            <a href=""><Icon type="md-headset" />关于我</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'commonHeader',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header{
  height: 70px;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.94);
  position: fixed;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
  top: 0;
}
.inner_header{
  width: 1080px;
  height: 100%;
  margin: 0 auto;
}
.head i{
  font-size: 50px;
}
.head,.nav{
  line-height: 70px;
  font-size: 16px;
  height: 100%;
  position: relative;
}
.left{
  float: left;
}
.right{
  float: right;
}
.nav-bar{
  margin-left: 40px;
}
.nav-bar>li{
  color: #2d8cf0;
  position: relative;
  margin: 0 16px;
  float: left;
  list-style: none;
}
.nav-bar i{
  font-size: 16px;
  margin: -3px 3px 0 0;
}
.nav-bar::after{
  content: "";
  display: block;
  clear: both;
  width: 0;
  visibility: hidden;
  overflow: hidden;
}
.nav-child{
  visibility: hidden;
  opacity: 0;
  position: absolute;
  top: 100%;
  background: rgba(255, 255, 255, 0.94);
  z-index: 999;
  -webkit-transition: all .3s ease-in-out; 
  transition: all .4s ease-in-out; 
}
.sub-item:hover{
  color:red;
  transition: 0.4s;
}
.sub-item:hover .nav-child{
  opacity: 0.98;
  transition: 0.4s;
  visibility: visible;
}
.nav-child a{
  width: 120px;
  height: 50px;
  font-size: 14px;
  display: block;
  line-height: 50px;
}
.search i{
  position: absolute;
  text-align: center;
  height: 30px;
  width: 30px;
  top: 20px;
  line-height: 30px;
  font-size: 18px;
  left: 0;
  z-index: 1000;
}
.search:hover .s-inp{
  opacity: 0.98;
  visibility: visible;
}
.s-inp:focus{
  opacity: 0.98;
  visibility: visible;
}
.s-inp{
  opacity: 0;
  visibility: hidden;
  position: absolute;
  height: 30px;
  line-height: 30px;
  top:20px;
  border: 1px solid #313131;
  left:0;
  border-radius: 20px;
  padding: 0 120px 0 40px;
  font-size: 12px;
  background-color: #fff;
  z-index: 999;
  transition: all .6s ease;
  outline: 0;
}
</style>
