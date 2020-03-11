<template>
  <div class="home">
    <div class="container">
      <div class="view">
        <div id="one">晚来天欲雪</div>
        <div id="two">能饮一杯无</div>
      </div>
      
          
          
            <router-link :to="$store.state.contentGo">
            <div class="aaa">
              <img src="~assets/img/右.png" alt="" width="50" height="50">
            </div>
            </router-link>
          
      
    </div>
  </div>
</template>

<style scoped>
@keyframes my{
  0%   {color: white;}
  25%  {color: rgba(235, 221, 221,0.5);}
  50%  {color: rgba(196, 171, 171, 0.4);}
  25%  {color: rgba(236, 222, 222,0.5);}
  100% {color: white;}
}
.container{
  width: 100%;
  height: 800px;
  background: url('~assets/img/home.jpg');
  background-size: cover;
  overflow: hidden;
}
#one{
  margin-bottom: 50px;
}
.view{
  animation: my 3s;
  width: 300px;
  margin: 170px auto;
  font-size: 40px;
  color: rgb(255, 255, 255);
  text-shadow: 1px 1px 21px black;
  font-family: 楷体;
  font-weight: bold;
  text-align: center;

}
@keyframes my1 {
  0%   {opacity: 0;}
  50%  {opacity: 0.1;}
  100% {opacity: 1;}
}
.aaa{
  width: 50px;
  height: 50px;
  margin: 200px auto;
  animation: my1 5s;
}
</style>