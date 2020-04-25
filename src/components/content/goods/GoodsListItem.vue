<template>
  <div class="goods-item" @click="itemclick">
    <img :src="goodsitem.show.img" alt="" @load="imgload">
    <div class="goods-info">
      <p>{{goodsitem.title}}</p>
      <span class="price">{{goodsitem.price}}</span>
      <span class="cfav">{{goodsitem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
    name:"GoodsListItem",
    props:{
      goodsitem:{
          type:Object,
          default(){
            return {}
          }
      }
    },
    methods:{
      imgload(){
        this.$bus.$emit('itemimgload')
      },
      itemclick(){
        this.$router.push('/detail/'+this.goodsitem.iid)
      }
    }
}
</script>

<style>
.goods-item{
  width: 48%; 
  padding-bottom: 40px;
  position: relative;
}
.goods-item img{
  width: 100%;
  border-radius:5px;
}
.goods-info{
  font-size :12px;
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  overflow: hidden;
}
.goods-info p{
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom:3px ;
}
.goods-info .price {
  color: var(--color-high-text);
  margin-right: 20px;
}

.goods-info .cfav {
  position: relative;
}

.goods-info .cfav::before {
  content: '';
  position: absolute;
  left: -15px;
  top: 0px;
  width: 14px;
  height: 14px;
  background: url("../../../assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>