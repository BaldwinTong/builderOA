<template>
  <div>
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
      <el-button class="searchBtn" type="primary" @click="searchPeople('日休')"
        >日休人员</el-button
      >
      <el-button class="searchBtn" type="primary" @click="searchPeople('周休')"
        >周休人员</el-button
      >
      <el-button class="searchBtn" type="primary" @click="searchPeople('周休')"
        >节假日</el-button
      >
    </div>
    <div class="data">
      <div>
        <el-table :data="tableData" border stripe style="width: 100%">
          <el-table-column type="index" label="序号" width="60" align="center">
          </el-table-column>
          <el-table-column prop="name" label="姓名" align="center">
          </el-table-column>
          <el-table-column prop="gender" label="性别" align="center">
          </el-table-column>
          <el-table-column prop="duties" label="职务" align="center">
          </el-table-column>
          <el-table-column prop="department" label="部门" align="center">
          </el-table-column>
          <el-table-column prop="type" label="休息方案" align="center">
          </el-table-column>
          <el-table-column label="操作" align="center">
            <template slot-scope="scope">
              <el-button
                type="primary"
                size="mini"
                @click="handleEdit(scope.row)"
                >编辑</el-button
              >
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>

    <!-- 编辑弹窗 -->
    <el-dialog title="提示" :visible.sync="dialogVisible" width="45%">
      <div class="content">
        <el-tabs
          type="border-card"
          v-model="activeName"
        >
          <el-tab-pane label="日休" name="日休">
            <el-date-picker
              @change="pickDate"
              v-model="monthVal"
              type="month"
              placeholder="选择月"
            >
            </el-date-picker>
            <el-checkbox-group v-model="checkeddays">
              <el-checkbox v-for="day in days" :label="day" :key="day">{{
                day
              }}</el-checkbox>
            </el-checkbox-group>
          </el-tab-pane>
          <el-tab-pane label="周休" name="周休">
            <el-checkbox-group v-model="checkedWeekdays">
              <el-checkbox
                v-for="weekday in week"
                :label="weekday"
                :key="weekday"
                >{{ weekday }}</el-checkbox
              >
            </el-checkbox-group>
          </el-tab-pane>
        </el-tabs>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="onconfirm">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { getMonthDays, sortNum } from "../../utils/util.js";
export default {
  components: {},
  data() {
    return {
      searchText: "",
      tableData: [],
      originList: [
        {
          date: "2016-05-02",
          name: "王小虎",
          gender: "男",
          duties: "普通员工",
          department: "开发部",
          type: "日休",
        },
        {
          date: "2016-05-02",
          name: "王da虎",
          gender: "男",
          duties: "普通员工",
          department: "开发部",
          type: "周休",
        },
      ],

      baseInfo: {},

      //弹窗
      dialogVisible: false,
      activeName: "周休",
      week: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
      checkedWeekdays: [],
      //日休
      monthVal: "",
      days: [],
      checkeddays: [],
    };
  },
  created() {
    this.getData();
    this.timeDate();
  },
  methods: {
    search() {
      this.getData();
    },
    getData() {
      this.tableData = this.originList;
    },
    searchPeople(type) {
      var list = [];
      this.originList.forEach((item) => {
        if (item.type == type) {
          list.push(item);
        }
      });
      this.tableData = list;
    },

    handleEdit(row) {
      this.dialogVisible = true;
      this.baseInfo = row;
      this.activeName = row.type;
    },


    //日休日期选择
    pickDate(val) {
      this.days = [];
      let days = getMonthDays(val);
      for (let i = 1; i <= days; i++) {
        this.days.push(i);
      }
      this.days = this.days.sort(sortNum);
    },
    timeDate() {
      let date = new Date();
      var year = date.getFullYear();
      let month = date.getMonth() + 1;
      if (month < 10) {
        month = "0" + month;
      }
      this.monthVal = year + "-" + month;
      let days = getMonthDays();
      for (let i = 1; i <= days; i++) {
        this.days.push(i);
      }
      this.days = this.days.sort(sortNum);
    },

    //提交
    onconfirm() {
      if (this.activeName == this.baseInfo.type) {
        this.dialogVisible = false;
      } else {
        this.$confirm("此次修改将切换休息方案, 是否继续?", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
        })
          .then(() => {
            this.$message({
              type: "success",
              message: "切换成功!",
            });
            this.dialogVisible = false;
          })
          .catch(() => {
            this.$message({
              type: "info",
              message: "已取消切换",
            });
          });
      }
    },
  },
  computed: {},
};
</script>
<style lang='less' scoped>
.searchTop {
  width: 100%;
  padding: 16px;
  box-sizing: border-box;
  .el-input {
    width: 220px;
  }

  .searchBtn {
    margin-left: 20px;
  }
}
.el-checkbox-group {
  margin: 10px;
  .el-checkbox {
    width: 60px;
    margin-right: 0;
    margin-bottom: 10px;
  }
}
/deep/.el-input__icon {
  color: #808080;
}
</style>