<template>
  <div class="tab-control">
      <div  class="tab-control-item"
            v-for="(item,index) in title"
            :class="{active:index === currentIndex}"
            @click="itemClick(index)" 
            :key="item">
          <span>{{item}}</span>
      </div>
  </div>
</template>

<script>
export default {
    name:'TabControl',
    props:{
        title:{
            type:Array,
            default(){
                return []
            }
        }
    },
    data(){
        return{
            currentIndex:0
        }
    },
    methods:{
        itemClick(index){
            this.currentIndex = index
            this.$emit('tabclick',index)
        }
    }
}
</script>

<style scoped>
.tab-control{
    display: flex;
    text-align: center;
    font-size: 14px;
    background-color: #fff;
}
.tab-control-item{
    height: 40px;
    line-height: 40px;
    flex: 1;
}
.tab-control-item span{
    padding: 5px;
}
.active{
    color:var(--color-high-text);
}
.active span{
    border-bottom: 3px solid var(--color-high-text);
}
</style>