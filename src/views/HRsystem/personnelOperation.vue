<template>
  <div>
    <div class="tabs">
      <div :class="type == 1 ? 'active' : 'item'" @click="changType(1)">
        人事异动
      </div>
      <div :class="type == 2 ? 'active' : 'item'" @click="changType(2)">
        离职管理
      </div>
    </div>
    <!-- <el-divider></el-divider> -->
    <div class="container">
      <div v-if="type == 1">
        <div class="btns">
          <div>
            <el-input placeholder="请输入内容" v-model="search" class="inpt">
              <i slot="prefix" class="el-input__icon el-icon-search"></i>
            </el-input>
            <el-button type="info" round>待审核</el-button>
            <el-button type="info" round>已审核</el-button>
          </div>
          <div class="iconBtns">
            <!-- <el-button type="success" round @click="addNewProject"
              >新增人事异动项目</el-button
            > -->
            <div class="icon" @click="handleShenhe">
              <i class="iconfont icon-shenhe"></i>
            </div>
            <div class="icon" @click="handleAdd">
              <i class="iconfont icon-tianjia1"></i>
            </div>
          </div>
        </div>
        <el-table
          :data="tableData"
          border
          style="width: 100%"
          @selection-change="handleSelectionChange"
        >
          <el-table-column type="selection" align="center"> </el-table-column>
          <el-table-column
            type="index"
            label="序号"
            align="center"
            width="50px"
          >
          </el-table-column>
          <el-table-column prop="date" label="日期" align="center">
          </el-table-column>
          <el-table-column prop="name" label="姓名" align="center">
          </el-table-column>
          <el-table-column prop="changeName" label="变动项目" align="center">
          </el-table-column>
          <el-table-column prop="exchange" label="变动前" align="center">
          </el-table-column>
          <el-table-column prop="afterchange" label="变动后" align="center">
          </el-table-column>
          <el-table-column prop="reason" label="变动原因" align="center">
          </el-table-column>
          <el-table-column prop="reviewer" label="审核人" align="center">
          </el-table-column>
          <el-table-column prop="checkStatus" label="审核状态" align="center">
          </el-table-column>
          <el-table-column label="操作" align="center">
            <template slot-scope="scope">
              <el-button
                size="mini"
                type="danger"
                @click="handleCheck(scope.$index, scope.row)"
                >删除</el-button
              >
            </template>
          </el-table-column>
        </el-table>
      </div>

      <!-- 离职管理 -->
      <div v-if="type == 2">
        <div class="btns">
          <el-form :inline="true" :model="bequitForm" label-width="70px">
            <el-form-item label="离职形式">
              <el-select v-model="bequitForm.quitWay" clearable placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="离职日期">
              <el-date-picker
                v-model="bequitForm.quitDate"
                type="date" clear-icon="el-icon-date"
                placeholder="选择日期"
              >
              </el-date-picker>
            </el-form-item>
            <el-form-item>
              <el-button type="primary">查询</el-button>
            </el-form-item>
          </el-form>
          <div>
            <el-input
              placeholder="请输入搜索内容"
              v-model="search"
              class="inpt"
            >
              <i slot="prefix" class="el-input__icon el-icon-search"></i>
            </el-input>
          </div>
        </div>
      </div>
    </div>

    <el-dialog
      title="添加异动项目"
      center
      :visible.sync="dialogVisible"
      width="48%"
    >
      <el-form ref="addform" :model="addform" label-width="100px">
        <h3 class="title">个人信息</h3>
        <el-form-item label="编号">
          <el-input v-model="addform.NumId"></el-input>
        </el-form-item>
        <el-form-item label="姓名">
          <el-input v-model="addform.name"></el-input>
        </el-form-item>
        <el-form-item label="部门名称">
          <el-input v-model="addform.departmentName"></el-input>
        </el-form-item>
        <el-form-item label="部门编号">
          <el-input v-model="addform.departmentNum"></el-input>
        </el-form-item>
        <div class="reshuffle">
          <h3 class="title">异动状况</h3>
          <el-form-item label="变动项目">
            <el-input v-model="addform.changeProject"></el-input>
          </el-form-item>
          <el-form-item label="变动前">
            <el-input v-model="addform.exchange"></el-input>
          </el-form-item>
          <el-form-item label="变动后">
            <el-input v-model="addform.afterchange"></el-input>
          </el-form-item>
          <el-form-item label="变动原因">
            <el-input v-model="addform.changeReason"></el-input>
          </el-form-item>
          <el-form-item label="审核人">
            <el-input v-model="addform.reviewer"></el-input>
          </el-form-item>
        </div>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      type: 1,
      tableData: [
        {
          date: "2022-05-02",
          name: "王小虎",
          changeName: "职务提升",
          exchange: "sogood",
          afterchange: "sobad",
          reason: "work hard",
          reviewer: "总经理",
          checkStatus: "待审核",
        },
      ],
      multipleSelection: [],
      search: "",
      dialogVisible: false,
      addform: {
        NumId: "22558852",
        name: "王大锤",
        departmentName: "niceJob",
        departmentNum: "1200000",
        changeProject: "调岗",
        exchange: "操作工",
        afterchange: "总经理",
        changeReason: "工作需要",
        operator: "manager",
        reviewer: "boss",
      },

      // 离职管理
      bequitForm: {
        quitWay:"",
        quitDate:""
      },
      options: [
        {
          value: "自动离职",
          label: "自动离职",
        },
        {
          value: "公司辞退",
          label: "公司辞退",
        },
        {
          value: "退休",
          label: "退休",
        },
      ],
    };
  },
  methods: {
    changType(type) {
      this.type = type;
    },
    handleAdd() {
      this.dialogVisible = true;
    },
    handleCheck(index, item) {
      console.log(index, item);
    },
    handleShenhe() {
      if (this.multipleSelection.length < 1) {
        this.$mess.warning("请选择要审核的数据");
        return;
      } else {
        this.$confirm("是否通过审核", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
        })
          .then(() => {
            this.$message({
              type: "success",
              message: "通过审核!",
            });
          })
          .catch(() => {
            this.$message({
              type: "info",
              message: "未通过或已取消",
            });
          });
      }
    },
    handleSelectionChange(val) {
      console.log(val);
      this.multipleSelection = val;
    },
  },
  created() {},
  components: {},
  computed: {},
};
</script>
<style lang='less' scoped>
.tabs {
  width: 100%;
  height: 90px;
  padding: 0 16px;
  box-sizing: border-box;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  .item {
    width: 120px;
    height: 50px;
    border: 1px solid #ccc;
    margin-right: 12px;
    text-align: center;
    line-height: 50px;
    color: gray;
    font-size: 14px;
    cursor: pointer;
    margin-right: 10px;
  }
  .active {
    background-color: #67c23a;
    text-align: center;
    line-height: 50px;
    width: 120px;
    height: 50px;
    color: #fff;
    font-size: 14px;
    cursor: pointer;
    margin-right: 10px;
  }
}
.el-icon-search {
  color: #909399 ;
}
.container {
  padding: 0 16px;
  box-sizing: border-box;
  .btns {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    height: 50px;
    .inpt {
      width: 200px;
      margin-right: 10px;
    }
  }
}
.title {
  margin: 10px;
  color: #444444;
}
.reshuffle {
  border: 1px solid #ccc;
  padding: 10px;
  box-sizing: border-box;
}
.iconBtns {
  display: flex;
  align-items: center;
  .icon {
    width: 49px;
    height: 49px;
    line-height: 49px;
    text-align: center;
    background-color: #66b1ff;
    border-radius: 50%;
    margin-right: 10px;
    cursor: pointer;
    .iconfont {
      color: #fff;
    }
  }
}
</style>