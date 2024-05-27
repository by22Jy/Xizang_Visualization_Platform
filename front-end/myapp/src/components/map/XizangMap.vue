<template>
  <div class="com-container">
    <transition name="fade">
      <div class="popup" v-if="$store.state.showPopup">
        <!-- 这里可以放置您的弹出页面内容 -->
        <Lasa v-if="$store.state.selectedProvince === '拉萨市'"></Lasa>
        <Ali v-if="$store.state.selectedProvince === '阿里地区'"></Ali>
        <Changdu v-if="$store.state.selectedProvince === '昌都市'"></Changdu>
        <Linzhi v-if="$store.state.selectedProvince === '林芝市'"></Linzhi>
        <Naqu v-if="$store.state.selectedProvince === '那曲地区'"></Naqu>
        <Rike v-if="$store.state.selectedProvince === '日喀则市'"></Rike>
        <Shannan v-if="$store.state.selectedProvince === '山南市'"></Shannan>

      </div>
    </transition>
    <div class="com-chart" ref="map_ref">

    </div>
  </div>

</template>

<script>
import axios from 'axios'
import GdpRank from "@/components/map/GdpRank.vue";
import Ali from "@/components/map/MapChildren/Ali.vue";
import Shannan from "@/components/map/MapChildren/Shannan.vue";
import Rike from "@/components/map/MapChildren/Rike.vue";
import Naqu from "@/components/map/MapChildren/Naqu.vue";
import Linzhi from "@/components/map/MapChildren/Linzhi.vue";
import Lasa from "@/components/map/MapChildren/Lasa.vue";
import Changdu from "@/components/map/MapChildren/Changdu.vue";

export default {
  data () {
    return {
      chartInstance: null,
      allData: null,
      showPopup: null,
      selectedProvince: ''
    }
  },
  components:{
    Ali,
    Changdu,
    Lasa,
    Linzhi,
    Naqu,
    Rike,
    Shannan
  },
  created() {
    this.showPopup = this.$popUp;
  },
  mounted () {
    this.initChart()
    this.getData()
    window.addEventListener('resize', this.screenAdapter)
    this.screenAdapter()
  },
  destroyed () {
    window.removeEventListener('resize', this.screenAdapter)
  },
  methods: {
    async initChart() {
      this.chartInstance = this.$echarts.init(this.$refs.map_ref, 'chalk')
      // 获取西藏的矢量地图
      const map = await axios.get('http://localhost:8999/static/map/province/xizang.json')
      this.$echarts.registerMap('xizang', map.data)
      const initOption = {
        title: {
          text: '丨 西藏地图',
          left: 20,
          top: 20,
          textStyle: {
            color: 'white'
          }
        },
        series: [{
          type: 'map',
          map: 'xizang',
          layoutCenter: ['50%', '50%'],
          layoutSize: 600,
          // 为每个省份定义不同的颜色
          data: [
            {name: '拉萨市', value: 100, itemStyle: {areaColor: '#3077a3'}},
            {name: '阿里地区', value: 200, itemStyle: {areaColor: '#f59353'}},
            {name: '昌都市', value: 300, itemStyle: {areaColor: '#cebc56'}},
            {name: '林芝市', value: 400, itemStyle: {areaColor: '#1e90ff'}},
            {name: '那曲地区', value: 500, itemStyle: {areaColor: '#41810d'}},
            {name: '日喀则市', value: 600, itemStyle: {areaColor: '#5fce70'}},
            {name: '山南市', value: 700, itemStyle: {areaColor: '#ffa07a'}}
          ],
          itemStyle: {
            borderColor: '#333'
          }
        }],

      }
      this.chartInstance.setOption(initOption)

    },
    async getData() {
      this.updateChart()
    },
    updateChart() {
      const dataOption = {}
      this.chartInstance.setOption(dataOption)
      this.chartInstance.on('click', arg => {
        console.log(arg.name)
        this.openPopup(arg.name)
      })
    },
    screenAdapter() {
      const titleFontSize = this.$refs.map_ref.offsetWidth / 100 * 5
      const adapterOption = {
        title: {
          textStyle: {
            fontSize: titleFontSize
          }
        },
      }
      this.chartInstance.setOption(adapterOption)
      this.chartInstance.resize()
    },
    openPopup(provinceName) {
      // 调用 Vuex action 来更新状态
      this.$store.dispatch('changeProvince', provinceName);
      this.$store.dispatch('togglePopup', true);
    },
    closePopup() {
      this.$store.dispatch('togglePopup', false);
    }
  }
}
</script>

<style scoped lang="less">

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s, transform 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active 在2.1.8版本及以上 */ {
  opacity: 0;
  transform: scale(0.5);
}

.popup {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50vw; /* 百分比视口宽度，以适应不同屏幕大小 */
  height: 50vh; /* 百分比视口高度 */
  background: white;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0,0,0,0.5);
  z-index: 10000;
  overflow: auto; /* 如果内容溢出，则显示滚动条 */
  border-radius: 10px; /* 可选的圆角边框 */
}

.popup > * {
  width: 100%; /* 子元素宽度设置为100% */
  height: 100%; /* 子元素高度设置为100% */
  box-sizing: border-box; /* 确保内边距和边框不会增加元素尺寸 */
}

</style>
