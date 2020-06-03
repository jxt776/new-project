<template>
  <div class="cart-list">
      <scroll class="content" ref="scroll">
            <cart-list-item  v-for="(item,index) in cartList" 
                            :key="index" 
                            :itemInfo = 'item'>
            </cart-list-item>
      </scroll>
  </div>
</template>

<script>
import Scroll from '@/components/common/scroll/Scroll';

import CartListItem from './CartListitem'

import {mapGetters} from 'vuex';

export default {
    name:'CartList',
    components:{
        Scroll,
        CartListItem
    },
    computed:{
        ...mapGetters({
            cartList:'cartList'
        })
    },
    activated(){
        this.$refs.scroll.refresh()
    }
}
</script>

<style scoped>
.cart-list{
    position: absolute;
    top: 44px;
    bottom: 49px;
    right: 0;
    left: 0;
    height: (100%-93px);
}
.content{
    height: 100%;
    overflow: hidden;
}
</style>