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
      <el-button class="searchBtn" type="primary" @click="searchPeople(1)"
        >休息日方案</el-button
      >
      <el-button class="searchBtn" type="primary" @click="searchPeople(2)"
        >节假日方案</el-button
      >
      <el-button class="searchBtn" type="primary" @click="searchPeople(3)"
        >日历方案</el-button
      >
      <el-button class="searchBtn" type="primary" @click="searchPeople(4)"
        >基本班次表</el-button
      >
    </div>
    <div class="data" v-if="status == 1">
      <el-table :data="tableData" border stripe style="width: 100%">
        <el-table-column type="index" label="序号" width="60" align="center">
        </el-table-column>
        <el-table-column prop="number" label="编号" width="60" align="center">
        </el-table-column>
        <el-table-column prop="date" label="期间" align="center">
        </el-table-column>
        <el-table-column prop="plan" label="方案名" align="center">
        </el-table-column>
        <el-table-column prop="type" label="类型" align="center">
        </el-table-column>
        <el-table-column label="操作" align="center">
          <template slot-scope="scope">
            <el-button type="primary" size="mini" @click="handleEdit(scope.row)"
              >编辑</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>

    <!-- 节假日 -->
    <div class="data" v-if="status == 2">
      <el-table :data="tableData" border stripe style="width: 100%">
        <el-table-column type="index" label="序号" width="60" align="center">
        </el-table-column>
        <el-table-column prop="number" label="编号" width="60" align="center">
        </el-table-column>
        <el-table-column prop="plan" label="方案名" align="center">
        </el-table-column>
        <el-table-column prop="days" label="休息天数" align="center">
        </el-table-column>
        <el-table-column prop="date" label="时间" align="center">
        </el-table-column>
        <el-table-column label="操作" align="center">
          <template slot-scope="scope">
            <el-button type="primary" size="mini" @click="handleEdit(scope.row)"
              >编辑</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>

    <!-- 基本班次表数据 -->
    <div class="data" v-if="status == 4">
      <el-table :data="shiftTableData" border stripe style="width: 100%">
        <el-table-column type="index" label="序号" width="60" align="center">
        </el-table-column>
        <el-table-column
          prop="shiftCode"
          label="班次代码"
          width="60"
          align="center"
        >
        </el-table-column>
        <el-table-column prop="shiftName" label="班次名称" align="center">
        </el-table-column>
        <el-table-column prop="workTime" label="工作时间" align="center">
        </el-table-column>
        <el-table-column prop="beforeDaySpan" label="是否前跨天" align="center">
        </el-table-column>
        <el-table-column prop="afterDaySpan" label="是否后跨天" align="center">
        </el-table-column>
        <el-table-column
          prop="morningstartWorkTime"
          label="早上上班时间"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="morningendWorkTime"
          label="早上下班时间"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="afternoonstartWorkTime"
          label="下午上班时间"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="afternoonendWorkTime"
          label="下午下班时间"
          align="center"
        >
        </el-table-column>
        <el-table-column fixed="right" label="操作" align="center" width="100">
          <template slot-scope="scope">
            <el-button
              @click="handleCheckClick(scope.row)"
              type="text"
              size="small"
              >查看</el-button
            >
            <!-- <el-button type="text" size="small">编辑</el-button> -->
          </template>
        </el-table-column>
      </el-table>
    </div>

    <!-- 编辑弹窗 -->
    <el-dialog title="提示" :visible.sync="dialogVisible" width="45%">
      <div class="content">
        <el-form
          ref="RestDayEditForm"
          :model="RestDayEditForm"
          label-width="80px"
        >
          <el-form-item label="编号">
            <el-input v-model="RestDayEditForm.number"></el-input>
          </el-form-item>
          <el-form-item label="期间">
            <el-input v-model="RestDayEditForm.date"></el-input>
          </el-form-item>
          <el-form-item label="方案名">
            <el-input v-model="RestDayEditForm.plan"></el-input>
          </el-form-item>

          <el-form-item label="方案名" v-if="status == 1">
            <el-radio-group v-model="RestDayEditForm.radio">
              <el-radio :label="1">周休</el-radio>
              <el-radio :label="2">日休</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item v-if="RestDayEditForm.radio == 2">
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
          </el-form-item>
          <el-form-item v-if="RestDayEditForm.radio == 1">
            <el-checkbox-group v-model="checkedWeekdays">
              <el-checkbox
                v-for="weekday in week"
                :label="weekday"
                :key="weekday"
                >{{ weekday }}</el-checkbox
              >
            </el-checkbox-group>
          </el-form-item>
        </el-form>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="onconfirm">确 定</el-button>
      </span>
    </el-dialog>
    <!-- 基本班次表弹窗 -->
    <el-dialog title="提示" :visible.sync="shiftDialogVisible" width="55%">
      <div class="content">
        <el-form
          ref="shiftForm"
          :inline="true"
          :model="shiftForm"
          label-width="120px"
        >
          <div class="editShift">
            <el-form-item label="班次代码">
              <el-input v-model="shiftForm.shiftCode"></el-input>
            </el-form-item>
            <el-form-item label="班次名称">
              <el-input v-model="shiftForm.shiftName"></el-input>
            </el-form-item>
            <el-form-item label="工作时间">
              <el-input v-model="shiftForm.workTime"></el-input>
            </el-form-item>
            <el-form-item label="开始记迟到">
              <el-input v-model="shiftForm.betardy"></el-input>
            </el-form-item>
            <el-form-item label="开始记旷工">
              <el-input v-model="shiftForm.absenteeism"></el-input>
            </el-form-item>
            <el-form-item label="加班记缺勤">
              <el-checkbox
                v-model="shiftForm.overtimeIsAbesencefromduty"
              ></el-checkbox>
            </el-form-item>
            <el-form-item label="是否前跨天">
              <el-checkbox v-model="shiftForm.beforeDaySpan"></el-checkbox>
            </el-form-item>
            <el-form-item label="是否后跨天">
              <el-checkbox v-model="shiftForm.afterDaySpan"></el-checkbox>
            </el-form-item>
            <div class="intervalBox">
              <div class="timeInterval">
                <p class="title">时段1</p>
                <el-form-item class="formItem" label="上班时间1">
                  <input class="inpt" v-model="shiftForm.getWorktime1" />
                </el-form-item>
                <el-form-item class="formItem" label="下班时间1">
                  <input class="inpt" v-model="shiftForm.outWorktime1" />
                </el-form-item>
                <el-form-item class="formItem" label="上班可不刷">
                  <div style="width:100px;">
                    <el-checkbox v-model="shiftForm.gotoWorknoswipe"></el-checkbox>
                  </div>
                </el-form-item>
                <el-form-item class="formItem" label="下班可不刷">
                  <div style="width:100px;">
                    <el-checkbox v-model="shiftForm.gooffWorknoswipe"></el-checkbox>
                  </div>
                </el-form-item>
                <el-form-item class="formItem">
                  <p>上班时间1有效范围</p>
                </el-form-item>
              </div>
            </div>
          </div>
        </el-form>
      </div>
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
      status: 1,
      tableData: [],
      shiftTableData: [
        {
          shiftCode: "01",
          shiftName: "正常早班",
          workTime: "8.0",
          beforeDaySpan: "否",
          afterDaySpan: "否",
          morningstartWorkTime: "8:00",
          morningendWorkTime: "12:00",
          afternoonstartWorkTime: "14:00",
          afternoonendWorkTime: "18:00",
        },
      ],
      RestDayEditForm: {
        number: "",
        date: "",
        plan: "",
        radio: 1,
      },

      baseInfo: {},
      //弹窗
      dialogVisible: false,
      week: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
      checkedWeekdays: [],
      //日休
      monthVal: "",
      days: [],
      checkeddays: [],

      //基本班次
      shiftDialogVisible: false,
      //班次表编辑
      shiftForm: {
        shiftCode: "",
        shiftName: "",
        workTime: "",
        betardy: "",
        absenteeism: "",
        overtimeIsAbesencefromduty: false,
        beforeDaySpan: false,
        afterDaySpan: false,
        getWorktime1: "",
        outWorktime1: "",
        gotoWorknoswipe:false,
        gooffWorknoswipe:false,
      },
    };
  },
  created() {
    this.getData();
    this.timeDate();
  },
  methods: {
    search() {},
    getData() {
      if (this.status == 1) {
        this.tableData = [
          {
            date: "2021-05",
            number: "01",
            plan: "休息日",
            type: "周休",
            radio: 1,
          },
          {
            date: "2021-06",
            number: "01",
            plan: "休息日",
            type: "日休",
            radio: 2,
          },
        ];
      }
    },
    searchPeople(type) {
      this.status = type;
      if (this.status == 1) {
        this.tableData = [
          {
            date: "2021-05",
            number: "01",
            plan: "休息日",
            type: "周休",
            radio: 1,
          },
          {
            date: "2021-06",
            number: "01",
            plan: "休息日",
            type: "日休",
            radio: 2,
          },
        ];
      } else if (this.status == 2) {
        this.tableData = [
          {
            date: "2021-04-04",
            number: "01",
            days: "3",
            plan: "清明节",
          },
          {
            date: "2021-10-01",
            number: "01",
            days: "7",
            plan: "国庆节",
          },
        ];
      }
    },

    handleEdit(row) {
      this.dialogVisible = true;
      let obj = JSON.parse(JSON.stringify(row));
      this.RestDayEditForm = obj;
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

    handleCheckClick(row) {
      console.log(row);
      this.shiftDialogVisible = true;
    },

    //提交
    onconfirm() {
      // if (this.activeName == this.baseInfo.type) {
      //   this.dialogVisible = false;
      // } else {
      //   this.$confirm("此次修改将切换休息方案, 是否继续?", "提示", {
      //     confirmButtonText: "确定",
      //     cancelButtonText: "取消",
      //     type: "warning",
      //   })
      //     .then(() => {
      //       this.$message({
      //         type: "success",
      //         message: "切换成功!",
      //       });
      this.dialogVisible = false;
      //     })
      //     .catch(() => {
      //       this.$message({
      //         type: "info",
      //         message: "已取消切换",
      //       });
      //     });
      // }
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
    margin-bottom: 10px;
  }
}
.data {
  padding: 12px;
  box-sizing: border-box;
}
/deep/.el-input__icon {
  color: #808080;
}

/deep/ .editShift {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 12px;
  box-sizing: border-box;
  .el-input__inner {
    width: 160px;
  }
  .el-divider--horizontal {
    margin: 0;
  }
  .timeInterval {
    width: 200px;
    min-height: 40px;
    border: 1px solid #ccc;
    border-radius: 8px;
    position: relative;
    padding: 6px;
    box-sizing: border-box;
    .title {
      width: 46px;
      height: 24px;
      background-color: #fff;
      text-align: center;
      line-height: 24px;
      position: absolute;
      top: -12px;
      left: 10px;
    }
    .formItem {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 0;
      margin-top: 0;
      .inpt {
        width: 100px;
      }
      /deep/ .el-form-item__label {
        width: 76px !important;
      }
    }
  }
}
</style>