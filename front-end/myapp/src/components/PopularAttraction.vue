<template>
  <div class="com-container">
    <!-- 固定在屏幕左侧的标题 -->
    <div class="fixed-title">丨 景点榜</div>

    <!-- 使用v-for指令遍历数组中的每个元素 -->
    <div class="rankings">
      <div class="ranking-item" v-for="(item, index) in allData" :key="index">
        <!-- 排行数字 -->
        <div class="ranking-number">TOP {{ index + 1 }}</div>
        <!-- 左侧图片 -->
        <div class="image-block">
          <img :src="item.imgUrl" :alt="item.name">
        </div>
        <!-- 右侧文字框 -->
        <div class="text-block">
          <h2>{{ item.name }}</h2>
          <p>{{ item.introduction }}</p>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      allData: null
    }
  },
  created() {
    this.$socket.registerCallBack('attractionData', this.getData)
  },
  mounted() {
    this.$socket.send({
      action: 'getData',
      socketType: 'attractionData',
      chartName: 'popularAttraction2',
      value: ''
    })
  },
  destroyed() {
    this.$socket.unRegisterCallBack('attractionData')
  },
  methods: {
    getData(ret) {
      this.allData = ret
      console.log(this.allData)
    },
  }
}
</script>

<style scoped lang="less">
@media (max-width: 768px){
.fixed-title {
  position: fixed;
  left: 20px;
  top: 150px;
  transform: translateY(-50%);
  z-index: 10;
  padding: 10px;
  writing-mode: vertical-rl;
  text-orientation: mixed;
  }
}
.rankings {
  //margin-left: 80px; /* 留出足够的空间给固定的标题 */
}

.ranking-item {
  margin-left: 0;
  display: flex;
  flex-direction: column;
  align-items: center; /* 确保排名项居中显示 */
}

.text-block {
  width: 100%; /* 文字区域宽度为容器的100% */
}

.image-block {
  flex: none; /* 取消 flex 属性 */
  width: 80%; /* 图片宽度为容器的80% */
  height: auto; /* 高度自动 */
  margin: 0 auto 10px; /* 居中显示 */
}

.image-block img {
  width: 100%;
  height: auto;
}

.ranking-number {
  top: 10px; /* 距离顶部的距离 */
  left: 50%; /* 水平居中 */
  font-size: 1.2em; /* 字体大小根据需要调整 */
  color: #fff; /* 文字颜色为白色 */
  background: #333; /* 背景颜色为深灰 */
  padding: 5px 10px; /* 内边距 */
  border-radius: 10px; /* 圆角边框 */
  z-index: 10; /* 确保排名数字在图片之上 */
}

.text-block {
  flex: 1;
}

</style>
