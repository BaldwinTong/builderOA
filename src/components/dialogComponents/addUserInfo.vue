<template>
  <el-dialog
    title="人事档案表"
    :visible.sync="dialogVisible"
    width="70%"
    :before-close="handleClose"
  >
    <div class="allInfo">
      <div>
        <div class="personalInfo">
          <h3 class="title">个人资料</h3>
          <el-form
            :inline="true"
            :model="personInfoForm"
            class="demo-form-inline"
          >
            <el-form-item label-width="100px" label="工号">
              <el-input
                v-model="personInfoForm.jobNum"
                placeholder="工号"
              ></el-input>
            </el-form-item>
            <el-form-item label-width="100px" label="姓名">
              <el-input
                v-model="personInfoForm.name"
                placeholder="姓名"
              ></el-input>
            </el-form-item>
            <el-form-item label-width="100px" label="身份证号码">
              <el-input
                v-model="personInfoForm.userId"
                placeholder="身份证号码"
              ></el-input>
            </el-form-item>
            <el-form-item label-width="100px" label="性别">
              <el-radio v-model="personInfoForm.gender" label="1">男</el-radio>
              <el-radio v-model="personInfoForm.gender" label="2">女</el-radio>
            </el-form-item>
            <el-form-item label-width="100px" label="籍贯">
              <el-input
                v-model="personInfoForm.nativePlace"
                placeholder="籍贯"
              ></el-input>
            </el-form-item>
            <el-form-item label-width="100px" label="民族">
              <el-input
                v-model="personInfoForm.nation"
                placeholder="民族"
              ></el-input>
            </el-form-item>
            <el-form-item label-width="100px" label="出生日期">
              <el-input
                v-model="personInfoForm.birthDate"
                placeholder="出生日期"
              ></el-input>
            </el-form-item>
            <el-form-item label-width="100px" label="年龄">
              <el-input
                v-model="personInfoForm.age"
                placeholder="年龄"
              ></el-input>
            </el-form-item>
            <el-form-item label-width="100px" label="学历">
              <el-input
                v-model="personInfoForm.education"
                placeholder="学历"
              ></el-input>
            </el-form-item>
            <el-form-item label-width="100px" label="婚姻状态">
              <el-radio v-model="personInfoForm.MaritalStatus" label="1"
                >未婚</el-radio
              >
              <el-radio v-model="personInfoForm.MaritalStatus" label="2"
                >已婚</el-radio
              >
            </el-form-item>
            <el-form-item label="现住地址" label-width="100px">
              <el-input
                v-model="personInfoForm.address"
                placeholder="现住地址"
              ></el-input>
            </el-form-item>
          </el-form>
        </div>
        <div class="UserCompanyInfo">
          <h3 class="title">公司资料</h3>
          <el-form
            :inline="true"
            :model="companyInfoForm"
            class="demo-form-inline"
          >
            <el-form-item label-width="100px" label="部门号码">
              <el-input
                v-model="companyInfoForm.departmentNum"
                placeholder="部门号码"
              ></el-input>
            </el-form-item>
            <el-form-item label-width="100px" label="部门名称">
              <el-input
                v-model="companyInfoForm.departmentName"
                placeholder="部门名称"
              ></el-input>
            </el-form-item>
            <el-form-item label-width="100px" label="班组">
              <el-input
                v-model="companyInfoForm.departmentTeam"
                placeholder="班组"
              ></el-input>
            </el-form-item>
            <el-form-item label-width="100px" label="职务">
              <el-input
                v-model="companyInfoForm.departmentJob"
                placeholder="职务"
              ></el-input>
            </el-form-item>
            <el-form-item label-width="100px" label="职称">
              <el-input
                v-model="companyInfoForm.departmentDuty"
                placeholder="职称"
              ></el-input>
            </el-form-item>
            <el-form-item label-width="100px" label="级别">
              <el-input
                v-model="companyInfoForm.departmentLevel"
                placeholder="级别"
              ></el-input>
            </el-form-item>
            <el-form-item label-width="100px" label="状态">
              <el-radio v-model="companyInfoForm.Status" label="1"
                >在职</el-radio
              >
              <el-radio v-model="companyInfoForm.Status" label="2"
                >离职</el-radio
              >
              <el-radio v-model="companyInfoForm.Status" label="3"
                >休假</el-radio
              >
            </el-form-item>
            <el-form-item label-width="100px" label="到职日期">
              <el-input
                v-model="companyInfoForm.takeOfficeDate"
                placeholder="到职日期"
              ></el-input>
            </el-form-item>
            <el-form-item label-width="100px" label="试用月数">
              <el-input
                v-model="companyInfoForm.Probation"
                placeholder="试用月数"
              ></el-input>
            </el-form-item>
            <el-form-item label-width="100px" label="人员性质">
              <el-radio v-model="companyInfoForm.PersonnelNature" label="1"
                >直接</el-radio
              >
              <el-radio v-model="companyInfoForm.PersonnelNature" label="2"
                >间接</el-radio
              >
            </el-form-item>

            <el-form-item label-width="100px" label="转正日期">
              <el-input
                v-model="companyInfoForm.BARworker"
                placeholder="转正日期"
              ></el-input>
            </el-form-item>
            <el-form-item label-width="100px" label="工龄">
              <el-input
                v-model="companyInfoForm.workingYears"
                placeholder="工龄"
              ></el-input>
            </el-form-item>
            <el-form-item label-width="100px" label="合同开始日期">
              <el-input
                v-model="companyInfoForm.contractStartDate"
                placeholder="合同开始日期"
              ></el-input>
            </el-form-item>
            <el-form-item label-width="100px" label="合同结束日期">
              <el-input
                v-model="companyInfoForm.contractEndDate"
                placeholder="合同结束日期"
              ></el-input>
            </el-form-item>
          </el-form>
        </div>
      </div>
      <div class="headImage">
        <el-upload
          class="avatar-uploader"
          action="https://jsonplaceholder.typicode.com/posts/"
          :headers="Headers"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload"
        >
          <img v-if="imageUrl" :src="imageUrl" class="avatar" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
        <h3 style="text-align: center; margin-top: 10px">上传照片</h3>
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
    userId: {
      typeof: String,
      default: "",
    },
  },
  data() {
    return {
      dialogVisible: false,
      personInfoForm: {
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
      companyInfoForm: {
        departmentNum: "2005",
        departmentName: "开发部",
        departmentTeam: "开发二组",
        departmentJob: "组长",
        departmentDuty: "高级开发工程师",
        departmentLevel: "3级",
        Status: "2",
        Probation: "3",
        PersonnelNature: "1",
        takeOfficeDate: "2021-7-7",
        BARworker: "2021-10-7",
        workingYears: "1",
        contractStartDate: "2021-7-7",
        contractEndDate: "2024-7-7",
      },
      imageUrl: "",
      Headers: { "Access-Control-Allow-Origin": "*" },
    };
  },
  created() {},
  methods: {
    getData() {
      // if (this.userId) {
      //   console.log('0000');
      // }else{
      //   console.log('11111');
      // }
    },
    handleClose() {
      this.$emit("closeDialog", false);
    },
    onConfrom() {
      this.$emit("closeDialog", false);
    },
    // 头像
    handleAvatarSuccess(res, file) {
      console.log(res, file);
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      console.log(file);
    },
  },
  computed: {},
  watch: {
    showDialog() {
      this.dialogVisible = this.showDialog;
    },
    userId() {
      console.log(this.userId);
      this.getData();
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
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  .title {
    width: 100%;
    height: 40px;
    line-height: 40px;
    text-align: center;
  }

  .demo-form-inline {
    padding: 10px;
    box-sizing: border-box;
  }
}

.el-dialog-div {
  height: 60vh;
  overflow: auto;
}

// 头像
.headImage {
  margin-top: 50px;
}
.avatar-uploader .el-upload {
  border: 1px dashed #ccc;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar-uploader-icon {
  border-radius: 8px;
  border: 1px dashed #ccc !important;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>