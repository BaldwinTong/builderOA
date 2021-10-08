<template>
  <div>
    <div class="content">
      <div class="left">
        <el-form :model="infoForm" class="demo-form-inline">
          <el-form-item label-width="100px" label="姓名">
            <el-input
              v-model="infoForm.name"
              style="width: 260px"
              placeholder="姓名"
            ></el-input>
          </el-form-item>
          <el-form-item label-width="100px" label="性别">
            <el-radio v-model="infoForm.gender" label="1">男</el-radio>
            <el-radio v-model="infoForm.gender" label="2">女</el-radio>
          </el-form-item>
          <el-form-item label-width="100px" label="部门号码">
            <el-input
              v-model="infoForm.departmentNum"
              style="width: 260px"
              placeholder="部门号码"
            ></el-input>
          </el-form-item>
          <el-form-item label-width="100px" label="部门名称">
            <el-input
              v-model="infoForm.departmentName"
              style="width: 260px"
              placeholder="部门名称"
            ></el-input>
          </el-form-item>
          <el-form-item label-width="100px" label="班组">
            <el-input
              v-model="infoForm.departmentTeam"
              style="width: 260px"
              placeholder="班组"
            ></el-input>
          </el-form-item>
          <el-form-item label-width="100px" label="班次代码">
            <el-input
              v-model="infoForm.classesCode"
              style="width: 260px"
              placeholder="班次代码"
            ></el-input>
          </el-form-item>
          <el-form-item label-width="100px" label="日历方案">
            <el-input
              v-model="infoForm.CalendarScheme"
              style="width: 260px"
              placeholder="日历方案"
            ></el-input>
          </el-form-item>
          <el-form-item label-width="100px" label="到职日期">
            <el-input
              v-model="infoForm.takeOfficeDate"
              style="width: 260px"
              placeholder="到职日期"
            ></el-input>
          </el-form-item>
          <el-form-item label-width="100px" label="离职原因">
            <el-input
              v-model="infoForm.leaveOfficeReaon"
              style="width: 260px"
              placeholder="离职原因"
            ></el-input>
          </el-form-item>
          <el-form-item label-width="100px" label="离职日期">
            <el-input
              v-model="infoForm.leaveOfficeDate"
              style="width: 260px"
              placeholder="离职日期"
            ></el-input>
          </el-form-item>
          <el-form-item label-width="100px" label="状态">
            <el-select
              v-model="infoForm.Status"
              style="width: 260px"
              placeholder="请选择"
            >
              <el-option
                v-for="item in statusOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <span slot="footer" class="dialog-footer">
              <el-button @click="dialogVisible = false">取 消</el-button>
              <el-button type="primary" @click="dialogVisible = false"
                >确 定</el-button
              >
            </span>
          </el-form-item>
        </el-form>
      </div>
      <div class="right">
        <el-form :model="infoForm" class="demo-form-inline">
          <el-form-item label-width="100px" label="照片">
            <img
              style="width: 100px; height: 100px"
              src="../../../\assets\logo.png"
              alt=""
            />
          </el-form-item>
          <el-form-item label-width="100px" label="职务">
            <el-input
              v-model="infoForm.departmentJob"
              style="width: 260px"
              placeholder="职务"
            ></el-input>
          </el-form-item>
          <el-form-item label-width="100px" label="级别">
            <el-input
              v-model="infoForm.departmentLevel"
              style="width: 260px"
              placeholder="级别"
            ></el-input>
          </el-form-item>

          <el-form-item label-width="100px" label="籍贯">
            <el-input
              v-model="infoForm.nativePlace"
              style="width: 260px"
              placeholder="籍贯"
            ></el-input>
          </el-form-item>

          <el-form-item label-width="100px" label="身份证号码">
            <el-input
              v-model="infoForm.userId"
              style="width: 260px"
              placeholder="身份证号码"
            ></el-input>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      infoForm: {
        name: "Dachui Wang",
        gender: "1",
        departmentNum: "2005",
        departmentName: "开发部",
        departmentTeam: "开发二组",
        classesCode: "001",
        CalendarScheme: "XXX",
        takeOfficeDate: "2020-2-2",
        leaveOfficeReaon: "XXXX",
        leaveOfficeDate: "2020-2-2",
        Status: "",
        departmentJob: "XXX",
        departmentLevel: "2",
        nativePlace: "XXXX",
        userId: "585555858285255",
      },
      statusOptions: [
        {
          value: "在职",
          label: "在职",
        },
        {
          value: "休假",
          label: "休假",
        },
        {
          value: "离职",
          label: "离职",
        },
      ],
    };
  },
  created() {},
  methods: {},
  computed: {},
};
</script>
<style lang='less' scoped>
.content {
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  .left {
    width: 50%;
    .demo-form-inline {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
  .right {
    flex: 1;
    .demo-form-inline {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }
  }
}
.el-tabs__content {
  height: 78vh !important;
  overflow: auto !important;
}
</style>