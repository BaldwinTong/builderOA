<template>
  <div>
    <el-tabs type="border-card">
      <el-tab-pane label="基本资料">
        <basic-info></basic-info>
      </el-tab-pane>
      <el-tab-pane label="部门资料">配置管理</el-tab-pane>
      <el-tab-pane label="人事资料">角色管理</el-tab-pane>
      <el-tab-pane label="个人信息">定时任务补偿</el-tab-pane>
      <el-tab-pane label="个性提醒">定时任务补偿</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import basicInfo from '../../components/fileComponents/basicInfo.vue';
export default {
  data() {
    return {};
  },
  components:{
    basicInfo
  },
  methods: {},
  created() {},
  computed: {},
};
</script>
<style lang='less' scoped>
.el-tabs--border-card {
  border: none !important;
  box-shadow: none !important;
}
</style>