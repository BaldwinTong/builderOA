<template>
  <div>
    <div class="logtop">
      <div>
        <el-input
          class="searchInput"
          placeholder="请输入内容"
          v-model="searchInfo"
        >
          <i
            slot="prefix"
            class="el-input__icon el-icon-search"
            style="color: #ccc"
          ></i>
        </el-input>
        <el-button type="primary" plain>搜索</el-button>
        <el-button type="warning" plain @click="handleCheck"
          >条件查询</el-button
        >
      </div>
      <el-tooltip
        class="item"
        effect="dark"
        content="添加奖惩"
        placement="top-start"
      >
        <el-button type="primary" class="addbtns" circle @click="handleAdd">
          <i class="iconfont icon-tianjia1"></i>
        </el-button>
      </el-tooltip>
    </div>
    <div class="table">
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column type="index" label="序号" width="60px" align="center">
        </el-table-column>
        <el-table-column prop="date" label="日期" align="center">
        </el-table-column>
        <el-table-column prop="number" label="编号" align="center">
        </el-table-column>
        <el-table-column prop="name" label="姓名" align="center">
        </el-table-column>
        <el-table-column prop="department" label="部门" align="center">
        </el-table-column>
        <el-table-column prop="RP" label="奖惩" align="center">
        </el-table-column>
        <el-table-column prop="RPName" label="奖惩名称" align="center">
        </el-table-column>
        <el-table-column prop="RPMoney" label="奖惩金额" align="center">
        </el-table-column>
        <el-table-column prop="thing" label="事件说明" align="center">
        </el-table-column>
      </el-table>
    </div>

    <!-- 新增奖惩数据 -->
    <el-dialog title="添加奖惩" :visible.sync="AddDialogVisible" width="30%">
      <el-form class="form" ref="AddForm" :model="AddForm" label-width="80px">
        <el-form-item label="姓名">
          <el-input
            v-model="AddForm.name"
            placeholder="请输入内容"
            style="width: 220px"
          ></el-input>
        </el-form-item>
        <el-form-item label="日期选择" style="width: 220px">
          <el-date-picker
            v-model="AddForm.date"
            type="date"
            placeholder="选择日期"
          ></el-date-picker>
        </el-form-item>
        <el-form-item label="奖惩类型">
          <el-radio v-model="AddForm.radio" label="1" @change="handleClick"
            >奖</el-radio
          >
          <el-radio v-model="AddForm.radio" label="2" @change="handleClick"
            >惩</el-radio
          >
        </el-form-item>
        <el-form-item label="奖惩名称">
          <el-select
            v-model="AddForm.type"
            placeholder="请选择"
            style="width: 220px"
          >
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="奖惩金额">
          <el-input
            v-model="AddForm.money"
            placeholder="请输入内容"
            style="width: 220px"
          ></el-input>
        </el-form-item>
        <el-form-item label="奖惩天数">
          <el-input
            v-model="AddForm.days"
            placeholder="请输入内容"
            style="width: 220px"
          ></el-input>
        </el-form-item>
        <el-form-item label="事件说明">
          <el-input type="textarea" v-model="AddForm.desc"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">确认</el-button>
          <el-button @click="AddDialogVisible = false">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>

    <!-- 条件查询 -->
    <el-dialog title="条件查询" :visible.sync="searchDialogVisible" width="30%">
      <el-form
        class="form"
        ref="searchForm"
        :model="searchForm"
        label-width="80px"
      >
        <el-form-item label="部门">
          <el-select v-model="searchForm.department" placeholder="请选择">
            <el-option
              v-for="item in departmentList"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="开始日期">
          <el-date-picker
            v-model="searchForm.startDate"
            type="date"
            placeholder="选择日期"
          ></el-date-picker>
        </el-form-item>
        <el-form-item label="结束日期">
          <el-date-picker
            v-model="searchForm.endDate"
            type="date"
            placeholder="选择日期"
          ></el-date-picker>
        </el-form-item>
        <el-form-item label="奖惩类型">
          <el-radio v-model="searchForm.radio" label="1" @change="handleClick"
            >奖</el-radio
          >
          <el-radio v-model="searchForm.radio" label="2" @change="handleClick"
            >惩</el-radio
          >
        </el-form-item>
        <el-form-item label="奖惩名称">
          <el-select v-model="searchForm.type" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">搜索</el-button>
          <el-button @click="searchDialogVisible = false">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchInfo: "",
      searchDialogVisible: false,
      AddDialogVisible: false,
      searchForm: {
        department:"",
        startDate: "",
        endDate: "",
        type: "",
        radio: "1",
      },
      AddForm: {
        name: "",
        date: "",
        type: "",
        radio: "1",
        money: "",
        days: "",
        desc: "",
      },
      options: [
        {
          value: "嘉奖",
          label: "嘉奖",
        },
      ],
      departmentList: [
        {
          value: "人事部",
          label: "人事部",
        },
        {
          value: "技术部",
          label: "技术部",
        },
        {
          value: "开发部",
          label: "开发部",
        },
      ],
      tableData: [
        {
          date: "2016-05-02",
          number: "1100152",
          name: "王小虎",
          department: "开发部",
          RP: "奖",
          RPName: "嘉奖",
          RPMoney: "30",
          thing: "见义勇为",
          address: "",
        },
      ],
    };
  },
  methods: {
    handleCheck() {
      this.searchDialogVisible = true;
    },
    handleClick(e) {
      if (e == "1") {
        this.options = [
          {
            value: "嘉奖",
            label: "嘉奖",
          },
        ];
      } else {
        this.options = [
          {
            value: "处罚",
            label: "处罚",
          },
        ];
      }
    },
    handleAdd() {
      this.AddDialogVisible = true;
    },
    onSubmit() {
      console.log("submit!");
    },
  },
  created() {},
  components: {},
  computed: {},
};
</script>
<style lang='less' scoped>
.logtop {
  padding: 16px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .searchInput {
    width: 300px;
    margin-right: 16px;
  }
  .addbtns {
    width: 40px;
    height: 40px;
  }
}
.table {
  padding: 0 16px;
  box-sizing: border-box;
}
</style>