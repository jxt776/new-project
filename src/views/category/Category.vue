<template>
  <div class="categroy">
    <nav-bar class="navbar">
      <div slot="center">商品分类</div>
    </nav-bar>
    <div class="content">

      <tab-menu :categories = 'categories'></tab-menu>
    
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar'
import TabMenu from './childcomps/TabMenu'

//请求数据
import {getCategory} from '@/network/categroy'

export default {
  name:'Category',
  components:{
    NavBar,
    TabMenu
  },
  data(){
    return{
      categories:[],
    }
  },
  created(){
    //请求分类数据
    this._getCategory()
  },
  methods:{
    _getCategory(){
      getCategory().then( res =>{
        
        this.categories = res.data.category.list
        console.log(this.categories);
      })
    }
  }
};
</script>

<style scoped>
.navbar{
  background-color: var(--color-tint);
  color: #fff;
}
.content{
  display: flex;
}
</style>