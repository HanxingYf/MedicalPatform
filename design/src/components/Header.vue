<template>
  <div class="header">
    <el-menu
      class="el-menu-demo"
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      :router="router"
    >
      <el-menu-item index="/">处理中心</el-menu-item>
      <el-menu-item index="/demo1" >消息中心</el-menu-item>
      <el-menu-item index="/demo2">消息中心</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      router: true
    };
  },
  methods: {},
};
</script>

<style scoped>
.header {
  width: 100%;
}
</style>
