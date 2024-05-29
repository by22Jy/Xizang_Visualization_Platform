<template>
  <div class="grid-container">
    <button class="backbutton" >
      <img @click="backHome" class="arrow" src="/static/img/arrow.png">
    </button>
    <div class="card">
      <AliGdp></AliGdp>
    </div>
    <div class="card">
      <ChangduGdp></ChangduGdp>
    </div>
    <div class="card">
      <LasaGdp></LasaGdp>
    </div>
    <div class="card">
      <LinzhiGdp></LinzhiGdp>
    </div>
    <div class="card">
      <NaquGdp></NaquGdp>
    </div>
    <div class="card">
      <ShannanGdp></ShannanGdp>
    </div>
    <div class="action-button">
      <button @click="show" class="button">
        <img src="/static/img/action.png" alt="Action"> 点击开始预测
      </button>
    </div>
    <div class="card">
      <AliPre v-if="isShow"></AliPre>
    </div>
    <div class="card">
      <ChangduPre v-if="isShow"></ChangduPre>

    </div>
    <div class="card">
      <LasaPre v-if="isShow"></LasaPre>

    </div>
    <div class="card">
      <LinzhiPre v-if="isShow"></LinzhiPre>

    </div>
    <div class="card">
      <NaquPre v-if="isShow"></NaquPre>

    </div>
    <div class="card">
      <ShannanPre v-if="isShow"></ShannanPre>

    </div>
  </div>
</template>

<script>
import AliGdp from "@/views/eco/AliGdp.vue";
import ChangduGdp from "@/views/eco/ChangduGdp.vue";
import LasaGdp from "@/views/eco/LasaGdp.vue";
import LinzhiGdp from "@/views/eco/LinzhiGdp.vue";
import NaquGdp from "@/views/eco/NaquGdp.vue";
import ShannanGdp from "@/views/eco/ShannanGdp.vue";
import AliPre from "@/views/predict/AliPre.vue";
import ChangduPre from "@/views/predict/ChangduPre.vue";
import LasaPre from "@/views/predict/LasaPre.vue";
import LinzhiPre from "@/views/predict/LinzhiPre.vue";
import NaquPre from "@/views/predict/NaquPre.vue";
import ShannanPre from "@/views/predict/ShannanPre.vue";
import {useRouter} from "vue-router/composables";

export default {
  data (){
    return {
      isShow: false
    }
  },
  mounted() {
    this.router = useRouter()
  },
  methods:{
    show () {
      this.isShow = true
    },
    backHome(){
      this.router.push({name:'HomePage'})
    }
  },
  name: 'GridCards',
  components:{
    AliGdp,
    ChangduGdp,
    LasaGdp,
    LinzhiGdp,
    NaquGdp,
    ShannanGdp,
    AliPre,
    ChangduPre,
    LasaPre,
    LinzhiPre,
    NaquPre,
    ShannanPre
  }
}
</script>

<style scoped>
.backbutton {
  position: fixed;
  top: 1rem;
  left: 1rem;
  width: 48px;
  aspect-ratio: 1;
  padding: 0;
  border-radius: 12px;
  border: 0;
  background: transparent;
  display: grid;
  place-items: center;
  cursor: pointer;
}
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 三列布局 */
  gap: 20px; /* 网格间距 */
  padding: 20px; /* 容器内边距 */
  height: 50vh; /* 整个视口高度 */
  align-items: center; /* 垂直居中 */
  justify-items: center; /* 水平居中 */
}

.card {
  width: 98%; /* 卡片宽度充满网格列 */
  aspect-ratio: 1 / 1; /* 宽高比 1:1 */
  background-color: #f0f0f0; /* 浅灰背景，容易区分 */
  border-radius: 10px; /* 圆角边框 */
  display: flex;
  align-items: center; /* 内容垂直居中 */
  justify-content: center; /* 内容水平居中 */
  box-shadow: 0 4px 8px rgba(0,0,0,0.1); /* 轻微阴影 */
}

.action-button {
  grid-column: 1 / -1; /* 跨越所有列 */
  display: flex;
  justify-content: center; /* 水平居中按钮 */
}

.button {
  display: flex;
  align-items: center; /* 图标和文字垂直居中 */
  background-color: #4CAF50; /* 按钮背景颜色 */
  color: white; /* 文字颜色 */
  border: none; /* 无边框 */
  padding: 10px 20px; /* 按钮内边距 */
  border-radius: 5px; /* 边框圆角 */
  font-size: 16px; /* 文字大小 */
  cursor: pointer; /* 鼠标样式 */
  transition: background-color 0.3s; /* 过渡效果 */
}

.button img {
  width: 24px; /* 图片宽度 */
  height: 24px; /* 图片高度 */
  margin-right: 10px; /* 图片和文字之间的间隔 */
}

.button:hover {
  background-color: #45a049; /* 鼠标悬停时的背景颜色 */
}

</style>
