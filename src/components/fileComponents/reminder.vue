<template>
  <div>
    <div class="checkP">
      <!-- <el-date-picker
        v-model="value1"
        type="daterange"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
      >
      </el-date-picker> -->
      <div class="select">
        <el-radio v-model="radio" label="1">员工转正提醒</el-radio>
        <el-radio v-model="radio" label="2">员工生日提醒</el-radio>
        <el-radio v-model="radio" label="3">合同到期提醒</el-radio>
      </div>
    </div>
    <div>
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column
          width="60px"
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
          align="center"
          width="60px"
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
        <!-- <el-table-column label="操作" align="center" width="160px">
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
        </el-table-column> -->
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      value1: "",
      radio: "1",
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
  mounted() {},
  methods: {
    change() {},
  },
  watch: {
    radio() {
      if (this.radio == 2) {
        this.tableData[0].userName = "王一博";
        this.tableData[0].userId='105';
      } else if (this.radio == 3) {
        this.tableData[0].userName = "王er博"; this.tableData[0].userId='005';
      }else{
        this.tableData[0].userName = "王大锤"; this.tableData[0].userId='001';

      }
    },
  },
  computed: {},
};
</script>
<style lang='less' scoped>
.checkP {
  width: 100%;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
}
</style>