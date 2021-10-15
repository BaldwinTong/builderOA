<template>
  <div>
    <el-tabs type="border-card" v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="基本资料" name="1">
        <basic-info v-if="isChildUpdate1"></basic-info>
      </el-tab-pane>
      <el-tab-pane label="部门资料" name="2">
        <department-info v-if="isChildUpdate2"></department-info>
      </el-tab-pane>
      <el-tab-pane label="人事资料" name="3">
        <person-info v-if="isChildUpdate3"></person-info>
      </el-tab-pane>
      <el-tab-pane label="个人信息" name="4">
        <user-info v-if="isChildUpdate4"></user-info>
      </el-tab-pane>
      <el-tab-pane label="个性提醒" name="5">
        <span slot="label">
          <span>个性提醒</span>
          <el-badge
            :value="todo"
            v-if="todo > 0"
            size="mini"
            class="item"
            is-dot
          ></el-badge>
        </span>
        <reminder v-if="isChildUpdate5"></reminder>
      </el-tab-pane>
      <el-tab-pane label="分析图表" name="6">
        <echarts v-if="isChildUpdate6"></echarts>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import {
  basicInfo,
  departmentInfo,
  personInfo,
  userInfo,
  reminder,
  echarts
} from "../../components/fileComponents";
export default {
  data() {
    return {
      todo: 5,
      activeName: "1",
      isChildUpdate1: true,
      isChildUpdate2: false,
      isChildUpdate3: false,
      isChildUpdate4: false,
      isChildUpdate5: false,
      isChildUpdate6: false,
    };
  },
  components: {
    basicInfo,
    departmentInfo,
    personInfo,
    userInfo,
    reminder,
    echarts,
  },
  methods: {
    handleClick(tab) {
      console.log(tab.index);
      if (tab.index == 0) {
        console.log("请求tab0数据");
        this.isChildUpdate1 = true
      } else if (tab.index == 1) {
        console.log("请求tab1数据");
        this.isChildUpdate2 = true
      } else if (tab.index == 2) {
        this.isChildUpdate3 = true
        console.log("请求tab2数据");
      } else if (tab.index == 3) {
        this.isChildUpdate4 = true
        console.log("请求tab3数据");
      } else if (tab.index == 4) {
        this.isChildUpdate5 = true
        console.log("请求tab4数据");
        this.todo = 0;
      } else if (tab.index == 5) {
        this.isChildUpdate6 = true
        console.log("请求tab6数据");
        this.todo = 0;
      }
    },
  },
  created() {},
  mounted() {},
  computed: {},
};
</script>
<style lang='less' scoped>
.el-tabs--border-card {
  border: none !important;
  box-shadow: none !important;
}
</style>