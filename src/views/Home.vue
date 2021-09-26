<template>
  <el-container>
      <el-header>
        <home-top></home-top>
      </el-header>
      <el-container>
        <el-aside width="180px"><home-nav></home-nav></el-aside>
        <el-main><router-view></router-view></el-main>
      </el-container>
  </el-container>
</template>

<script>
import homeTop from "../components/homeComponents/top.vue";
import homeNav from "../components/homeComponents/aside.vue";
export default {
  name: "Home",
  components: {
    homeTop,
    homeNav,
  },
  data() {
    return {};
  },
};
</script>
<style scoped>
.el-header{
  padding: 0 ;
}
.el-main{
  padding: 0 !important;
}
.el-aside,.el-container {
  height: 100%;
}
</style>
