<template>
  <div class="com-page">
    <gdp></gdp>
  </div>
</template>

<script>
import GdpHistory from '@/components/map/GdpHistory.vue';
export default {
  name: 'GdpRank',
  components: {
    gdp: GdpHistory
  }
}
</script>

<style scoped lang="less">

</style>
