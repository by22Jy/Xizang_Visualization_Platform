<template>
  <div class="com-page">
    <popularAttraction></popularAttraction>
  </div>
</template>

<script>
import PopularAttraction from "@/components/data-visualization/PopularAttraction.vue";
export default {
  name: 'GdpRank',
  components: {
    popularAttraction: PopularAttraction
  }
}
</script>

<style scoped lang="less">

</style>
