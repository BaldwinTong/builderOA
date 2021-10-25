<template>
  <div>
    <div class="contData">
      <div class="searchTop">
        <el-input
          placeholder="请输入内容"
          prefix-icon="el-icon-search"
          v-model="searchText"
        >
        </el-input>
        <el-button class="searchBtn" type="primary" @click="search"
          >搜索</el-button
        >
      </div>
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column type="index" label="序号" width="60" align="center">
        </el-table-column>
        <el-table-column prop="Number" label="编号" width="60" align="center">
        </el-table-column>
        <el-table-column prop="name" label="姓名" align="center">
        </el-table-column>
        <el-table-column prop="gender" label="性别" width="60" align="center">
        </el-table-column>
        <el-table-column prop="departmentNum" label="部门号码" align="center">
        </el-table-column>
        <el-table-column prop="departmentName" label="部门名称" align="center">
        </el-table-column>
        <el-table-column prop="classCode" label="班次代码" align="center">
        </el-table-column>
        <el-table-column prop="calendarPlan" label="日历方案" align="center">
        </el-table-column>
        <el-table-column prop="startWorkDate" label="到职日期" align="center">
        </el-table-column>
        <el-table-column prop="duties" label="职务" align="center">
        </el-table-column>
        <el-table-column prop="status" label="状态" align="center">
        </el-table-column>
        <el-table-column
          prop="autoChangeworkTime"
          label="自动倒班套"
          align="center"
        >
        </el-table-column>
        <el-table-column label="操作" align="center">
          <template slot-scope="scope">
            <el-button
              @click="handleCheckClick(scope.row)"
              type="text"
              size="small"
              >查看</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>

    <!-- 弹窗 -->
    <el-dialog title="提示" :visible.sync="dialogVisible" width="50%">
      <div class="content">
        <el-form ref="EditForm" :model="EditForm" :inline="true" label-width="90px">
          <el-form-item label="编号">
            <el-input v-model="EditForm.number"></el-input>
          </el-form-item>
          <el-form-item label="姓名">
            <el-input v-model="EditForm.name"></el-input>
          </el-form-item>
          <el-form-item label="性别">
            <el-input v-model="EditForm.gender"></el-input>
          </el-form-item>
          <el-form-item label="部门号码">
            <el-input v-model="EditForm.departmentNum"></el-input>
          </el-form-item>
          <el-form-item label="部门名称">
            <el-input v-model="EditForm.departmentName"></el-input>
          </el-form-item>
          <el-form-item label="班次代码">
            <el-input v-model="EditForm.classCode"></el-input>
          </el-form-item>
          <el-form-item label="日历方案">
            <el-input v-model="EditForm.calendarPlan"></el-input>
          </el-form-item>
          <el-form-item label="到职日期">
            <el-input v-model="EditForm.startWorkDate"></el-input>
          </el-form-item>
          <el-form-item label="职务">
            <el-input v-model="EditForm.duties"></el-input>
          </el-form-item>
          <el-form-item label="状态">
            <el-input v-model="EditForm.status"></el-input>
          </el-form-item>
          <el-form-item label="自动倒班套">
            <el-input v-model="EditForm.autoChangeworkTime"></el-input>
          </el-form-item>
        </el-form>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="onconfirm">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      searchText: "",
      tableData: [
        {
          Number: "01",
          name: "李燕字",
          gender: "男",
          departmentNum: "RS01",
          departmentName: "人事部",
          classCode: "02",
          calendarPlan: "01",
          startWorkDate: "2020-10-10",
          duties: "员工",
          status: "在职",
          autoChangeworkTime: "",
        },
      ],

      dialogVisible: false,
      EditForm: {
        number: "01",
        name: "李燕字",
        gender: "男",
        departmentNum: "RS01",
        departmentName: "人事部",
        classCode: "02",
        calendarPlan: "01",
        startWorkDate: "2020-10-10",
        duties: "员工",
        status: "在职",
        autoChangeworkTime: "",
      },
    };
  },
  created() {},
  methods: {
    search() {
      console.log(this.searchText);
    },
    handleCheckClick() {
      this.dialogVisible = true;
    },
    onconfirm() {
      console.log("提交");
    },
  },
  computed: {},
};
</script>
<style lang='less' scoped>
.contData {
  padding: 16px;
  box-sizing: border-box;
  .searchTop {
    width: 100%;
    margin-bottom: 30px;
    .el-input {
      width: 220px;
    }

    .searchBtn {
      margin-left: 20px;
    }
  }
}
</style>