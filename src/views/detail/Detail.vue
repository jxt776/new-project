<template>
  <div class="detail">
        <detail-nav-bar class="detail-navbar"></detail-nav-bar>
        <scroll class="detail-scroll" ref="scroll">
            <detail-swiper :topImages = 'topImages'></detail-swiper>
            <detail-base-info :goods = 'goods'></detail-base-info>
            <detail-shop-info :shopinfo = 'shopinfo'></detail-shop-info>
            <detail-goods-info class="goods-info" :detailinfo= 'detailinfo'></detail-goods-info>
        </scroll>
  </div>
</template>

<script>

import DetailNavBar from './childcomps/DetialNavBar'
import DetailSwiper from './childcomps/DetailSwiper'
import DetailBaseInfo from './childcomps/DetailBaseInfo'
import DetailShopInfo from './childcomps/DetailShopInfo'
import DetailGoodsInfo from './childcomps/DetailGoodsInfo';

import scroll from '@/components/common/scroll/Scroll'

import {getDetail,Goods,shopInfo} from '@/network/detail'

export default {
    name:"Detail",
    data(){
        return{
            iid:'',
            topImages:[],
            goods:{},
            shopinfo:{},
            detailinfo:{},
        }
    },
    components:{
        DetailNavBar,
        DetailSwiper,
        DetailBaseInfo,
        DetailShopInfo,
        scroll,
        DetailGoodsInfo,
    },
    created(){
        //保存iid
        this.iid = this.$route.params.iid
        //根据iid获取数据
        getDetail(this.iid).then(res=>{
            console.log(res);
            const data = res.result
            //轮播图
            this.topImages = data.itemInfo.topImages
            //商品信息
            this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)
            //店铺信息
            this.shopinfo = new shopInfo(data.shopInfo)
            //商品详情
            this.detailinfo = data.detailInfo
        })
    },
    // methods:{
    //     imageload(){
    //         this.$refs.scroll.refresh()
    //     }
    // },
}
</script>

<style scoped>
.detail{
    position: relative;
    z-index: 1;
    background-color: #fff;
    height: 100vh;
}
.detail-scroll{
    position: absolute;
    top:44px;
    bottom: 58px;
    left: 0;
    right: 0;
    overflow: hidden;
}
</style>