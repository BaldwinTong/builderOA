<template>
  <div>
    <el-row>
      <el-col :span="6">
        <el-button type="primary" @click="addUser">添加人员</el-button>
      </el-col>
    </el-row>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column
        prop="userId"
        label="编号"
        align="center"
      ></el-table-column>
      <el-table-column
        prop="userName"
        label="姓名"
        align="center"
      ></el-table-column>
      <el-table-column
        prop="gender"
        label="性别"
        align="center"
      ></el-table-column>
      <el-table-column
        prop="departmentNumber"
        label="部门号码"
        align="center"
      ></el-table-column>
      <el-table-column
        prop="departmentName"
        label="部门名称"
        align="center"
      ></el-table-column>
      <el-table-column prop="job" label="职务" align="center"></el-table-column>
      <el-table-column
        prop="jobTitle"
        label="职称"
        align="center"
      ></el-table-column>
      <el-table-column
        prop="takeOfficeDate"
        label="到职日期"
        align="center"
      ></el-table-column>
      <el-table-column
        prop="probation"
        label="试用期"
        align="center"
      ></el-table-column>
      <el-table-column
        prop="BARworkeDate"
        label="转正日期"
        align="center"
      ></el-table-column>
      <el-table-column
        prop="state"
        label="工作状态"
        align="center"
      ></el-table-column>
      <el-table-column label="操作" align="center" width="160px">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="info"
            @click="handleCheck(scope.$index, scope.row)"
            >查看</el-button
          >
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>

    <user-info :showDialog="showDialog" @closeDialog="handleClose">{{showDialog}}</user-info>
  </div>
</template>

<script>
import userInfo from "../dialogComponents/addUserInfo.vue";
export default {
  components: {
    userInfo,
  },
  data() {
    return {
      showDialog: false,
      tableData: [
        {
          userId: "20210505",
          userName: "王大锤",
          gender: "男",
          departmentNumber: "1005",
          departmentName: "生产部",
          job: "普通员工",
          jobTitle: "装配工",
          takeOfficeDate: "2021-9-10",
          probation: "3",
          BARworkeDate: "2021-12-10",
          state: "在职",
        },
      ],
    };
  },
  created() {},
  methods: {
    handleClose(e) {
      this.showDialog = e;
    },
    addUser() {
      this.showDialog = true;
    },
    handleCheck() {},
    handleDelete() {},
  },
  computed: {},
};
</script>
<style lang='less' scoped>
.el-row {
  margin-bottom: 20px;
  float: right;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
</style>