<template>
  <div>
    <div class="crumbs">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/Hardware' }"
          >硬件管理</el-breadcrumb-item
        >
        <el-breadcrumb-item>硬件档案</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="container">
      <div class="screen">
        <el-form
          ref="searchForm"
          :inline="true"
          :model="searchForm"
          label-width="60px"
        >
          <el-form-item label="编号：">
            <el-input v-model="searchForm.num" placeholder="请输入"></el-input>
          </el-form-item>
          <el-form-item label="姓名：">
            <el-input v-model="searchForm.name" placeholder="请输入"></el-input>
          </el-form-item>
          <el-form-item label="长ID：">
            <el-input
              v-model="searchForm.longerID"
              placeholder="请输入"
            ></el-input>
          </el-form-item>
          <el-form-item label="卡号：">
            <el-input
              v-model="searchForm.cardNum"
              placeholder="请输入"
            ></el-input>
          </el-form-item>
        </el-form>
        <div class="btns">
          <el-button type="primary">查询</el-button>
        </div>
      </div>
      <div class="table">
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column type="selection" width="55" align="center">
          </el-table-column>
          <el-table-column type="index" label="序号" width="60" align="center">
          </el-table-column>
          <el-table-column prop="number" label="编号" align="center">
          </el-table-column>
          <el-table-column prop="name" label="姓名" align="center">
          </el-table-column>
          <el-table-column prop="departmentNum" label="部门编号" align="center">
          </el-table-column>
          <el-table-column
            prop="departmentName"
            label="部门名称"
            align="center"
          >
          </el-table-column>
          <el-table-column prop="longerID" label="长ID" align="center">
          </el-table-column>
          <el-table-column label="操作" align="center">
            <template slot-scope="scope">
              <el-button
                size="mini"
                type="primary"
                @click="handleDownload(scope.$index, scope.row)"
                >下载</el-button
              >
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      searchForm: {
        num: "",
        name: "",
        longerID: "",
        cardNum: "",
      },

      tableData: [
        {
          number: "100",
          name: "王小虎",
          departmentNum: "101",
          departmentName: "行政部",
          longerID: "100120001210",
        },
      ],
    };
  },
  created() {},
  methods: {
    handleDownload() {
      console.log(32132);
    },
  },
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
  margin-bottom: 16px;
}
.container {
  width: 100%;
  padding: 0 12px 12px;
  box-sizing: border-box;
  .screen {
    display: flex;
    align-items: center;
    /deep/.el-input__inner {
      width: 180px;
      height: 34px;
      font-size: 14px;
    }
    /deep/ .el-form-item {
      margin-bottom: 0;
    }
    .btns {
      margin-left: 50px;
    }
  }
  .table {
    margin-top: 20px;
  }
}
</style>