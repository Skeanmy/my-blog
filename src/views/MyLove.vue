<template>
  <div class="content">
    <div class="main">
      <div class="content1">
        <div class="header">
          <div class="title">给珍珍每日的一封信</div>      
        </div>    
        <div class="content2">
          <div class="detail">
            <div class="pic">
              <div>
                <img src="http://image.wufazhuce.com/FlRHaJWrfiJn5g22H2MfLerZbY01">
              </div>
              <div class="cata">插画</div>
              <div class="pic_foot">
                <div class="intro">
                  <p>
                    现代人遇到情感的第一反应，往往不是开心，而是怕，怕比对方认真，怕糊涂投入过多，怕一口气松了，兵败如山倒，像拔河一样，被对方轻松拔了过去，在这段感情里就此彻底落了下风。
                  </p>
                </div>
                <div class="date">
                  <p class="year" style="font-size: 0.9em">2019</p>
                  <p class="day">2</p>
                  <p class="month" style="font-size: 0.9em">April</p>
                </div>
              </div>
            </div>
            <div class="letter">
              <div>Hi My Dear:</div>
              <div class="weather">
                <p class="love">今天是我们在一起<span style="font-size: 1.5em;color: crimson;">670</span>天</p>
                <p class="love">想把每天第一份祝福与关心带给你</p>
                <div class="weather_detail">
                  <div class="today">
                    <span>今天</span>
                    <img src="static/img/天气.svg" style="max-width: 5%;">
                    <span>15/21</span>
                    <span>98良</span>
                  </div>
                  <div class="today">
                    <span>明天</span>
                    <img src="static/img/天气.svg" style="max-width: 5%;">
                    <span>15/21</span>
                    <span>98良</span>
                  </div>
                  <div class="suit">
                    <p>天冷要加衣，照顾好自己</p>
                    <img src="static/img/爱心.png" style="max-width: 5%;">  
                  </div>
                </div>
                <div class="split">
                </div>
                <div class="cet6">
                  <p class="love">敲黑板！今天距离六级考试还剩<span style="font-size: 1.5em;color: #0cb7ed;">670</span>天</p>
                </div>
                <div class="movies">
                  <ul class="items">
                    <li>
                      <div class="cover">
                        <div class="bg-img">
                          <img src="http://image11.m1905.cn/mdb/uploadfile/2019/0329/thumb_1_154_217_20190329120148151786.jpg">
                        </div>
                      </div>
                      <div class="desc">
                        <h3>调音师</h3>
                        <p>4月03日上映</p>
                        <p>
                          <label>导演:</label>
                          <span>
                            斯里兰姆·拉格万
                          </span>
                        </p>
                        <p>
                          <label>主演:</label>
                          <span>
                            阿尤斯曼·库拉纳
                          </span>
                        </p>
                        <p>
                          <label>类型:</label>
                          <span>
                            喜剧 悬疑 犯罪
                          </span>
                        </p>
                      </div>
                    </li>
                    <li>
                      <div class="cover">
                        <div class="bg-img">
                          <img src="http://image11.m1905.cn/mdb/uploadfile/2019/0325/thumb_1_154_217_20190325030100239033.jpg">
                        </div>
                      </div>
                      <div class="desc">
                        <h3>调音师</h3>
                        <p>4月03日上映</p>
                        <p class="direct">
                          <label>导演:</label>
                          <span>
                            斯里兰姆·拉格万
                          </span>
                        </p>
                        <p>
                          <label>主演:</label>
                          <span>
                            阿尤斯曼·库拉纳
                          </span>
                        </p>
                        <p>
                          <label>类型:</label>
                          <span>
                            喜剧 悬疑 犯罪
                          </span>
                        </p>
                      </div>
                    </li>
                  </ul>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyLove',
  data () {
    return {
      msg: 'this is mail',
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title{
  display: inline-block;
  height: 100px;
  line-height: 100px;
  font-size: 24px;
}
.split{
  height: 1px;
  border-top: 1px solid #EFEFEF;
}
.pic{
  text-align: center;
}
.pic img{
  max-width: 100%;
  height: auto;
}
.cata{
   background-color: #333;
   color: #fff;
   margin-top: -5px;
   padding: 3px 0;
}
.pic_foot{
   display: flex;
   height:120px;
   background-color: #d6d6d6;
}
.intro{
  flex:1 1 85%;
  font-size: 0.9em;
  line-height: 1.67;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 5%;
}
.date{
  flex: 1 1 15%;
  padding: 10px 5%;
  background-color: #f2f2f2;
}
.date p{
  margin: 0;
}
.day{
  font-size: 56px;
  height: 56px;
  font-weight: 600;   
  line-height: 56px;
}
.letter{
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-top:10px;
  padding: 10px 3%;
}
.love{
  text-align: center;
}
.today{
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 10px 10px;
}
.suit{
  display: flex;
  align-items: center;
  justify-content: center;
}

li{
  display: flex;
  align-items: flex-start;
  margin-left: 10%;
}
h3{
  margin-top:0;
  color:#9c7445;
  text-shadow: 
}
.desc{
  margin-left: 10px;
}
.desc p{
  font-size: 12px;
  line-height: 20px;
}
</style>
