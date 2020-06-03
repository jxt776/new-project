<template>
  <div class="cart" >
<!-- 导航 -->
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{length}})</div>
    </nav-bar>
<!-- 商品列表 -->
    <cart-list></cart-list>
<!-- 计算 -->
    <cart-bottom-bar @calculate = 'calculate'></cart-bottom-bar>

    <toast :message = 'message' :show = 'show'></toast>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import CartList from './childcomps/CartList';
import CartBottomBar from './childcomps/CartBottomBar'
import Toast from '@/components/common/toast/Toast'

import {mapGetters} from 'vuex';

export default {
  name: "Category",
  data(){
    return {
      message:'',
      show:false
    }
  },
  components: {
    NavBar,
    CartList,
    CartBottomBar,
    Toast
  },
  computed:{
    // cartLength(){
    //   return this.$store.state.cartList.length
    // }
    ...mapGetters({
      length:'cartLength'
    })
  },
  methods:{
    calculate(res){
      this.message = res
      this.show = true
      setTimeout(() => {
      this.show = false
      this.message = ''
      }, 800);
    }
  }
};
</script>

<style scoped>
.nav-bar{
  background-color:var(--color-tint);
  color: #fff;
  font-weight: 700;
}
</style>