<template>
  <div>
      <router-view/>
    <content-nav></content-nav>
  </div> 
</template>
<script>

import ContentNav from './content/ContentNav'
export default {
  name: 'Content',
  data(){
    return {  
      path:'/content/tang1'
    }
  },
  methods:{
  },
  components: {
    // NavBar,
    ContentNav
  },
  // created(){
  //   console.log(this.path);
    
  //    if(this.path != this.$route.path)
  //     this.$router.push(this.path);
  // },
  created(){
    // console.log(this.$router.path);
    // console.log(this.$route.path);
    // console.log(this.path);
    // console.log(1253);
    // this.path = this.$route.path
    this.$store.commit('contentChange',this.$route.path)//如果不加原地刷新再点击内容会回到tang1
  },
  // activated(){
  //   // console.log(this.$router.path);
  //   // console.log(this.$route.path);
  //   console.log(111);
  //   // this.$store.commit('contentChange',this.path)
  //   // console.log(this.$store.state.contentGo);  
  //   //完成记录保存
  //   // if(this.path != this.$route.path){
  //   //   this.$router.replace(this.path);     
  //   // }
      
  // },
  // beforeRouteLeave(to, from, next){
  //   console.log(123);
  //   console.log(this.$route.path);
    
  //   next()
  // },  
}
</script>

<style scoped>

</style>
