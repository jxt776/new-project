<template>
<div>
    <swiper>
        <swiper-item :key="item.id" 
                        v-for="item in topImages"
                        class="detail-item">
            <img :src="item" alt="">
        </swiper-item>
    </swiper>
</div>
</template>

<script>

import {Swiper,SwiperItem} from '@/components/common/swiper/index'

export default {
    name:'DetailSwiper',
    props:{
        topImages:{
            type:Array,
            default(){
                return []
            }
        }
    },
    components:{
        Swiper,
        SwiperItem
    }
}
</script>

<style scoped>
.detail-item{
    height: 300px;
    overflow: hidden;
}
</style>