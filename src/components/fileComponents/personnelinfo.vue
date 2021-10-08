<template>
  <div>
    <el-row type="flex" justify="space-between">
      <el-col :span="6">
        <el-input v-model="search" clearable>
          <i slot="prefix" class="el-input__icon el-icon-search"></i
        ></el-input>
        <el-button type="primary" class="searchBtn" @click="clickSearch"
          >搜索</el-button
        >
      </el-col>
      <el-col :span="2">
        <el-button type="primary" @click="addUser">添加人员</el-button>
      </el-col>
    </el-row>
    <div class="container">
      <div class="duties">
        <el-tree :data="treeData" node-key="id" accordion default-expand-all>
        </el-tree>
      </div>
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column width="60px"
          type="index"
          label="序号"
          align="center"
        ></el-table-column>
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
          align="center" width="60px"
        ></el-table-column>
        <!-- <el-table-column
          prop="departmentNumber"
          label="部门号码"
          align="center"
        ></el-table-column> -->
        <el-table-column
          prop="departmentName"
          label="部门名称"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="job"
          label="职务"
          align="center"
        ></el-table-column>
        <!-- <el-table-column
          prop="jobTitle"
          label="职称"
          align="center"
        ></el-table-column> -->
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
              @click="handleAmend(scope.$index, scope.row)"
              >修改</el-button
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
    </div>
    <el-pagination
      class="pages"
      background
      layout="prev, pager, next"
      :total="100"
    >
    </el-pagination>
    <user-info
      :showDialog="showDialog"
      :userId="userId"
      @closeDialog="handleClose"
    ></user-info>
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
      userId: 0,
      search: "",
      treeData: [
        {
          id: "001",
          label: "公司",
          children: [
            {
              id: "1",
              label: "销售部",
              plantNum: "10",
              actualNum: "5",
              DeptPic: "Baldwin",
              superiorDept: "公司",
              DeptIdNum: "001",
              children: [
                {
                  id: "1-1",
                  label: "成员组1",
                  superiorNumber: "001",
                  remark: "xxxxx",
                },
                {
                  id: "1-2",
                  label: "成员组2",
                  superiorNumber: "002",
                  remark: "xxxxx",
                },
              ],
            },
            {
              id: "2",
              label: "人事部",
              plantNum: "10",
              actualNum: "5",
              DeptPic: "Baldwin",
              superiorDept: "公司",
              DeptIdNum: "001",
              children: [
                {
                  id: "2-1",
                  label: "成员组3",
                  superiorNumber: "015",
                  remark: "xxxxx",
                },
                {
                  id: "2-2",
                  label: "成员组4",
                  superiorNumber: "017",
                  remark: "xxxxx",
                },
              ],
            },
            {
              id: "3",
              label: "开发部",
              plantNum: "10",
              actualNum: "5",
              DeptPic: "Baldwin",
              superiorDept: "公司",
              DeptIdNum: "001",
              children: [
                {
                  id: "3-1",
                  label: "成员组5",
                  superiorNumber: "020",
                  remark: "xxxxx",
                },
                {
                  id: "3-2",
                  label: "成员组6",
                  superiorNumber: "021",
                  remark: "xxxxx",
                },
              ],
            },
          ],
        },
      ],
      defaultProps: {
        children: "children",
        label: "label",
      },
      tableData: [
        {
          userId: "001",
          userName: "王大锤",
          gender: "男",
          departmentNumber: "1005",
          departmentName: "生产部",
          job: "普通员工",
          jobTitle: "装配工",
          takeOfficeDate: "2021/9/10",
          probation: "3",
          BARworkeDate: "2021/12/10",
          state: "在职",
        },
      ],
    };
  },
  created() {},
  methods: {
    clickSearch() {
      const h = this.$createElement;
      this.$notify({
        title: "",
        message: h("span", { style: "color: teal" }, "功能开发中"),
      });
    },
    handleClose(e) {
      this.showDialog = e;
    },
    addUser() {
      this.userId = 0;
      this.showDialog = true;
    },
    handleAmend() {
      this.userId = 1;
      this.showDialog = true;
    },
    handleDelete() {
      this.$confirm("此操作将永久删除该数据, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "删除成功!",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
  },
  computed: {},
};
</script>
<style lang='less' scoped>
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
  display: flex;
}
.el-icon-search {
  color: #909399;
}
.searchBtn {
  margin-left: 10px;
}
.container {
  display: flex;
  .duties {
    width: 165px;
    height: 66vh;
    border-radius: 8px;
    padding: 4px;
    box-sizing: border-box;
    border: 1px solid #ccc;
  }
}

.pages {
  margin-top: 20px;
}
</style>