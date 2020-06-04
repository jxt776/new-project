<template>
  <div class="account-list">
      <div class="account-item">
          <div class="number">
              <span>0.00</span>元
          </div>
          <div class="account-info">我的余额</div>
      </div>

      <div class="account-item">
          <div class="number">
              <span>0</span>个
          </div>
          <div class="account-info">优惠券</div>
      </div>

      <div class="account-item">
          <div class="number">
              <span>0</span>分
          </div>
          <div class="account-info">我的积分</div>
      </div>
  </div>
</template>

<script>
export default {
    name:'AccountInfo'
}
</script>

<style scoped>
.account-list{
    height: 80px;
    display: flex;
    background-color: #f2f2f2;
}
.account-item{
    padding: 20px 20px;
    flex: 1;
    text-align: center;
    background-color: #fff;
    margin-right:2px ;
}
.account-item:last-of-type{
    margin-right:0 ;
}
.number{
    font-size: 10px;
}
.number span{
font-size: 20px;
color: red;
font-weight: 700;
}
.account-info{
font-size: 10px;
margin-top:3px ;
}
</style>