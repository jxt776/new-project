<template>
  <scroll class="tab-menu">
    <div class="menu-title">
      <div class="title">
        <div
          class="title-item"
          :class="{isActive:currentIndex===index}"
          @click="indexChange(index)"
          v-for="(item,index) in categories"
        >{{item.title}}</div>
      </div>
    </div>
  </scroll>
</template>

<script>
import Scroll from "@/components/common/scroll/Scroll";
export default {
  name: "TabMenu",
  props: {
    categories: Array
  },
  components: {
    Scroll
  },
  data() {
    return {
        currentIndex:0
    }
  },
  methods: {
    indexChange(index) {
        this.currentIndex = index
        this.$emit('seletctItem',index)
    }
  }
};
</script>

<style scoped>
.menu-title {
  height: 100%;
}
.title {
  width: 100%;
  height: 100%;
}
.title-item {
  width: 100%;
  height: 50px;
  text-align: center;
  line-height: 50px;
  box-sizing: border-box;
  font-size: 14px;
}
.isActive{
    background-color: #fff;
    border-left:3px solid #ff5777 ;
    color: #ff5777;
}
</style>