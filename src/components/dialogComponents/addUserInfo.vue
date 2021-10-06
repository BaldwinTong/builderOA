<template>
  <el-dialog
    title="人事档案表"
    :visible.sync="dialogVisible"
    width="60%"
    :before-close="handleClose"
  >
    <div class="allInfo">
      <div class="personalInfo">
        <h3 class="title">个人资料</h3>
        <el-form :inline="true" :model="infoForm" class="demo-form-inline">
          <el-form-item label-width="100px" label="工号">
            <el-input v-model="infoForm.jobNum" placeholder="工号"></el-input>
          </el-form-item>
          <el-form-item label-width="100px" label="姓名">
            <el-input v-model="infoForm.name" placeholder="姓名"></el-input>
          </el-form-item>
          <el-form-item label-width="100px" label="身份证号码">
            <el-input
              v-model="infoForm.userId"
              placeholder="身份证号码"
            ></el-input>
          </el-form-item>
          <el-form-item label-width="100px" label="性别">
            <el-radio v-model="infoForm.gender" label="1">男</el-radio>
            <el-radio v-model="infoForm.gender" label="2">女</el-radio>
          </el-form-item>
          <el-form-item label-width="100px" label="籍贯">
            <el-input
              v-model="infoForm.nativePlace"
              placeholder="籍贯"
            ></el-input>
          </el-form-item>
          <el-form-item label-width="100px" label="民族">
            <el-input v-model="infoForm.nation" placeholder="民族"></el-input>
          </el-form-item>
          <el-form-item label-width="100px" label="出生日期">
            <el-input
              v-model="infoForm.birthDate"
              placeholder="出生日期"
            ></el-input>
          </el-form-item>
          <el-form-item label-width="100px" label="年龄">
            <el-input v-model="infoForm.age" placeholder="年龄"></el-input>
          </el-form-item>
          <el-form-item label-width="100px" label="学历">
            <el-input
              v-model="infoForm.education"
              placeholder="学历"
            ></el-input>
          </el-form-item>
          <el-form-item label-width="100px" label="婚姻状态">
            <el-radio v-model="infoForm.MaritalStatus" label="1">未婚</el-radio>
            <el-radio v-model="infoForm.MaritalStatus" label="2">已婚</el-radio>
          </el-form-item>
          <el-form-item label="地址" label-width="100px">
            <el-input v-model="infoForm.address" placeholder="地址"></el-input>
          </el-form-item>
        </el-form>
      </div>
      <div class="UserCompanyInfo">
        <h3 class="title">公司资料</h3>
        <el-form :inline="true" :model="infoForm" class="demo-form-inline">
          <el-form-item label-width="100px" label="工号">
            <el-input v-model="infoForm.jobNum" placeholder="工号"></el-input>
          </el-form-item>
        </el-form>
      </div>
    </div>

    <span slot="footer" class="dialog-footer">
      <el-button @click="handleClose">取 消</el-button>
      <el-button type="primary" @click="onConfrom">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
  components: {},
  props: {
    showDialog: {
      typeof: Boolean,
      default: false,
    },
  },
  data() {
    return {
      dialogVisible: false,
      infoForm: {
        jobNum: "10001",
        name: "Dachui Wang",
        userId: "2222222",
        gender: "1",
        nativePlace: "重庆市",
        nation: "汉族",
        birthDate: "2020-02-20",
        age: "18",
        education: "托儿所",
        MaritalStatus: "1",
        address: "重庆市渝北区",
      },
    };
  },
  created() {},
  methods: {
    handleClose() {
      this.$emit("closeDialog", false);
    },
    onConfrom() {
      this.$emit("closeDialog", false);
    },
  },
  computed: {},
  watch: {
    showDialog() {
      this.dialogVisible = this.showDialog;
    },
  },
};
</script>
<style lang='less' scoped>
.allInfo {
  height: 50vh;
  overflow: auto;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 10px;
  box-sizing: border-box;
  .title {
    width: 100%;
    height: 40px;
    line-height: 40px;
    text-align: center;
  }

  .demo-form-inline {
      padding: 10px;
      box-sizing: border-box;
    border: 1px solid #ccc;
  }
}

.el-dialog-div {
  height: 60vh;
  overflow: auto;
}
</style>