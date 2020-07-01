<template>
  <div>
    <div class="categorydetail">
      <div @click="itemClick(item.iid)" class="detail-item" v-for="(item,index) in categorydetail" :key="index">
        <img :src="item.img" />
        <p>{{item.title}}</p>
        <div>
          <span>{{item.price}}</span>
          <span class="cfav">{{item.cfav}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    categorydetail: {
      type: Array,
      default: []
    }
  },
  data() {
    return {};
  },
  components: {},
  methods: {
     itemClick(iid){
        this.$router.push('/detail/'+iid)
     }
  }
};
</script>

<style scoped>
.categorydetail {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 10px 5px;
  box-sizing: border-box;
}
.detail-item {
  width: 48%;
}
.detail-item img {
  width: 100%;
  border-radius: 5px;
  margin-bottom: 5px;
}
.detail-item p {
  font-size: 12px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.detail-item div {
  text-align: center;
}
.detail-item div span:nth-of-type(1) {
  color: #ff5777;
  font-size: 10px;
  line-height: 20px;
}
.detail-item div .cfav {
  padding-left: 20px;
  font-size: 10px;
  line-height: 20px;
  position: relative;
}
.detail-item div .cfav::before {
  position: absolute;
  top: 0;
  left: 5px;
  content: "";
  width: 15px;
  height: 15px;
  background: url("../../../assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>