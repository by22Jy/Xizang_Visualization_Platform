<template>
  <div class="com-container">
    <div class="chart-title">丨 最热词云</div>
    <div class="com-chart" ref="wordcloudChart" ></div>
  </div>
</template>

<script>
import * as echarts from 'echarts';

export default {data() {
    return {
      chartInstance: null,
      allData: null,
    };
  },
  created () {
    this.$socket.registerCallBack('wordData', this.getData)
  },
  mounted() {
    // 在 mounted 钩子中绘制词云图
    this.drawWordCloud();
    this.$socket.send({
      action: 'getData',
      socketType: 'wordData',
      chartName: 'characteristic',
      value: ''
    })
  },
  beforeDestroy() {
    if (this.chartInstance != null) {
      this.chartInstance.dispose();
    }
    window.removeEventListener('resize', this.handleResize);
  },
  destroyed () {
    window.removeEventListener('resize', this.screenAdaptor)
    this.$socket.unRegisterCallBack('wordData')
  },
  methods: {
    getData(ret){
      this.allData = ret
    },
    drawWordCloud() {
      // 基于准备好的dom，初始化echarts实例
      this.chartInstance = echarts.init(this.$refs.wordcloudChart,'chalk');
      // 配置项
      const option = {
        series: [{
          title: {
            text: '丨 最热词云',
            left: 20,
            top: 20
          },
          grid: {

            containLabel: true
          },
          type: 'wordCloud',
          shape: 'circle',
          left: 'center',
          top: 'center',
          width: '100%',
          height: '90%',
          right: null,
          bottom: null,
          sizeRange: [35, 60],
          rotationRange: [-90, 90],
          rotationStep: 45,
          gridSize: 8,
          drawOutOfBound: false,
          textStyle: {
            normal: {
              fontFamily: 'sans-serif',
              fontWeight: 'bold',
              // Color可以是一个回调函数或一个颜色字符串
              color: function () {
                // Random color
                return 'rgb(' + [
                  Math.round(Math.random() * 160),
                  Math.round(Math.random() * 160),
                  Math.round(Math.random() * 160)
                ].join(',') + ')';
              }
            },
            emphasis: {
              focus: 'self',

              textStyle: {
                textShadowBlur: 10,
                textShadowColor: '#333'
              }
            },
          },
          data: [
            {name: '布达拉宫', value: 10000},
            {name: '雅鲁藏布大峡谷', value: 6181},
            {name: '绕佛塔', value: 4386},
            {name: '撒风马旗', value: 4055},
            {name: '望果节', value: 2467},
            {name: '雪顿节', value: 2244},
            {name: '藏戏', value: 1898},
            {name: '牦牛肉', value: 1484},
            {name: '青稞酒', value: 1112},
            {name: '酥油茶', value: 965},
            {name: '糌粑', value: 847},
            {name: '萨普神山', value: 582},
            {name: '古格王国都城遗址', value: 555},
            {name: '冈仁波齐', value: 550},
            {name: '珠穆朗玛峰', value: 550},
            {name: '扎什伦布寺', value: 350},
            {name: '羊卓雍措', value: 344},
            {name: '纳木措', value: 341},
            {name: '大昭寺', value: 331},
            {name: '跳神', value: 307},
          ]
        }]
      };
      this.chartInstance.setOption(option);
    },
    handleResize() {
      if (this.chartInstance != null) {
        this.chartInstance.resize();
      }
    },
  }
}
</script>

<style scoped>
.chart-title{
    position: absolute;
    top: 0;
    left: 0;
    padding: 10px;
    color: #fff; /* 或您希望的任何颜色 */
    z-index: 10;

}
</style>
