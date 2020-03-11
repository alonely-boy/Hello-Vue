<template>
  <div id="app">
    <nav-bar></nav-bar>
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
      <div class="container">
        <keep-alive include="Content">
            <router-view/>
        </keep-alive>
      </div>
  </div>
</template>
<script>
import NavBar from 'components/Navigation/NavBar'
export default {
  name:'App',
  components:{
    NavBar
  }
}
</script>
<style scoped>
/* *,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
} */

 @import "assets/css/base.css";
 @import "assets/fonts/style.css";/*引入字体样式 */
 /* body{
    padding: 0;
    margin: 0;
    
} */
@media screen and (max-width: 639px){
  .container{
    width: 100% !important;
    margin-left: 0 !important;  /*手机端时去掉所有边框 */
  }
  .nav{
    display: none;
  }
}
.container{
  width: 90%;
  margin-left: 5%;
}
</style>
