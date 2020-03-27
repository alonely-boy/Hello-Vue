<template>
    <div>
        <div class="container">
            <div id="commander">
                <div @click="allClick">
                    <img src="~assets/img/gear.png" alt="" @click="toSpan"  :class="{spanne1:span,spanne2:!span}"> 
                    <!--就是不管span是true还是false都加上动画类名 -->
                </div>
                <transition name="slide">
                    <div id="t" v-show="allshow">
                        <div @click="tClick">
                            <div id="command2">唐诗</div>  
                            <transition name="slide">
                                <ul v-show="tshow">
                                  <li v-for="item in tang" :key="item.name" @click.stop="liClick(item)" :class="{active:isActivePath==baseURL+item.path}">
                                      {{item.name}}
                                  </li>
                                    
                                </ul>
                            </transition>      
                        </div>
                       
                        <div @click="sClick">
                            <div id="command2">宋词</div>
                            <transition name="slide">
                                <ul v-show="sshow">
                                   <li v-for="item in song" :key="item.name" @click.stop="liClick(item)" :class="{active:isActivePath==baseURL+item.path}">
                                    {{item.name}}
                                   </li>                          
                                </ul>
                            </transition>      
                        </div>
                            
                        <div @click="yClick">
                            <div id="command2">元曲</div>
                            <transition name="slide">
                            <ul v-show="yshow">
                                <li v-for="item in yuan" :key="item.name" @click.stop="liClick(item)" :class="{active:isActivePath==baseURL+item.path}">
                                  {{item.name}}
                                </li>
                            </ul>
                            </transition>      
                        </div>              
                    </div><!-- id=t -->
                </transition>   
                <div class="change icon-pencil" v-show="allshow" @click="up">+</div>
                <div class="change icon-pencil" v-show="allshow" @click="down">-</div>
                <!-- <div class="change icon-mobile" v-show="allshow" @click="mobile"></div> -->
            </div>          
        </div>
    </div>
</template>
<!--         poem ->  item$ ->   -> content.vue   -->
<script>
export default {
    name:'ContentNav',
    data(){
        return {
            span:false,
            isActivePath:'/content/tang1',
            allshow:true,
            tshow:true,                                  //allshow 套着其他3个show，也就是无论allshow是否显示，其他人的显示状态都是保存的
            sshow:true,
            yshow:true,
            baseURL:'/content',
            tang:[{path:'/tang1',name:'李白'},{path:'/tang2',name:'白居易'},{path:'/tang3',name:'皇甫冉'}],
            song:[{path:'/song1',name:'梅尧臣'},{path:'/song2',name:'晏殊'},{path:'/song3',name:'宋祁'}],
            yuan:[{path:'/yuan1',name:'张可久'},{path:'/yuan2',name:'徐再思'},{path:'/yuan3',name:'张养浩'}],
            screenWidth: document.body.clientWidth,
        }
    },
    computed:{
     
    },
    methods:{
        toSpan(){
          this.span = !this.span;
        },
        // LiName{//防止li元素在移动端文字变成两行排版错位，已废弃，已修改字体大小在移动端也不会换行的程度
          // if(this.screenWidth<=900){
          //   this.$store.commit("mobileSize",{type:'mobile'})
          //   return item.name[0]//李
          // } else{
          //   this.$store.commit("mobileSize",{type:'pc'})
          //   return item.name//李白
          // }
        // },
        tClick(){
            this.tshow = !this.tshow
        },
        sClick(){
            this.sshow = !this.sshow
        },
        yClick(){
            this.yshow = !this.yshow
        },
        allClick(){
            // this.tshow = false;this.sshow = false;this.yshow=false;
            this.allshow = !this.allshow
        },
        up(){
            // console.log(this.$store.state.fontsize);
            this.$store.commit('increment')
        },
        down(){
            this.$store.commit('decrement')
        },
        liClick(item){
          // console.log(this.$router);
          // console.log(this.$route);
          if(this.$route.path != this.baseURL+item.path){
            this.$router.replace(this.baseURL+item.path)
            this.$store.commit('contentChange',this.baseURL+item.path)
          }
          this.isActivePath = this.baseURL+item.path
          // console.log(this.screenWidth); 
        },
    },
    created(){
      // console.log(123);
      this.isActivePath = this.$route.path
    },
    updated(){
      // console.log(321);
      this.screenWidth = document.body.clientWidth;
       if(this.screenWidth<=900){
            this.$store.commit("mobileSize",{type:'mobile'})
          } else{
            this.$store.commit("mobileSize",{type:'pc'})
          }
    }
}
</script>

<style scoped>
@keyframes myfirst
{
	from {transform: rotate(0deg);}
	to {transform: rotate(90deg);}
}
@keyframes mySecond
{
	from {transform: rotate(0deg);}
	to {transform: rotate(90deg);}
}
.spanne2{
  animation:mySecond .5s;
}
.spanne1{
  animation:myfirst .5s;
}
.slide-enter-active, .slide-leave-active{
    transition: opacity .5s;
}
.slide-enter, .slide-leave-to{
    opacity: 0;
}
.container{
    /* background: rgb(245, 245, 245); */
    top: 5%;
    left: 0;
    position: fixed;
    width: 5%;
    min-width: 40px;
    cursor: pointer;
    /* background: black; */
    /* border: 1px solid black; */
}
#command2,.change{/* command2是一级标题，change是字体控制 */
    min-height: 40px;
    height: 40px;
    /* border: 1px solid black; */
    background: rgb(245, 245, 245);
    text-align: center;
    font-weight: bold;
    line-height: 40px;
    font-size: 16px;
}
#command2:hover{
    background: rgba(169,169,169,1);
    color: white;
}
.change:hover{
    background: rgba(169,169,169,1);
    color: white;
}
#t div{/**t是包裹里面li的div集合 */
    width: 100%;
    /* float: left; */
}
img{/**齿轮图标 */
    width: 100%;
    /* min-width: 50px; */
    height: 100%;
}
div{
    border-radius: 2px;
}
ul{
    margin: 0;
    padding: 0;
    /* display: block; */
    width: 100%;
}
li{
    margin: 0;
    padding: 0;
    display: block;
    width: 100%;
    /* border-bottom: 1px solid red; */
    color: rgb(122, 101, 101);
    line-height: 30px;
    text-align: center;
    font-size: 12px;
    background-color: rgb(245, 245, 245);
}
li:hover{
    background: rgba(169,169,169,1);
    color: rgb(255, 255, 255);
}
.active{
  background: rgba(169,169,169,1);
    color: rgb(255, 255, 255);
}
*{
  user-select: none;
}
</style>