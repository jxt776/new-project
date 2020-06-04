<template>
  <div class="normal-list">
      <div class="normal-item" v-for="(item,index) in listData" :key="index">
          <span class="icon">
              <img :src="iconURL(item)"alt="">
          </span>
          <div class="info">{{item.info}}</div>
      </div>
      
  </div>
</template>

<script>
export default {
    name:'NormalList',
    props:{
        listData:{
            type:Array,
            default(){
                return []
            }
        }
    },
    methods:{
        iconURL(item){
            return require('@/assets/img/profile/' + item.icon)
        }
    }
}
</script>

<style scoped>
.normal-list{
    border-top:20px solid #f2f2f2 ;
}
.normal-item{
    height: 40px;
    position: relative;
}
.icon{
    padding:0 10px;
}
.icon img{
    width: 20px;
    height: 20px;
    position: absolute;
    top: 14px;
    left: 14px;
}
.info{
    font-size: 13px;
    line-height: 30px;
    border-bottom:1px solid #f2f2f2 ;
    margin-left: 40px;
    margin-top: -10px;
}
.normal-item:last-of-type .info{
    border:none ;
}
</style>