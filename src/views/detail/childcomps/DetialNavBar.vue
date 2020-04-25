<template>
    <nav-bar>
        <div slot="left" class="back" @click="backclick">
            <img src="@/assets/img/common/back.svg" alt="">
        </div>
        <div slot="center" class="title">
            <div class="titleitem" 
                    v-for="(item,index) in title" 
                    :key="item.id"
                    :class="{active:index == currentindex}"
                    @click="titleclick(index)"
            >{{item}}</div>
        </div>
    </nav-bar>
</template>

<script>

import NavBar from '@/components/common/navbar/NavBar'

export default {
    name:'DetailNavBar',
    data(){
        return{
            title:['商品','参数','评论','推荐'],
            currentindex:0
        }
    },
    components:{
        NavBar
    },
    methods:{
        titleclick(index){
            this.currentindex = index
        },
        backclick(){
            this.$router.back()
        }
    }
}
</script>

<style>
.title{
    display: flex;
    font-size: 12px;
}
.titleitem{
    flex: 1;
}
.active{
    color:var(--color-high-text);
}
.back img{
    margin-top: 12px;
}
</style>