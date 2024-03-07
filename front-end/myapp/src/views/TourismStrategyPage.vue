<template>
  <div class="com-page">
    <tourism></tourism>
  </div>
</template>

<script>
import TourismStrategy from "@/components/data-visualization/TourismStrategy.vue";
export default {
  name: 'GdpRank',
  components: {
    tourism: TourismStrategy
  }
}
</script>

<style scoped lang="less">

</style>
