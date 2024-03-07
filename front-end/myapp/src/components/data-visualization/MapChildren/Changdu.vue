<template>
  <div class="slideshow-container">
    <!-- 返回按钮 -->
    <button class="return-button" @click="closeComponent">返回</button>
    <!-- 图片幻灯片 -->
    <div class="slideshow">
      <img :src="currentImage" alt="Current slide" v-if="currentImage">
    </div>

    <!-- 左箭头 -->
    <button @click="prevImage" class="arrow left-arrow" v-if="allData && allData.length > 1"><</button>

    <!-- 右箭头 -->
    <button @click="nextImage" class="arrow right-arrow" v-if="allData && allData.length > 1">></button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      allData: [], // 初始化为空数组
      currentIndex: 0, // 当前显示图片的索引
      slideshowInterval: null // 自动播放的定时器
    }
  },
  computed: {
    // 计算当前应该显示的图片URL
    currentImage() {
      return this.allData.length > 0 ? this.allData[this.currentIndex].imgUrl : '';
    },

  },
  methods: {
    closeComponent() {
      this.$store.commit('setShowPopup', false);
    },
    // 获取数据后调用，存储图片数据并启动幻灯片
    getData(ret) {
      this.allData = ret;
      this.startSlideshow();
    },
    // 开始自动播放幻灯片
    startSlideshow() {
      this.stopSlideshow();
      this.slideshowInterval = setInterval(this.nextImage, 5000); // 设置图片自动播放间隔为3秒
    },
    // 停止幻灯片播放
    stopSlideshow() {
      if (this.slideshowInterval) {
        clearInterval(this.slideshowInterval);
      }
    },
    // 切换到下一张图片
    nextImage() {
      if (this.allData.length > 0) {
        this.currentIndex = (this.currentIndex + 1) % this.allData.length;
      }
    },
    // 切换到上一张图片
    prevImage() {
      if (this.allData.length > 0) {
        this.currentIndex = (this.currentIndex - 1 + this.allData.length) % this.allData.length;
      }
    }
  },
  // 组件挂载时注册socket回调
  mounted() {
    this.$socket.registerCallBack('changduData', this.getData);
    this.$socket.send({
      action: 'getData',
      socketType: 'changduData',
      chartName: 'changduPic',
      value: ''
    });
  },
  // 组件销毁前取消socket回调和清除定时器
  beforeDestroy() {
    this.$socket.unRegisterCallBack('changData');
    this.stopSlideshow();
  }
}
</script>

<style scoped>
.slideshow-container {
  position: fixed; /* 使容器固定全屏 */
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden; /* 防止内容溢出 */
  display: flex;
  align-items: center; /* 垂直居中内容 */
  justify-content: center; /* 水平居中内容 */
}

.slideshow {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center; /* 垂直居中图片 */
  justify-content: center; /* 水平居中图片 */
  background-color: #161522;
}

.slideshow img {
  max-width: 100%; /* 最大宽度为容器宽度 */
  max-height: 100%; /* 最大高度为容器高度 */
  object-fit: contain; /* 保证图片不会被拉伸或压缩 */
}

.arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  background-color: #ffffff; /* 明显的背景颜色 */
  border-radius: 50%; /* 圆形 */
  width: 50px; /* 箭头宽度 */
  height: 50px; /* 箭头高度 */
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px; /* 字体大小 */
  color: #333; /* 字体颜色 */
  z-index: 1000;
}

.left-arrow {
  left: 1%;
}

.right-arrow {
  right: 1%;
}

.return-button {
  position: absolute;
  top: 16px; /* 根据需要调整 */
  left: 16px; /* 根据需要调整 */
  padding: 8px 16px;
  background-color: #f0f0f0; /* 背景颜色 */
  color: #333; /* 文字颜色 */
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
