<template>
  <scroll id="tab-menu">
      <div class="menu-list">
          <div class="menu-item"
                                >

          </div>
      </div>
  </scroll>
</template>

<script>
import Scroll from '@/components/common/scroll/Scroll'
export default {
    name:'TabMenu',
    props:{
        categories:Array
    },
    components:{
        Scroll
    }
}
</script>

<style scoped>

</style>