<template>
  <div v-if="Object.keys(goods).length !== 0" class="base-info">
      <div class="info-title">{{goods.title}}</div>
      <div class="info-price">
          <span class="new-price">{{goods.newPrice}}</span>
          <span class="old-price">{{goods.oldPrice}}</span>
          <span v-if="goods.discount" class="discount">{{goods.discount}}</span>
      </div>
      <div class="info-other">
          <span>{{goods.columns[0]}}</span>
          <span>{{goods.columns[1]}}</span>
          <span>{{goods.columns[2]}}</span>
      </div>
      <div class="info-services">
          <span class="info-services-item" v-for="index in goods.services.length">
                <img :src="goods.services[1].icon">
                <span>{{goods.services[index-1].name}}</span>
          </span>
      </div>
  </div>
</template>

<script>
export default {
    name:'detailBaseInfo',
    props:{
        goods:{
            type:Object,
            default(){
                return {}
            }
        }
    }
}
</script>

<style>
.base-info{
    margin-top: 15px;
    padding: 0 8px;
    color: #999;
    border-bottom: 5px solid #f2f5f8;
}
.info-title{
    color: #222;
}
.info-price{
    margin-top: 10px;
}
.info-price .new-price{
    font-size: 24px;
    color: var(--color-high-text);
}
.info-price .old-price{
    font-size: 13px;
    margin-left: 5px;
    text-decoration: line-through;
    position: relative;
    top: -2px;
}
.info-price .discount{
    font-style: 12px;
    padding: 2px 5px;
    color: #fff;
    background-color:var(--color-high-text);
    border-radius: 8px;
    margin-left: 5px;
    position: relative;
    top: -2px;
}
.info-other{
margin-top: 15px;
line-height: 30px;
display: flex;
font-size:13px ;
border-bottom: 1px solid rgba(100, 100, 100, .1);
justify-content: space-between;
}
.info-services{
    margin:10px 0;
    display: flex;
    justify-content: space-between;
    line-height: 20px;
    flex-wrap: wrap;
}
.info-services-item img{
    width: 14px;
    height: 14px;
    position: relative;
    top: 2px;
}
.info-services-item span{
    font-size: 13px;
    color: #333;
    margin-left: 1px;
}
</style>