<template>
  <div>
    <div class="crumbs">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>硬件管理</el-breadcrumb-item>
        <el-breadcrumb-item>硬件档案</el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <div class="container">
      <div class="container-left">
        
      </div>
      <!-- <div class="container-right"></div> -->
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      
    };
  },
  created() {},
  methods: {},
  computed: {},
};
</script>
<style lang='less' scoped>
.crumbs {
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 16px;
  box-sizing: border-box;
  background-color: #fff;
}
</style>