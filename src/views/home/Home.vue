<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-control :title="['流行','新款','精选']"
                    @tabclick= "tabclick"
                    ref="tabcontrol1"
                    v-show= "isshowtabcontrol"
                    class="tab-control"
    ></tab-control>
    <scroll class="content" 
            ref="scroll" 
            :probe-type= "3" 
            @scroll= "contentScroll"
            :pull-up-load= "true"
            @pullingUp = "pullingUp"
            >
      <home-swiper :banners = "banners" @swiperimgload = 'swiperimgload'></home-swiper>
      <recommend-view :recommends = "recommends"></recommend-view>
      <feature-view></feature-view>
      <tab-control :title="['流行','新款','精选']"
                    @tabclick= "tabclick"
                    ref="tabcontrol"
      ></tab-control>
      <goods-list :goods= "showgoods"></goods-list>
    </scroll>
    <back-top @click.native= "backClick" v-show= "isShowBack"></back-top>
  </div>
</template>

<script>
//公共组件
import NavBar from '@/components/common/navbar/NavBar'
import TabControl from '@/components/content/tabcontrol/TabControl'
import GoodsList from '@/components/content/goods/GoodsList'
import Scroll from '@/components/common/scroll/Scroll'
import BackTop from '@/components/content/backtop/BackTop'

//子组件
import HomeSwiper from './childcompons/HomeSwiper'
import RecommendView from './childcompons/RecommendView'
import FeatureView from './childcompons/FeatureView'

//工具类
import {getHomeMultiData,getHomeGoods} from '@/network/home'
import {debounce} from '@/common/utils'
import {ItemListenerMixin,BackTopMixin} from '@/common/mixin'

export default {
  name:'Home',
  components:{
    //公共组件
    NavBar,
    TabControl,
    GoodsList,
    Scroll,
    BackTop,

    //子组件
    HomeSwiper,
    RecommendView,
    FeatureView,
  },
  data(){
    return{
      banners:[],
      recommends:[],
      goods:{
        'pop':{page:0,list:[]},
        'new':{page:0,list:[]},
        'sell':{page:0,list:[]},
      },
      currentType:'pop',
      isShowTab:false,
      taboffetTop:0,
      isshowtabcontrol:false,
      saveY:0,
    }
  },
  computed:{
    showgoods(){
      return this.goods[this.currentType].list
    }
  },
  created(){
    //请求轮播图，及多个数据
    this.getHomeMultiData()
    //请求商品数据
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  mixins:[ItemListenerMixin,BackTopMixin],
  mounted(){
  },
  activated(){
    this.$refs.scroll.scrollTo(0,this.saveY,0)
    this.$refs.scroll.refresh()
  },
  deactivated(){
    //记录Y值
    this.saveY = this.$refs.scroll.getScrollY()
    //取消全局事件监听
    this.$bus.$off('itemimgload',this.itemImgListener)
  }
  ,
  methods:{
      //事件监听
      swiperimgload(){
          //获取offsetTop
          this.taboffetTop = this.$refs.tabcontrol.$el.offsetTop;
      },
      pullingUp(){
        this.getHomeGoods(this.currentType)
      },
      contentScroll(position){
        this.isShowBack = (-position.y) > 1000
        this.isshowtabcontrol = (-position.y) > this.taboffetTop
      },
      tabclick(index){
        switch (index){
          case 0:
          this.currentType='pop'
          break
          case 1:
          this.currentType='new'
          break
          case 2:
          this.currentType='sell'
          break
        }
        this.$refs.tabcontrol.currentIndex = index
        this.$refs.tabcontrol1.currentIndex = index
      },
      //网络请求
      //请求轮播图，及多个数据
      getHomeMultiData(){
        getHomeMultiData().then(res=>{
          this.banners = res.data.banner.list
          this.recommends = res.data.recommend.list
        })
      },
      //请求商品数据
      getHomeGoods(type){
          const page = this.goods[type].page + 1
          getHomeGoods(type,page).then(res=>{
            this.goods[type].list.push(...res.data.list)
            this.goods[type].page += 1
            this.$refs.scroll.finishPullUp()
        })
      }
  }
}
</script>

<style scoped>
  .home-nav{
    background-color: var(--color-tint);
    color: #fff;
  }
  .content{
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
    overflow: hidden;
  }
  .tab-control{
    position: relative;
    z-index: 9;
  }
</style>