<template>
  <div class="recommend">
      <div class="recommenditem" v-for="item in recommends" :key='item.id'>
          <a :href="item.link">
            <img :src="item.image" alt="">
            <div>{{item.title}}</div>
          </a>
      </div>
  </div>
</template>

<script>
export default {
    name:'RecommendView',
    props:{
      recommends:{
        type:Array,
        default(){
          return []
        }
      }
    }
}
</script>

<style>
  .recommend{
    display: flex;
    padding:10px 0 20px;
    border-bottom:10px solid #f6f6f6 ;
  }
  .recommenditem{
    flex: 1;
    text-align: center;
    font-size: 12px;
  }
  .recommenditem img{
    width: 70px;
    height: 70px;
    margin-bottom: 10px;
  }
</style>