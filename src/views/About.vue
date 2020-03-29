<template>
  <div class="about">
    <div class="content">
      <!-- 移动端二维码 -->
      <div class="mobile">
        <img src="~@/assets/poemLink.png" width="100px" height="100px" alt />
        <span>使用手机观看</span>
      </div>
      <div class="aboutPart">
        
      <h1>关于</h1>
        <span class="spanTitle">版本</span>
        <div class="spanInfo">
          <div class="infoitem">1.1 ------ 日期: 2020-3-15</div>
        </div>
      </div>
      <div class="aboutPart">
        <span class="spanTitle">作者</span>
        <div class="spanInfo">
          <div class="infoitem">Lu Dun</div>
        </div>
      </div>
      <div class="aboutPart">
        <span class="spanTitle">技术栈</span>
        <div class="spanInfo">
          <div class="infoitem">CSS流式布局，使PC端和移动端都能正常显示</div>
          <div class="infoitem">Vue,VueX,VueRouter的基本使用</div>
          <div class="infoitem">
            Webpack,node.js基本配置及对项目的打包处理;Git,github,gitee等仓库管理及页面发行
            <br />网址:
            <a href="https://ludun123.gitee.io/poem/" target="_blank">https://ludun123.gitee.io/poem</a>
          </div>
        </div>
      </div>
      <div class="aboutPart">
        <span class="spanTitle">闲话</span>
        <div class="spanInfo">
          <div class="infoitem">
            趁着寒假和疫情期间在家学习的Vue，然后第一次用Vue开发这个项目，属于边学边做那种吧，进程很慢，当初做的时候连一些最简单的语法都要重新翻文档。
            <br />
            <br />Vue，实现组件化开发，组件的复用等。古诗内容的文字样式排版是一个组件，其他的9个诗篇的只需调用这个组件，然后传递自己的内容就实现了新的内容；这网站右侧的导航条组件，也可以在以后其他项目中直接拿来使用。
            俗称轮子
            <br />
            <br />认为CSS是世界上最难的语言,感觉知乎上有个大佬解释的特别好:
            <a
              style="fontStyle:italic"
              href="https://www.zhihu.com/question/66167982/answer/239709754"
              target="_blank"
            >CSS 不是科学，CSS 是艺术...</a>
          </div>
        </div>
      </div>
      <div class="aboutPart">
        <span class="spanTitle">Bug反馈</span>
        <div class="spanInfo">
          <div class="infoitem">开发时一直用的Chrome浏览器和它自带的移动端测试，如果别的浏览器或者移动端出现问题可以反馈给我</div>
          <div class="infoitem">QQ:752746476</div>
        </div>
      </div>
      <div class="aboutPart">
        <span class="spanTitle">更新</span>
        <div class="spanInfo">
          <div class="infoitem">添加了全局样式 -webkit-tap-highlight-color: rgba(255, 255, 255, 0)</div>
          <div class="infoitem">防止移动端点击按钮等会出现蓝色边框,并再次觉得CSS才是最难的语言...</div>
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
.about {
  width: 100%;
  /* height: 720px; */
  background: url("~assets/img/home.jpeg");
  background-size: cover;
}
.content {
  margin: 0 auto;
  padding: 20px 20px;
  max-width: 950px;
  overflow: hidden;
}
.aboutPart {
  text-align: left;
}
.spanTitle {
  display: inline-block;
  /* float: left; */
  margin: 2px 0 0 2px;
  border-bottom: 2px solid #204040;
  font-size: 16px;
  color: #0f9696;
}
.spanInfo {
  margin-left: 75px;
  border-left: 1px dashed rgba(0, 0, 0, 0.4);
}
.infoitem {
  position: relative;
  padding: 0 0 30px 40px;
  line-height: 1.8;
  font-size: 16px;
  color: #193535;
  text-shadow: rgba(0, 0, 0, 0.8);
}
a {
  color: #4f8e54;
}
a:hover {
  color: skyblue;
}
.infoitem::before {
  content: "";
  position: absolute;
  top: 4px;
  left: -6.6px;
  width: 12px;
  height: 12px;
  transform: rotate(45deg);
  background: #d3d3d3;
}
.mobile {
  position: absolute;
  top: 0px;
  right: 80px;
  width: 100px;
  height: 120px;
  background: white;
  font-size: 14px;
  line-height: 14px;
  text-align: center;
}
</style>
