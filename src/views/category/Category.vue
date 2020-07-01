<template>
  <div class="categroy">
    <nav-bar class="navbar">
      <div slot="center">商品分类</div>
    </nav-bar>
    <div class="content">
      <div class="tab-menu">
        <tab-menu @seletctItem="seletctItem" :categories="categories"></tab-menu>
      </div>
      <scroll ref="scroll" class="tab-content">
        <tab-content-category :subcategories="subcategories"></tab-content-category>
        <tab-control ref="tabcontrol"  @tabclick="tabclick" :title="title"></tab-control>
        <tab-content-detail :categorydetail="categorydetail"></tab-content-detail>
      </scroll>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import TabMenu from "./childcomps/TabMenu";
import TabContentCategory from "./childcomps/TabContentCategory";
import TabContentDetail from "./childcomps/TabContentDetail";

import Scroll from "@/components/common/scroll/Scroll";
import TabControl from "@/components/content/tabcontrol/TabControl";

//请求数据
import {
  getCategory,
  getSubcategory,
  getCategoryDetail
} from "@/network/categroy";

export default {
  name: "Category",
  components: {
    NavBar,
    TabMenu,
    Scroll,
    TabContentCategory,
    TabContentDetail,
    TabControl
  },
  data() {
    return {
      categories: [],
      subcategories: [],
      categorydetail: [],
      currentIndex: -1,
      title: ["综合", "新品", "销量"],
      currentType: "pop",
      offsetTop:0
    };
  },
  created() {
    //请求分类数据
    this._getCategory();
  },
  mounted() {
    this.$refs.scroll.refresh();
  },
  methods: {
    _getCategory() {
      getCategory().then(res => {
        this.categories = res.data.category.list;
        this._getSubcategory(0);
      });
    },
    _getSubcategory(index) {
      const maitKey = this.categories[index].maitKey;
      this.currentIndex = index;
      getSubcategory(maitKey).then(res => {
        this.subcategories = res.data.list;
        this._getCategoryDetail(this.currentType);
        this.$refs.scroll.refresh();
        this.$refs.scroll.scrollTo(0, 0, 0);
      });
    },
    _getCategoryDetail(type) {
      const miniWallkey = this.categories[this.currentIndex].miniWallkey;
      getCategoryDetail(miniWallkey, type).then(res => {
        this.categorydetail = res;
      });
    },
    seletctItem(index) {
      this._getSubcategory(index);
    },
    tabclick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "sell";
          break;
        case 2:
          this.currentType = "new";
          break;
      }
      this._getCategoryDetail(this.currentType);
      this.$refs.scroll.refresh();
    }
  }
};
</script>

<style scoped>
.categroy {
  height: 100vh;
}
.navbar {
  background-color: var(--color-tint);
  color: #fff;
}
.content {
  display: flex;
  height: 574px;
}
.tab-menu {
  height: 100%;
  width: 100%;
  flex: 1;
  background-color: #f6f6f6;
  overflow: hidden;
}
.tab-content {
  flex: 3;
  overflow: hidden;
  height: 100%;
}
</style>