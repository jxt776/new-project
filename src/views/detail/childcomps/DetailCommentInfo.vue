<template>
    <div v-if="Object.keys(commentinfo).length!==0" class="comment-info">
        <div class="info-header">
            <div class="info-title">用户评价</div>
            <div class="info-more">
              更多
              <i class="arrow-right"></i>
            </div>
        </div>

        <div class="info-user">
          <img :src="commentinfo.user.avatar" alt="">
          <span>{{commentinfo.user.uname}}</span>
        </div>

        <div class="info-detail">
          <p>{{commentinfo.content}}</p>
          <div class="info-other">
            <span class="date">{{
              commentinfo.created | showDate}}</span>
            <span>{{commentinfo.style}}</span>
          </div>
        </div>
        
        <div class="info-imgs">
          <img v-for= "(item,index) in commentinfo.images" :key= "index" :src= 'item' alt="">
        </div>
    </div>
</template>

<script>

import {formatDate} from '../../../common/utils'

export default {
  name:'DetailCommentInfo',
  props:{
    commentinfo:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  filters:{
    showDate:function(value){
      let date = new Date(value*1000)
      return formatDate(date,'yyyy-MM-dd')
    }
  }
}
</script>

<style scoped>
.comment-info{
  padding: 5px 12px;
  color: #333;
  border-bottom: 5px solid #f2f5f8;
}
.info-header{
  height: 50px;
  line-height: 50px;
  border-bottom:1px solid rgba(0, 0, 0, .1) ;
}
.info-title{
  font-size: 15px;
  float: left;
}
.info-more{
  font-size: 13px;
  float: right;
  margin-right:10px ;
}
.info-user{
  padding: 10px 0 5px;
}
.info-user img{
  width: 42px;
  height: 42px;
  border-radius:50% ;
}
.info-user span{
  font-size: 15px;
  margin-left:10px;
  position: relative;
  top: -13px;
}
.info-detail{
  padding: 0 5px 15px;
}
.info-detail p{
  font-size: 14px;
  color: #777;
  line-height: 1.5;
}
.info-detail .info-other{
  font-size: 12px;
  color: #999;
  margin-top: 10px;
}
.info-detail .date{
  margin-right:8px ;
}
.info-imgs{
    margin-top:10px;
}
.info-imgs img{
  width: 70px;
  height: 70px;
  margin-right: 5px;
}
</style>
