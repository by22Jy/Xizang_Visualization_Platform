<template>
  <div class="com-page">
    <wordCloud></wordCloud>
  </div>
</template>

<script>
import WordCloud from '@/components/map/WordCloud.vue'
export default {
  name: 'GdpRank',
  components: {
    wordCloud: WordCloud
  }
}
</script>

<style scoped lang="less">

</style>
