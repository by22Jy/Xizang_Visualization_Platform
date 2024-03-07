<template>
  <div class="com-page">
    <gdp></gdp>
  </div>
</template>

<script>
import GdpHistory from "@/components/data-visualization/GdpHistory.vue";
export default {
  name: 'GdpRank',
  components: {
    gdp: GdpHistory
  }
}
</script>

<style scoped lang="less">

</style>
