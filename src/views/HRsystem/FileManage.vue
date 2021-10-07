<template>
  <div>
    <el-tabs type="border-card">
      <el-tab-pane label="基本资料">
        <basic-info></basic-info>
      </el-tab-pane>
      <el-tab-pane label="部门资料">
        <department-info></department-info>
      </el-tab-pane>
      <el-tab-pane label="人事资料">
        <person-info></person-info>
      </el-tab-pane>
      <el-tab-pane label="个人信息">
        <user-info></user-info>
      </el-tab-pane>
      <el-tab-pane label="个性提醒">定时任务补偿</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import basicInfo from "../../components/fileComponents/basicInfo.vue";
import departmentInfo from "../../components/fileComponents/departmentInfo.vue";
import personInfo from "../../components/fileComponents/personnelinfo.vue";
import userInfo from "../../components/fileComponents/userSpecificInfo.vue";
export default {
  data() {
    return {};
  },
  components: {
    basicInfo,
    departmentInfo,
    personInfo,
    userInfo
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