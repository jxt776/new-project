<template>
  <div class="bottom-bar">
      <div class="check-content">
          <check-button :ischeck = 'checkedall' 
                        class="check-btn"
                        @click.native="checkedallbtn">
                        </check-button>
          <span>全选</span>
      </div>

      <div class="total-price">
          合计：{{totalPrice}}
      </div>

      <div class="calculate" @click = "calculate">
          去计算({{cartLength}})
      </div>
  </div>
</template>

<script>
import CheckButton from './CheckButton'
import { mapGetters } from 'vuex'


export default {
name:'CartBottomBar',
components:{
    CheckButton,
},
computed:{
    ...mapGetters({cartList:'cartList'}),
    totalPrice(){
        return '￥' + this.$store.state.cartList.filter( item => {
            return item.checked
        }).reduce((preValue,item)=>{
            return preValue += item.price * item.count
        },0).toFixed(2)
    },
    cartLength(){
        return this.$store.state.cartList.filter(item => item.checked).length
    },
    checkedall(){
        if(this.cartList.length === 0) return false
        return !this.cartList.find(item=>!item.checked)
    }
},
methods:{
    checkedallbtn(){
        if(this.checkedall){
            this.cartList.forEach(item=>item.checked = false)
        }else{
            this.cartList.forEach(item=>item.checked = true)
        }
    },
    calculate(){
        if(!this.checkedall){
            this.$emit('calculate','请选择商品')
        }else{
            this.$emit('calculate','计算中')
        }
    }
}
}
</script>

<style scoped>
.bottom-bar{
 width: 100%;
 height: 40px;
 background-color: #eee;
 position: fixed;
 bottom: 49px;
 line-height: 40px;
 display: flex;
}
.check-content{
    display: flex;
    align-items: center;
    margin-left: 10px;
    width: 60px;
}
.check-btn{
    line-height: 20px;
    width: 20px;
    height: 20px;
    margin-right:5px ;
}
.total-price{
    margin-left:30px;
    flex: 1;
}
.calculate{
    background-color: orange;
    width: 100px;
    text-align: center;
    
}
</style>