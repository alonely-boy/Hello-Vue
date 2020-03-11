<template>

    <!-- Poem为所有诗歌所用的模板  具体关系为： HomeTable为最外层组件，各种item$ 为不同的诗，不同的诗都用组件Poem的结构 -->
    
    <div class>
        <div class="body" :class="{body1:logic(1),body2:logic(2),body3:logic(3),body4:logic(4),body5:logic(5),body6:logic(6)}">  
            <div class="header">
                <div :style="{'fontSize':$store.state.fontsize+8+'px'}">  
                    <slot name="header"></slot>
                </div>
             
            </div>
            <div class="center">
                <div :style="{'fontSize':$store.state.fontsize+4+'px'}"><slot id="header" name="center_h"></slot> </div>                
                <div :style="{'fontSize':$store.state.fontsize+6+'px'}"><slot name="center"></slot></div>
            </div>            
            <div class="right">
                <div id="info" :style="{'fontSize':$store.state.fontsize+1+'px'}">诗人简介:</div>          
                <div :style="{'fontSize':$store.state.fontsize+1+'px'}"><slot name="right" class="info"></slot></div>
            </div>
            <div class="footer">
                <span :style="{'fontSize':$store.state.fontsize+1+'px'}">参考译文:</span>
                <br>
                <div :style="{'fontSize':$store.state.fontsize-1+'px'}"><slot name="footer"></slot></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
          to:Math.floor( Math.random()*6 + 1)  ,

        }
    },
    name:'Poem',
    methods:{
      logic(item){
        return item == this.to
      }
    },
    created(){
      this.to = Math.floor( Math.random()*6 + 1)     
    }
}
</script>

<style scoped>
.run{
    position: fixed;
    right: 25px;
    top: 25px;
    width: 50px;
    height: 50px;
    background: forestgreen;
}
  .body1{
    background: url("~assets/img_content/1.jpg");
  }
  .body2{
    background: url("~assets/img_content/2.jpg");
  }
  .body3{
    background: url("~assets/img_content/3.jpg");
  }
  .body4{
    background: url("~assets/img_content/4.jpg");
  }
  .body5{
    background: url("~assets/img_content/5.jpg");
  }
  .body6{
    background: url("~assets/img_content/6.jpg");
  }
 .body{
    
    background-size: cover;
    font-family: 楷体;
    box-sizing: border-box;
    /* height: 900px; */
    /* opacity: 0.5; */
    /* background-color:transparent; */
}
.header{
    font-size: 32px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    font-weight: bold;
}
.center{
    text-align: center;
    font-size: 28px;
    width: 80%;
    margin-left: 10%;
    color: rgb(13, 111, 175);
    text-shadow: 2px 2px 15px rgb(255, 255, 255);
}
.center #header{
    font-size: 34px;
    color: cornflowerblue;
}
.right{
    width: 98%;
    padding-left: 2%;
    text-align: left;
    font-size: 20px;
    letter-spacing: 2px;
    line-height: 26px;
    color: rgb(229, 255, 0);
    text-shadow: 2px 2px 3px rgb(0, 0, 0);
    margin-bottom: 30px;
}
.right #info{
    font-weight: bold;
    font-size: 25px;
    color: rgb(12, 2, 2);
    text-shadow: none;
    
}
.footer{
    letter-spacing: 2px;
    width: 90%;
    padding-left: 5%;
    text-align: left;
    font-size: 20px;
    letter-spacing: 1px;
    line-height: 40px;
    color: rgb(255, 255, 255);
    text-shadow: 1px 1px 2px rgb(0, 0, 0);

}
.footer span{
    font-size: 25px;
    color: gold;
    text-shadow: 2px 2px 2px rgb(185, 56, 56);
}
</style>