<template>
  <div class="about">
    <div class="content">
    <h1>关于</h1>
    <div class="aboutPart">
      <span class="spanTitle">版本</span>
      <div class="spanInfo">
        <div class="infoitem">1.0</div>
      </div>
    </div>
    <div class="aboutPart">
      <span class="spanTitle">作者</span>
      <div class="spanInfo">
         <div class="infoitem">LD</div>
      </div>
    </div>
    <div class="aboutPart">
      <span class="spanTitle">闲话</span>
      <div class="spanInfo">
         <div class="infoitem">
           第一次尝试用Vue开发，非常不熟练，开发速度比原来html+css+jQuery的分离写法慢了很多。之前看过的东西都忘了，记住的能用的点也不会写，还得边做边翻翻文档看看应该是怎么写的。
           <br><br>
           Vue确实很好用，组件化开发，可以拿别人的组件直接过来用，这个网站右侧的导航条就是用的别人的组件，一个封装好的组件应该让别人能直接拿来就用，不用再看源码是怎么实现的。
           拒绝重复造轮子\(^o^)/~
           <br><br>
           Vue组件化开发的好处：组件与组件之间能相互通信，像这个网页会保存你内容的浏览记录，刷新或者切换回来之后会存下之前观看的哪篇古诗并跳转过去。
           还可以传递数值更改别的组件的字体大小，这些在原生js或者jQuery中都是很难实现的。我认为Vue,React，Angular等前端框架的出现才真正实现了前端工程化，开发网站不再是简单的切图了。
           <br><br>
           CSS是世界上最难的语言<a style="fontStyle:italic" href="https://www.zhihu.com/question/66167982/answer/239709754" target="_blank"> CSS 不是科学，CSS 是艺术...</a>
         </div>
      </div>
    </div>
    <!-- <div class="aboutPart">
      <span class="spanTitle">源码</span>
      <div class="spanInfo">
         <div class="infoitem"><a>github仓库</a><span>(还不会用...)</span></div>
      </div>
    </div> -->
    <div class="aboutPart">
      <span class="spanTitle">Bug反馈</span>
      <div class="spanInfo">
        <div class="infoitem">
          开发时一直用的Chrome浏览器和它自带的移动端测试，如果别的浏览器或者移动端出现问题可以反馈给我    
        </div>
        <div class="infoitem">QQ:752746476</div>
      </div>
    </div>
    <div class="aboutPart">
      <span class="spanTitle">更新</span>
      <div class="spanInfo">
        <div class="infoitem">添加了全局样式</div>
        <div class="infoitem">-webkit-tap-highlight-color: rgba(255, 255, 255, 0)</div>   
        <div class="infoitem">防止移动端点击按钮等会出现蓝色边框</div>
        <div class="infoitem">再次验证了CSS才是最难的(。。。)</div>
      </div>
    </div>
  </div>
  </div>
</template>

<style scoped>
/* h1{
  margin: 0;
  padding: 0;
} */
.about{
  width: 100%;
  /* height: 720px; */
  background: url('~assets/img/home.jpeg');
  background-size: cover;
}
.content{
  margin: 0 auto;
  padding: 20px 20px;
  max-width: 950px;
  overflow: hidden;
}
.aboutPart{
  text-align: left;
}
.spanTitle{
  display: inline-block;
  /* float: left; */
  margin: 2px 0 0 2px;
  border-bottom: 2px solid #204040;
  font-size: 16px;
  color:#0f9696
}
.spanInfo{
  margin-left: 75px;
  border-left: 1px dashed rgba(0,0,0,0.4);
}
.infoitem{
  position: relative;
  padding: 0 0 30px 40px;
  line-height: 1.8;
  font-size: 16px;
  color:#193535;
  text-shadow: rgba(0,0,0,0.8);
}
a{
  color:#4f8e54
}
a:hover{
  color: skyblue
}
.infoitem::before{
  content: '';
  position: absolute;
  top: 4px;
  left: -6.6px;
  width: 12px;
  height: 12px;
  transform: rotate(45deg);
  background: #d3d3d3;
}
</style>
