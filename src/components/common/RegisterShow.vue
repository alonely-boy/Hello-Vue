<template>
    <div class="RegisterShow">
        <div id="a">注册功能,没法开发..</div>
        <form action="">
          <div>用户名:{{userName}}</div>
            <input type="text" v-model="userName" placeholder="请输入用户名">
            <div>密码:{{input1}}</div>
            <input type="text" placeholder="请输入密码" v-model="input1">      
            <div>确认密码:{{input2}}</div>
            <input type="text" placeholder="请输入密码" v-model="input2">
            <div class="aaa">
              <button disabled>提交</button>     
               
              <button @click.prevent="remove">清空</button>

              
          </div>
          
        </form>
        <br>
        <div>
            判断用户输入的数据对不对可太难了，这种复杂的逻辑问题应该交给后端来判断O(∩_∩)O~
        </div>
        
    </div>
</template>

<script>
  export default {
    created(){

    },
    name:'RegisterShow',
    data() {
      return {
        userName:'',
        input1: '',
        input2: ''
      }
    },
    methods:{
      remove(){
        this.userName = '',
        this.input1 = '',
        this.input2 = ''
      },

    }
  }
</script>

<style scoped>
.RegisterShow{
  /* position: fixed; */
  width: 400px;
  /* top: 15%;
  left: 30%; */
  background: #bfc7dd;
  height: 550px;
  z-index: 2;
  text-align: center;
}
#a{
  font-size: 24px;
  margin: 25px;
  color: #0b328d;
}
.RegisterShow input{
    margin-top: 10px;
    margin-bottom: 20px;
    width: 80%;
    /* background: #fcfcfd!important; */
    /* float: left; */
}
.RegisterShow div{
  width: 80%;
    margin-left: 10%;
}
.aaa{
    display: flex;
    justify-content: center;
}
.aaa button{
    flex: 0 0 25%;
    
}
</style>