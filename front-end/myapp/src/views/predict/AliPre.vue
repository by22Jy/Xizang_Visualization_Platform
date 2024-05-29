<template>
  <div class="com-container">
    <div class="com-chart" ref="gdp_ref"></div>
  </div>

</template>

<script>
import '../../../public/static/theme/chalk'
export default {
  data () {
    return {
      chartInstance: null,
      allData: null
    }
  },
  created () {
    this.$socket.registerCallBack('aliHistoryData', this.getData)
  },
  mounted () {
    this.initChart()
    this.$socket.send({
      action: 'getData',
      socketType: 'aliHistoryData',
      chartName: 'Ali',
      value: ''
    })
    window.addEventListener('resize', this.screenAdapter)
    this.screenAdapter()
  },
  destroyed () {
    window.removeEventListener('resize', this.screenAdapter)
    this.$socket.unRegisterCallBack('gdpHistoryData')
  },
  methods: {
    initChart () {
      this.chartInstance = this.$echarts.init(this.$refs.gdp_ref, 'chalk')
      const initOption = {
        title: {
          text: '丨 阿里地区Gdp及各产业变化',
          left: 20,
          top: 20,
          textStyle: {
            color: 'white'
          }
        },
        grid: {
          left: '3%',
          top: '35%',
          right: '4%',
          bottom: '1%',
          containLabel: true
        },
        legend: {
          left: 20,
          top: '15%',
          icon: 'circle',
          textStyle: {
            color: 'white'
          }
        },
        tooltip: {
          show: true,
          trigger: 'axis',
          formatter: function (params) {
            // 初始化变量用于收集tooltip的字符串
            let result = params[0].name + '<br/>';
            // 遍历所有系列来构建tooltip字符串
            params.forEach((param) => {
              // 添加系列名和值
              result += param.seriesName + ': ' + param.value + '<br/>';
            });
            return result;
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false
        },
        yAxis: {
          type: 'value'
        }
      }
      this.chartInstance.setOption(initOption)
    },
    getData (ret) {
      // const { data: ret } = await this.$http.get('gdpRank2')
      this.allData = ret
      console.log(this.allData)
      this.updateChart()
    },
    updateChart () {
      const timeArr = this.allData.map(item => item.year);
      // 生成series数据
      const seriesArr = [
        {
          name: 'Gdp',
          type: 'line',
          data: this.allData.map(item => item.Gdp),
          areaStyle: {
            color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: 'rgba(44, 110, 255, 0.5)' },
              { offset: 1, color: 'rgba(44, 110, 255, 0)' }
            ])
          },
        },
        {
          name: '第一产业',
          type: 'line',
          data: this.allData.map(item => item.first),
          areaStyle: {
            color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: 'rgba(22, 242, 217, 0.5)' },
              { offset: 1, color: 'rgba(22, 242, 217, 0)' }
            ])
          },
        },
        {
          name: '第二产业',
          type: 'line',
          data: this.allData.map(item => item.second),
          areaStyle: {
            color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: 'rgba(254, 33, 30, 0.5)' },
              { offset: 1, color: 'rgba(254, 33, 30, 0)' }
            ])
          },
        },
        {
          name: '第三产业',
          type: 'line',
          data: this.allData.map(item => item.third),
          areaStyle: {
            color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: 'rgba(250, 105, 0, 0.5)' },
              { offset: 1, color: 'rgba(250, 105, 0, 0)' }
            ])
          },
        }
      ];
      const dataOption = {
        xAxis: {
          data: timeArr
        },
        series: seriesArr,
        legend: {
          data: seriesArr.map(item => item.name)
        }
      };
      this.chartInstance.setOption(dataOption)
    },
    screenAdapter () {
      this.titleFontSize = this.$refs.gdp_ref.offsetWidth / 100 * 3.6
      const adapterOption = {
        legend: {
          itemWidth: this.titleFontSize,
          itemHeight: this.titleFontSize,
          itemGap: this.titleFontSize,
          textStyle: {
            fontSize: this.titleFontSize / 2
          }
        }
      }
      this.chartInstance.setOption(adapterOption)
      this.chartInstance.resize()
    }
  }
}
</script>

<style scoped lang="less">

</style>
