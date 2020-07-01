<template>
      <div class="content-category">
        <div class="category-item" v-for="(item,index) in subcategories" :key="index">
          <a :href="item.link">
            <img :src="item.image" />
            <span>{{item.title}}</span>
          </a>
        </div>
      </div>
</template>

<script>
export default {
  props: {
    subcategories: {
      type:Array,
      default:[]
    }
  },
  data() {
    return {};
  },
  components:{
  },
  methods: {}
};
</script>

<style scoped>
.content-category {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  text-align: center;
  padding: 15px 10px;
}
.category-item {
  box-sizing: border-box;
  width: 30%;
  margin-bottom:5px ;
}
.category-item a img {
  width: 100%;
  padding: 5px;
}
.category-item a span {
  font-size: 12px;
}
</style>