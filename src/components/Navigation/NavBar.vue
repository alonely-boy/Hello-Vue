<template>
  <div class="navigation ts" :class="{navshow:isNavshow}">
    <nav-bar-item class="logo">
      <img slot="icon" src="~assets/img/logo-cat.svg" alt="">
    </nav-bar-item>
    <router-link to="/home">
      <nav-bar-item class="naviitem">    
        <img slot="icon" src="~assets/img/主页.svg" alt="">
        <h1 slot="text">主页</h1>   
      </nav-bar-item>
    </router-link>
    <router-link :to="$store.state.contentGo">
      <nav-bar-item class="naviitem">
        <img slot="icon" src="~assets/img/归档项目.svg" alt="">
        <h1 slot="text">内容</h1>
      </nav-bar-item>
    </router-link>
    <router-link to="/about">
      <nav-bar-item class="naviitem">
        <img slot="icon" src="~assets/img/关于.svg" alt="">
        <h1 slot="text">关于</h1>
      </nav-bar-item>
    </router-link>
      <router-link to="/register">
      <nav-bar-item class="naviitem">
        <img slot="icon" src="~assets/img/icon.svg" alt="">
        <h1 slot="text">注册</h1>
      </nav-bar-item>
    </router-link>
    <div class="bird ts" @click="birdClick">
      <img v-if="!isNavshow" class="nav-menu-img" src="~assets/img/bird.png" alt="">
      <img v-if="isNavshow" class="nav-menu-img" src="~assets/img/birdactive.png" alt="">
    </div>
  </div>
</template>
<script>

import NavBarItem from './NabBarItem'

export default {
  name:'NavBar',
  components:{
    NavBarItem
  },
  data(){
    return{
      isNavshow:false,
      model:'day',
      pathURL:'/content'
    }
  },
  methods:{
    birdClick(){
      this.isNavshow=!this.isNavshow
    },
    changeModel(){
      if(this.model==='day'){
        this.model='night'
      }else{
        this.model='day'
      }
      this.$emit('changeModel',this.model)
    }
  }
}
</script>
<style scoped>
.navigation{
  position: fixed;
  width: 80px;
  height: 100%;
  top: 0;
  right: -80px;
  background: rgb(245, 245, 245);
  z-index: 999;
}
.navshow{
  right:0;
}
.logo img{
  margin-top: 20px;
  width: 30px;
  height: 30px;
}
a {
  text-decoration: none;
}
a:hover{
  text-decoration:underline;
  color: #172d3e;
}
.router-link-active {
  text-decoration: none;
}
.bird{
cursor: pointer;
      position: absolute;
      top: 20px;
      left: -50px;
      width: 50px;
      height: 40px;
      line-height: 36px;
      border-bottom: 2px solid #141818;
}
.bird img {
  height: 100%;
  margin-top: 4px;
}
.ts {
  transition: all 0.3s;
}
</style>