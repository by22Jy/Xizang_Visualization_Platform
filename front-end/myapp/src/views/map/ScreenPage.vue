
<template>
  <div class="screen-container" >
    <canvas class="canvas-wrap" id="triangle-lost-in-space" resize="true"></canvas>
    <header class="screen-header">
      <div>
        <img src="/img/header_border_dark.png" alt="">
      </div>
      <span class="logo">
        中央民族大学
<!--        <img src="/static/img/logo.jpg"  alt=""/>-->
      </span>
      <span class="title">藏族地区文旅大数据平台</span>
      <div class="title-right">
        <span class="datetime">{{ currentTime }}</span>
      </div>
    </header>
    <div class="screen-body">
      <section class="screen-left">
        <div id="left-top">
          <!-- 热门旅游景点 -->
          <PopularAttraction></PopularAttraction>
        </div>
        <div id="left-bottom">
          <!-- 西藏历史热度 -->
          <MbiIndex></MbiIndex>
        </div>
      </section>
      <section class="screen-middle">
        <div id="middle-top">
          <!-- 西藏地图 -->
          <XizangMap></XizangMap>
        </div>
        <div id="middle-bottom">
          <WordCloud></WordCloud>
        </div>
      </section>
      <section class="screen-right">
        <div id="right-top">
          <GdpHistory></GdpHistory>
        </div>
        <div id="right-bottom">
          <!-- 最热城市 -->
          <GdpRank></GdpRank>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import GdpRank from '@/components/map/GdpRank.vue'
import MbiIndex from '@/components/map/MbiIndex.vue'
import XizangMap from '@/components/map/XizangMap.vue'
import WordCloud from '@/components/map/WordCloud.vue'
import PopularAttraction from '@/components/map/PopularAttraction.vue'
import GdpHistory from '@/components/map/GdpHistory.vue'
export default {
  data () {
    return {
      currentTime: this.getCurrentTime()
    }
  },
  mounted () {
    this.interval = setInterval(() => {
      this.currentTime = this.getCurrentTime()
    }, 1000)
  },
  beforeDestroy () {
    // 清除计时器
    clearInterval(this.interval)
  },
  methods: {
    getCurrentTime () {
      const now = new Date()
      const localTime = new Date(now.getTime() - now.getTimezoneOffset() * 60000)
      return localTime.toISOString().slice(0, 19).replace('T', ' ')
    }
  },
  components: {
    GdpRank,
    MbiIndex,
    XizangMap,
    WordCloud,
    PopularAttraction,
    GdpHistory
  }
}
</script>
<style lang="less" scoped>
// 全屏样式的定义
.fullscreen {
  position: fixed!important;
  top: 0 !important;
  left: 0 !important;
  width: 100% !important;
  height: 100% !important;
  margin: 0 !important;
  z-index: 100;
}

.screen-container {
  width: 100%;
  height: 100%;
  padding: 0 20px;
  background-color: #161522;
  color: #fff;
  box-sizing: border-box;
}
.screen-header {
  width: 100%;
  height: 64px;
  font-size: 20px;
  position: relative;
  > div {
    img {
      width: 100%;
    }
  }
  .title {
    position: absolute;
    left: 50%;
    top: 50%;
    font-size: 20px;
    transform: translate(-50%, -50%);
  }
  .title-right {
    display: flex;
    align-items: center;
    position:absolute;
    right: 0px;
    top: 50%;
    transform: translateY(-80%);
  }

  .qiehuan {
    width: 28px;
    height: 21px;
    cursor: pointer;
  }
  .datetime {
    font-size: 15px;
    margin-left: 10px;
  }
  .logo {
    background-color: #161522;
    position: absolute;
    left: 0px;
    top: 50%;
    transform: translateY(-80%);
    img {
      height: 30px;
      width: 50px;
    }
  }
}
.screen-body {
  width: 100%;
  height: 100%;
  display: flex;
  margin-top: 10px;
  .screen-left {
    height: 88%;
    width: 27.6%;
    border-radius: 20px;
    #left-top {
      height: 53%;
      position: relative;
    }
    #left-bottom {
      height: 43%;
      margin-top: 25px;
      position: relative;
      border-radius: 20px;

    }
  }
  .screen-middle {
    height: 88%;
    width: 41.5%;
    margin-left: 1.6%;
    margin-right: 1.6%;
    border-radius: 20px;

    #middle-top {
      width: 100%;
      height: 56%;
      position: relative;
      border-radius: 20px;

    }
    #middle-bottom {
      top: 20px;
      width: 100%;
      height: 40%;
      position: relative;
      border-radius: 20px;

    }
  }
  .screen-right {
    width: 27.6%;
    height: 88%;
    border-radius: 20px;

    #right-top {
      height: 46%;
      position: relative;
    }
    #right-bottom {
      height: 43%;
      margin-top: 80px;
      position: relative;
      border-radius: 20px;

    }
  }
}
.resize {
  position: absolute;
  right: 20px;
  top: 20px;
  cursor: pointer;
}

.screen-left,
.screen-right,
.screen-middle,
#left-bottom,
#right-bottom,
#right-top,
#left-top {
  background: #1c1e29; /* 区块的背景颜色 */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5); /* 区块的阴影，增加对比度 */
  margin-bottom: 20px; /* 区块之间的间距 */
  padding: 10px; /* 区块的内边距 */
  border-radius: 10px; /* 若需要圆角可以调整此值 */
}

/* 如果您希望顶部和底部也有边界线，可以为.header和.screen-body添加边界线 */
.screen-header,
.screen-body {
  border-top: 1px solid #ffffff30; /* 给顶部添加边界线 */
  border-bottom: 1px solid #ffffff30; /* 给底部添加边界线 */
}

/* 针对每个区块的子部分添加边界线 */

#left-bottom,
#middle-top,
#middle-bottom,
#right-bottom,
#right-top,
#left-top{
  border: 1px solid #ffffff30; /* 给子部分添加边界线 */
  box-sizing: border-box;
  padding: 10px; /* 添加一些内边距 */
}

/*雪花*/
.canvas-wrap{
  position: fixed;
  top: 100px;
  bottom: 0px;
  z-index: 1;
  left: 0;
  right: 0;
}

</style>
