<template>
  <div class="register">
      
      <register-show></register-show>
  </div>
</template>

<script>
import RegisterShow from 'components/common/RegisterShow'
export default {
    name:'Register',
    components:{
      RegisterShow
  }
}
</script>

<style scoped>
.register{
    width: 100%;
    /* margin-left: 25%; */
}
.register h1{
    text-align: center;
}
</style>
