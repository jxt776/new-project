<template>
  <div class="check-button" :class="{active:ischeck}">
      <img src="@/assets/img/cart/tick.svg" alt="">
  </div>
</template>

<script>
export default {
  name:'CheckButton',
  props:{
    ischeck:{
      type:Boolean,
      default(){
        return false
      }
    }
  }
}
</script>

<style scoped>
.check-button{
  border-radius: 50%;
  border: 1px solid #aaa;
}
.active{
  background-color: red;
  border-color:red;
}
</style>