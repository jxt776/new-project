<template>
  <div class="user-info">
    <!-- 头像 -->
    <img class="head-img" src="@/assets/img/profile/avatar.svg" alt="">
    <!-- 文字 -->
    <div class="info">
        <div class="login">登录/注册</div>
        <div class="phone">
            <img src="@/assets/img/profile/phone.svg" alt="">
            <span>暂无绑定手机号</span>
        </div>
    </div>
    <!-- 箭头 -->
    <div class="arrow">
        <img src="@/assets/img/common/arrow-left.svg" alt="">
    </div>

  </div>
</template>

<script>
export default {
    name:'UserInfo',

}
</script>

<style scoped>
.user-info{
    height: 70px;
    background-color: var(--color-tint);
    border-top:1px solid gainsboro ;
    display: flex;
    padding: 6px 15px;
}
.head-img{
    width: 60px;
    height: 60px;
    border-radius: 50%;
}
.info{
    flex: 1;
    color: #fff;
}
.login{
    font-size: 15px;
    margin-top: 5px;
    margin-left:5px ;
}
.phone{
    line-height: 31px;
}
.phone span{
    font-size: 10px;
}
.phone img{
    width: 20px;
    height: 20px;
    vertical-align: middle;
}
.arrow{
    width: 20px;
    line-height: 65px;
}
.arrow img{
    width: 20px;
}
</style>