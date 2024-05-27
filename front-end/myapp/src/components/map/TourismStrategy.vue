<template>
  <div class="com-container">
    <div class="com-chart" ref="gdp_ref"></div>
  </div>

</template>

<script>
export default {
  data () {
    return {
      chartInstance: null,
      allData: null
    }
  },
  created () {
    this.$socket.registerCallBack('gdpData', this.getData)
  },
  mounted () {
    this.initChart()
    this.$socket.send({
      action: 'getData',
      socketType: 'gdpData',
      chartName: 'gdpRank2',
      value: ''
    })
    window.addEventListener('resize', this.screenAdapter)
    this.screenAdapter()
  },
  destroyed () {
    window.removeEventListener('resize', this.screenAdapter)
    this.$socket.unRegisterCallBack('gdpData')
  },
  methods: {
    initChart () {
      this.chartInstance = this.$echarts.init(this.$refs.gdp_ref, 'chalk')
      const initOption = {
        title: {
          text: '丨 最热城市',
          left: 20,
          top: 20,
          textStyle: {
            color: 'white'
          }
        },
        legend: {
          top: 'bottom',
          textStyle: {
            color: 'white'
          }
        },
        tooltip: {
          trigger: 'item',
          formatter: arg => {
            return arg.value
          }
        },
        series: [
          {
            name: '最热城市',
            type: 'pie',
            radius: '50%',
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      }
      this.chartInstance.setOption(initOption)
    },
    getData (ret) {
      // const { data: ret } = await this.$http.get('gdpRank2')
      this.allData = ret
      this.updateChart()
    },
    updateChart () {
      const cityName = this.allData.map((item) => {
        return item.name
      })
      const cityValue = this.allData.map((item) => {
        return item.value
      })
      const dataOption = {
        series: [{
          data: cityValue.map((value, index) => ({
            value,
            name: cityName[index]
          }))
        }]
      }
      this.chartInstance.setOption(dataOption)
    },
    screenAdapter () {
      const titleFontSize = this.$refs.gdp_ref.offsetWidth / 100 * 3.6
      const adapterOption = {
        title: {
          textStyle: {
            fontSize: titleFontSize
          }
        },
        legend: {
          itemWidth: titleFontSize / 2,
          itemHeight: titleFontSize / 2,
          itemGap: titleFontSize / 3,
          textStyle: {
            fontSize: titleFontSize / 2
          },
          series: [
            {
              radius: titleFontSize * 4.5,
              center: ['50%', '50%']
            }
          ]
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
