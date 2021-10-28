<template>
  <div>
    <div class="contData">
      <div style="display: flex; align-items: center">
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
        <div class="searchTop">
          <el-button class="searchBtn" type="primary" @click="search(1)"
            >原始刷卡记录</el-button
          >
        </div>
        <div class="searchTop">
          <el-button class="searchBtn" type="primary" @click="search(2)"
            >原始考勤记录表</el-button
          >
        </div>
        <div class="searchTop">
          <el-button class="searchBtn" type="primary" @click="search(3)"
            >补卡录入</el-button
          >
        </div>
      </div>
      <div v-if="type == 1">
        <el-table :data="tableData1" border style="width: 100%">
          <el-table-column type="index" label="序号" width="60" align="center">
          </el-table-column>
          <el-table-column prop="Number" label="编号" width="60" align="center">
          </el-table-column>
          <el-table-column prop="name" label="姓名" width="80" align="center">
          </el-table-column>
          <el-table-column prop="date" label="日期" align="center">
          </el-table-column>
          <el-table-column
            prop="swipingCardtime"
            label="刷卡时间"
            align="center"
          >
          </el-table-column>
          <el-table-column
            prop="KqModel"
            label="考勤机"
            width="80"
            align="center"
          >
          </el-table-column>
          <el-table-column prop="departmentNum" label="部门号码" align="center">
          </el-table-column>
          <el-table-column
            prop="departmentName"
            label="部门名称"
            align="center"
          >
          </el-table-column>
          <el-table-column prop="sign" label="签卡标志" align="center">
          </el-table-column>
          <el-table-column prop="signTime" label="签卡时间" align="center">
          </el-table-column>
          <el-table-column prop="handleSign" label="处理标志" align="center">
          </el-table-column>
          <el-table-column prop="cardNumber" label="卡号" align="center">
          </el-table-column>
          <el-table-column prop="remark" label="备注" align="center">
          </el-table-column>
          <el-table-column label="操作" align="center">
            <template slot-scope="scope">
              <el-button @click="handleEdit(scope.row)" type="text" size="small"
                >编辑</el-button
              >
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div v-if="type == 2">
        <el-table :data="tableData2" border style="width: 100%">
          <el-table-column type="index" label="序号" width="60" align="center">
          </el-table-column>
          <el-table-column prop="Number" label="编号" width="60" align="center">
          </el-table-column>
          <el-table-column prop="name" label="姓名" width="80" align="center">
          </el-table-column>
          <el-table-column
            prop="departmentName"
            label="部门名称"
            align="center"
          >
          </el-table-column>
          <el-table-column prop="date" label="日期" align="center">
          </el-table-column>
          <el-table-column prop="time1" label="时间1" align="center">
          </el-table-column>
          <el-table-column prop="time2" label="时间2" align="center">
          </el-table-column>
          <el-table-column prop="time3" label="时间3" align="center">
          </el-table-column>
          <el-table-column prop="time4" label="时间4" align="center">
          </el-table-column>
          <el-table-column prop="time5" label="时间5" align="center">
          </el-table-column>
          <el-table-column prop="time6" label="时间6" align="center">
          </el-table-column>
          <el-table-column prop="time7" label="时间7" align="center">
          </el-table-column>
          <el-table-column prop="time8" label="时间8" align="center">
          </el-table-column>
        </el-table>
      </div>
      <div v-if="type == 3" class="enterData">
        <div class="tree-left">
          <el-tree :data="treeData" highlight-current node-key="id" :props="defaultProps">
          </el-tree>
        </div>
        <div class="data-right">
          <el-table :data="tableData3" border style="width: 100%">
            <el-table-column
              type="index"
              label="序号"
              width="60"
              align="center"
            >
            </el-table-column>
            <el-table-column
              prop="Number"
              label="编号"
              align="center"
            >
            </el-table-column>
            <el-table-column prop="name" label="姓名" align="center">
            </el-table-column>
            <el-table-column
              prop="departmentName"
              label="部门名称"
              align="center"
            >
            </el-table-column>
            <el-table-column prop="cardNumber" label="卡号" align="center">
            </el-table-column>
            <el-table-column label="操作" align="center">
              <template slot-scope="scope">
                <el-button
                  @click="handleRepairClockIn(scope.row)"
                  type="text"
                  size="small"
                  >补卡</el-button
                >
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
    </div>

    <el-dialog title="提示" :visible.sync="dialogVisible" width="50%">
      <div class="content">
        <el-form
          ref="EditForm"
          :model="EditForm"
          :inline="true"
          label-width="90px"
        >
          <el-form-item label="编号">
            <el-input v-model="EditForm.number"></el-input>
          </el-form-item>
          <el-form-item label="姓名">
            <el-input v-model="EditForm.name"></el-input>
          </el-form-item>
          <el-form-item label="日期">
            <el-input v-model="EditForm.date"></el-input>
          </el-form-item>
          <el-form-item label="部门号码">
            <el-input v-model="EditForm.departmentNum"></el-input>
          </el-form-item>
          <el-form-item label="部门名称">
            <el-input v-model="EditForm.departmentName"></el-input>
          </el-form-item>
          <el-form-item label="签卡标志">
            <el-input v-model="EditForm.sign"></el-input>
          </el-form-item>
          <el-form-item label="签卡时间">
            <el-input v-model="EditForm.signTime"></el-input>
          </el-form-item>
          <el-form-item label="处理标志">
            <el-input v-model="EditForm.handleSign"></el-input>
          </el-form-item>
          <el-form-item label="卡号">
            <el-input v-model="EditForm.cardNumber"></el-input>
          </el-form-item>
          <el-form-item label="备注">
            <el-input v-model="EditForm.remark"></el-input>
          </el-form-item>
        </el-form>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="onconfirmEdit">确 定</el-button>
      </span>
    </el-dialog>

    <el-dialog title="提示" :visible.sync="repairVisible" width="50%">
      <div class="content">
        <el-form
          ref="repairForm"
          :model="repairForm"
          :inline="true"
          label-width="90px"
        >
          <el-form-item label="编号">
            <el-input v-model="repairForm.number"></el-input>
          </el-form-item>
          <el-form-item label="姓名">
            <el-input v-model="repairForm.name"></el-input>
          </el-form-item>
          <el-form-item label="日期">
            <el-input v-model="repairForm.date"></el-input>
          </el-form-item>
          <el-form-item label="部门号码">
            <el-input v-model="repairForm.departmentNum"></el-input>
          </el-form-item>
          <el-form-item label="部门名称">
            <el-input v-model="repairForm.departmentName"></el-input>
          </el-form-item>
          <el-form-item label="签卡标志">
            <el-input v-model="repairForm.sign"></el-input>
          </el-form-item>
          <el-form-item label="签卡时间">
            <el-input v-model="repairForm.signTime"></el-input>
          </el-form-item>
          <el-form-item label="考勤机号">
            <el-input v-model="repairForm.KqMachine"></el-input>
          </el-form-item>
          <el-form-item label="处理标志">
            <el-input v-model="repairForm.handleSign"></el-input>
          </el-form-item>
          <el-form-item label="卡号">
            <el-input v-model="repairForm.cardNumber"></el-input>
          </el-form-item>
          <el-form-item label="补卡原因">
            <el-input v-model="repairForm.reason"></el-input>
          </el-form-item>
        </el-form>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="repairVisible = false">取 消</el-button>
        <el-button type="primary" @click="onconfirmRepair">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      type: 1,
      searchText: "",
      tableData1: [
        {
          Number: "01",
          name: "李燕字",
          date: "2021-10-26",
          swipingCardtime: "8:00:00",
          KqModel: "考勤机",
          departmentNum: "RS01",
          departmentName: "人事部",
          sign: "",
          signTime: "",
          handleSign: "",
          cardNumber: "",
          remark: "",
        },
      ],
      tableData2: [
        {
          Number: "01",
          name: "李燕字",
          departmentName: "人事部",
          date: "2021-10-26",
          time1: "8:00",
          time2: "8:00",
          time3: "8:00",
          time4: "8:00",
          time5: "8:00",
          time6: "8:00",
          time7: "8:00",
          time8: "8:00",
        },
      ],
      tableData3: [
        {
          Number: "01",
          name: "李燕字",
          departmentName: "人事部",
          cardNumber: "001",
          date: "2021-10-26",
        },
      ],
      treeData: [
        {
          id: 1,
          label: "标点公司",
          children: [
            {
              id: 11,
              label: "人事部",
              children: [
                {
                  id: 111,
                  label: "前台",
                },
                {
                  id: 112,
                  label: "人事专员",
                },
              ],
            },
            {
              id: 12,
              label: "技术部",
              children: [
                {
                  id: 121,
                  label: "技术1组",
                },
                {
                  id: 122,
                  label: "技术2组",
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
      dialogVisible: false,
      EditForm: {
        number: "01",
        name: "李燕字",
        date: "2021-10-26",
        swipingCardTime: "8:00:00",
        KqModel: "考勤机",
        departmentNum: "RS01",
        departmentName: "人事部",
        sign: "",
        signTime: "",
        handleSign: "",
        cardNumber: "",
        remark: "",
      },

      repairVisible: false,
      repairForm:{
        number: "01",
        name: "李燕字",
        date: "2021-10-26",
        swipingCardTime: "8:00:00",
        KqModel: "考勤机",
        departmentNum: "RS01",
        departmentName: "人事部",
        KqMachine:"",
        sign: "",
        signTime: "",
        handleSign: "",
        cardNumber: "",
        remark: "",
      }
    };
  },
  created() {},
  methods: {
    search(type) {
      this.type = type;
    },
    handleEdit() {
      this.dialogVisible = true;
    },
    handleRepairClockIn() {
      this.repairVisible = true;
    },
    onconfirmEdit() {
      this.dialogVisible = false;
    },
    onconfirmRepair() {
      this.repairVisible = false;
    },
  },
  computed: {},
};
</script>
<style lang='less' scoped>
.contData {
  padding: 12px;
  box-sizing: border-box;
  .searchTop {
    margin-bottom: 20px;
    .el-input {
      width: 220px;
    }

    .searchBtn {
      margin-left: 20px;
    }
  }

  .enterData {
    width: 100%;
    height: 80vh;
    display: flex;
    .tree-left {
      width: 180px;
      height: 100%;
      border: 1px solid #ccc;
      border-radius: 8px;
      padding: 4px;
      box-sizing: border-box;
    }
    .data-right {
      width: 100%;
      margin-left: 15px;
    }
  }
}
</style>