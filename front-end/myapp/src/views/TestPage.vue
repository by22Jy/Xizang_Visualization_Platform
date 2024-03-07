<template>
  <div class="com-page">
    <test></test>
  </div>
</template>

<script>
import Lasa from "@/components/data-visualization/MapChildren/Lasa.vue";
import Naqu from "@/components/data-visualization/MapChildren/Naqu.vue";
export default {
  name: 'GdpRank',
  components: {
    test: Naqu
  }
}
</script>

<style scoped lang="less">

</style>
