<!--历史热度组件 单独组件-->
<template>
  <div class="com-container">
    <div class="com-chart" ref="mbi_ref"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      chartInstance: null,
      allData: null, // 后端返回的数据
      currentPage: 1, // 当前页
      totalPage: 0 // 总页数
    }
  },
  created () {
    this.$socket.registerCallBack('mbiData', this.getData)
  },
  mounted () {
    this.initChart()
    this.$socket.send({
      action: 'getData',
      socketType: 'mbiData',
      chartName: 'mbi_index',
      value: ''
    })
    window.addEventListener('resize', this.screenAdaptor)
    this.$nextTick(() => {
      this.screenAdaptor()
    })
  },
  destroyed () {
    window.removeEventListener('resize', this.screenAdaptor)
    this.$socket.unRegisterCallBack('mbiData')
  },
  methods: {
    // 初始化echart
    initChart () {
      this.chartInstance = this.$echarts.init(this.$refs.mbi_ref, 'chalk')
      // 初始化图表
      const initOption = {
        title: {
          text: '丨 历史热度统计',
          left: 20,
          top: 20,
          textStyle: {
            color: 'white'
          }
        },
        grid: {
          top: '20%',
          left: '3%',
          right: '6%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'category'
        },
        yAxis: {
          type: 'value'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'line',
            z: 0,
            lineStyle: {
              color: '#2D3443'
            }
          }
        },
        series: [
          {
            type: 'bar',
            itemStyle: {
              // 颜色渐变效果
              color: new this.$echarts.graphic.LinearGradient(0, 1, 0, 0, [
                {
                  offset: 0,
                  color: '#5052EE'
                },
                {
                  offset: 1,
                  color: '#AB6EE5'
                }
              ]),
              barBorderRadius: [33, 33, 0, 0]
            },
            label: {
              show: true,
              position: 'top',
              color: 'white'
            }
          }
        ]
      }
      this.chartInstance.setOption(initOption)
    },
    // 获取服务器数据
    getData (ret) {
      // console.log(ret)
      this.allData = ret
      // this.allData.sort((a, b) => {
      //   return a.mbi - b.mbi
      // })
      // 每页展示四条
      this.totalPage = this.allData.length % 4 === 0 ? this.allData.length / 4 : this.allData.length / 4 + 1
      this.updateChart()
    },
    // 更新图表
    updateChart () {
      const times = this.allData.map((item) => {
        return item.formatted_date
      })
      const mbiValues = this.allData.map((item) => {
        return item.mbi
      })
      const dataOption = {
        xAxis: {
          data: times
        },
        series: [
          {
            data: mbiValues
          }
        ]
      }
      this.chartInstance.setOption(dataOption)
    },
    startInterval () {
      setInterval(() => {
        this.currentPage++
        this.updateChart()
      }, 3000)
    },
    // 屏幕适配
    screenAdaptor () {
      // 获取浏览器当前屏幕大小
      // console.log(this.$refs.mbi_ref.offsetWidth)
      const titleFontSize = this.$refs.mbi_ref.offsetWidth / 100 * 3.6
      const adapterOption = {
        title: {
          textStyle: {
            fontSize: titleFontSize
          },
          left: 20,
          top: 20
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            lineStyle: {
              width: titleFontSize
            }
          }
        },
        series: [
          {
            type: 'bar',
            barWidth: titleFontSize,
            itemStyle: {
              barBorderRadius: [titleFontSize / 2, titleFontSize / 2, 0, 0]
            }
          }
        ]
      }
      this.chartInstance.setOption(adapterOption)
      this.chartInstance.resize()
    }
  }
}
</script>

<style scoped lang="less">

</style>
