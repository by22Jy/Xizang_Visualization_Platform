<script>
export default {
  name: "HomePage"
}
</script>

<template>
  <el-container>
    <el-header>
      <el-menu router :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item route="/screenPage" index="4">可视大屏</el-menu-item>
        <el-menu-item index="3">文旅胜地</el-menu-item>
        <el-menu-item index="2">悠扬文化</el-menu-item>
        <el-menu-item index="1">首页</el-menu-item>
      </el-menu>
    </el-header>

    <el-main>

    </el-main>
  </el-container>
</template>

<style scoped lang="less">
.el-menu--horizontal>.el-menu-item {
  float: right;
  height: 60px;
  line-height: 60px;
  margin: 10px;
  border-bottom: 2px solid transparent;
  color: #909399;
}
</style>
