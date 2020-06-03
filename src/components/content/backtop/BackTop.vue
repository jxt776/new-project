<template>
  <div class="backtop">
      <img src="~@/assets/img/common/top.png" alt="">
  </div>
</template>

<script>
export default {
    name:'BackTop',
    methods:{
        
    }
}
</script>

<style scoped>
.backtop{
    position: fixed;
    bottom: 50px;
    right: 10px;
}
.backtop img{
    width: 43px;
    height: 43px;
}
</style>