<template>
  <div class="detail">
        <detail-nav-bar class="detail-navbar" @titleClick = 'titleClick' ref="nav"></detail-nav-bar>
        <scroll class="detail-scroll" ref="scroll" @scroll = 'contentscroll' :probeType = '3'>
            <detail-swiper :topImages = 'topImages'></detail-swiper>
            <detail-base-info :goods = 'goods'></detail-base-info>
            <detail-shop-info :shopinfo = 'shopinfo'></detail-shop-info>
            <detail-goods-info  @imageload= 'imageload' class="goods-info" :detailinfo= 'detailinfo'></detail-goods-info>
            <detail-params :item-params = 'itemParams' ref="itemparams"></detail-params>
            <detail-comment-info ref="goodscomment" :commentinfo= 'commentinfo'></detail-comment-info>
            <goods-list ref="goodslist" :goods = 'recommend'></goods-list>
        </scroll>
        <detail-bottom-bar class="bottom-bar" @addToCart = 'addToCart'></detail-bottom-bar>
        <back-top class="backtop" v-show= "isShowBack" @click.native= "backClick" ></back-top>
        <toast :message = 'message' :show = 'show'></toast>
  </div>
</template>

<script>

import DetailNavBar from './childcomps/DetialNavBar'
import DetailSwiper from './childcomps/DetailSwiper'
import DetailBaseInfo from './childcomps/DetailBaseInfo'
import DetailShopInfo from './childcomps/DetailShopInfo'
import DetailGoodsInfo from './childcomps/DetailGoodsInfo'
import DetailParams from './childcomps/DetailParams'
import DetailCommentInfo from './childcomps/DetailCommentInfo'
import DetailBottomBar from './childcomps/DetailBottomBar'

import GoodsList from '@/components/content/goods/GoodsList'
import BackTop from '@/components/content/backtop/BackTop'
import Scroll from '@/components/common/scroll/Scroll'
import Toast from '@/components/common/toast/Toast'

import {getDetail,Goods,shopInfo,getRecommend} from '@/network/detail'
import {debounce} from '@/common/utils'
import {ItemListenerMixin,BackTopMixin} from '@/common/mixin'

import {mapActions} from 'vuex'

export default {
    name:"Detail",
    data(){
        return{
            iid:'',
            topImages:[],
            goods:{},
            shopinfo:{},
            detailinfo:{},
            itemParams:{},
            commentinfo:{},
            recommend:[],
            detailTopYs:[],
            getDetailTopYs:null,
            currentIndex:0,
            isShowBack:false,
            message:'',
            show:false
        }
    },
    components:{
        DetailNavBar,
        DetailSwiper,
        DetailBaseInfo,
        DetailShopInfo,
        Scroll,
        DetailGoodsInfo,
        DetailCommentInfo,
        GoodsList,
        DetailParams,
        DetailBottomBar,
        BackTop,
        Toast
    },
    created(){
        //保存iid
        this.iid = this.$route.params.iid
        //根据iid获取数据
        getDetail(this.iid).then(res=>{
            const data = res.result
            //轮播图
            this.topImages = data.itemInfo.topImages
            //商品信息
            this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)
            //店铺信息
            this.shopinfo = new shopInfo(data.shopInfo)
            //商品详情
            this.detailinfo = data.detailInfo
            //参数
            this.itemParams = data.itemParams
            //评论
            if(data.rate.cRate != 0){
                this.commentinfo = data.rate.list[0]
            }
        })
            //推荐
        getRecommend().then(res => {
            this.recommend = res.data.list
        })
        this.getDetailTopYs = debounce(()=>{
            this.detailTopYs = []
            this.detailTopYs.push(0)
            this.detailTopYs.push(this.$refs.itemparams.$el.offsetTop)
            this.detailTopYs.push(this.$refs.goodscomment.$el.offsetTop)
            this.detailTopYs.push(this.$refs.goodslist.$el.offsetTop)
            this.detailTopYs.push(Number.MAX_VALUE)
        },200)
    },
    methods:{
        ...mapActions(['addCart']),
        //加入购物车
        addToCart(){
            const product = {}
            product.image = this.topImages[0]
            product.title = this.goods.title
            product.desc = this.goods.desc
            product.price = this.goods.realPrice
            product.iid = this.iid

            //this.$store.commit('addCart',product)
            // this.$store.dispatch('addCart',product).then(res=>{
            //     console.log(res)
            //}) 
            this.addCart(product).then(res=>{
                this.show = true;
                this.message = res;
                setTimeout(() => {
                    this.show = false;
                    this.message = '';
                }, 800);
            })
        },
        imageload(){
            this.refresh()
            this.getDetailTopYs()
        },
        titleClick(index){
            this.$refs.scroll.scrollTo(0,-(this.detailTopYs[index]),200)
        },
        contentscroll(position){
            const positionY = -position.y 
            this.isShowBack = positionY > 1000
            let length = this.detailTopYs.length
            
            // for(let i=0;i<length;i++){
            //     if(this.currentIndex != i && i<length-1 && positionY >= this.detailTopYs[i] && positionY <this.detailTopYs[i+1] ||this.currentIndex != i && i===length-1 && positionY >= this.detailTopYs[i]){
            //         this.currentIndex = i
            //         this.$refs.nav.currentindex = this.currentIndex
            //     }
            // }

            for(let i=0;i<length-1;i++){
                if(this.currentIndex !== i && positionY >= this.detailTopYs[i] && positionY < this.detailTopYs[i+1]){
                    this.currentIndex = i
                    this.$refs.nav.currentindex = this.currentIndex
                }
            }
        }
    },
    mixins:[ItemListenerMixin,BackTopMixin],
    mounted(){

    },
    destroyed(){
        this.$bus.$off('itemimgload',this.itemImgLoad)
    }
}
</script>

<style scoped>
.detail{
    position: relative;
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
.bottom-bar{
    background-color: #fff;
    height: 58px;
    width: 100%;
    position: absolute;
    bottom: 0;
    z-index: 1;
}
.backtop{
    z-index: 3;
    padding-bottom: 10px;
}
</style>