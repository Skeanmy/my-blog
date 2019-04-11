<template>
  <div class="content">
    <h3>{{msg}}</h3>
    <div class="btn-group">
      <div class="show left">
        <a><Icon type="md-apps" /></Icon></a>
        <a><Icon type="ios-add-circle-outline" /></Icon></a>
      </div>
      <div class="catagroy right">
        <ul class="details">
          <li>JS</li>
          <li>ES6</li>
          <li>ES6</li>
          <li>ES6</li>
          <li>ES6</li>
        </ul>
      </div>
    </div>
    <div class="article">
      <ul class="article_list">
        <li class="cell" v-for="item in article_list" :key='item.id'>
          <a href=""></a>
          <div class="article-pannel">
            <div class="pannel-body">
              <h3 class="title">{{item.ctitle}}</h3>
              <p>
                {{item.cparagraph}}
              </p>
              <div class="info">
                <Icon type="ios-chatbubbles-outline" />
                <span>{{item.name}}</span>
                <Icon type="ios-clock-outline" /><span>{{item.date}}</span>
                <div class="article-tag">
                  <Tag color="volcano" v-for="tag in item.tags">{{tag}}</Tag>
                </div>
              </div>
            </div>
            <div class="pannel-pic">
              <img :src='item.image'>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="block-article">
      <div class="image-inner">
        <a href="">
          <img src="http://www.zikaowang.cc/assets/img/gallery/gallery-5.jpg">
        </a>
        <p class="image-caption">#dddadasdad</p>
      </div>
      <div class="image-info">
        <h5>ES6基本语法规则与大海ID还多大时代</h5>
        <div class="writer">
          <span>dasdada</span>
          <span>2019-04-11</span>
        </div>
        <div class="desc">
          Nunc velit urna, aliquam at interdum sit amet, lacinia sit amet ligula. Quisque et erat eros. Aenean auctor metus in tortor placerat, non luctus justo blandit.          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'this is home',
      article_list: []
    }
  },
  created () {
    this.$axios.get('https://www.easy-mock.com/mock/5bade7057502be612cc0d431/example/first')
      .then(res=>{
        console.log(res);
        this.article_list = res.data.data.list;
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content{
  position: relative;
}
.btn-group::after{
  content: '';
  height: 0;
  display: block;
  clear: both;
  overflow: hidden;
  visibility: hidden;
}
.left{
  float: left;
}
.right{
  float: right;
}
.show i{
  width: 50px;
  height: 50px;
  line-height: 50px;
  font-size: 30px;
}
.catagroy{
  position: relative;
  height: 50px;
}
.details li{
  /*position: absolute;*/
  margin-top: 11px;
  top:10px;
  font-size: 14px;
  float: left;
  border: 0.5px solid black;
  border-radius: 20px; 
  margin-right: 16px;
  padding: 3px 20px;
}
.title{
  line-height: 26px;
  font-size: 22px;
}
.article-pannel{
  display: flex;
  align-items: flex-start;
  padding: 25px 0;
  border-bottom:1px solid #E1E3E9;
}
.pannel-body{
  flex:0 0 80%;
}
.pannel-pic{
  position: relative;
  flex:0 0 20%;
}
.pannel-body p{
  font-size: 14px;
  margin-top: 17px;
}
.info{
  margin-top: 12px;
  font-size: 14px;
}
.info i{
  text-align: center;
  width: 30px;
  height: 30px;
  font-size: 16px;
  line-height: 30px; 
}
.article-tag{
  float: right;
}
.pannel-pic img{
  position: absolute;
  width: 150px;
  height: 112px;
  right: 0;
}
.block-article{
  width: 30%;
}
.image-inner{
  position: relative;
}
.image-inner img{
  height: 200px;
  width: 100%;
  border-radius: 3px;
}
.image-caption{
  position: absolute;
  top: 15px;
  padding: 0 10px;
  background-color: black;
  color: white;
}
.image-info{
    border: 1px solid;
    padding: 5px 10px;
}
</style>
