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
        <div class="checkWorkAttendance">
          <h3 class="title">考勤、薪资资料</h3>
          <el-form
            :inline="true"
            :model="checkAttInfoForm"
            class="demo-form-inline"
          >
            <el-form-item label-width="100px" label="班次代码">
              <el-input
                placeholder="请输入"
                v-model="checkAttInfoForm.Shift"
              ></el-input>
            </el-form-item>
            <el-form-item label-width="100px" label="日历方案">
              <el-input
                placeholder="请输入"
                v-model="checkAttInfoForm.calendarPlan"
              ></el-input>
            </el-form-item>
            <el-form-item label-width="100px" label="自动倒班套">
              <el-input
                placeholder="请输入"
                v-model="checkAttInfoForm.aotuShift"
              ></el-input>
            </el-form-item>
            <el-form-item label-width="100px" label="日报公式套">
              <el-input
                placeholder="请输入"
                v-model="checkAttInfoForm.dailyFormula"
              ></el-input>
            </el-form-item>
            <el-form-item label-width="100px" label="薪资帐套">
              <el-input
                placeholder="请输入"
                v-model="checkAttInfoForm.PayrollAccount"
              ></el-input>
            </el-form-item>
          </el-form>
        </div>
        <el-button size="small" @click="showDetail">显示详细信息</el-button>
        <el-button size="small" @click="showCard">卡片管理</el-button>
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

    <el-dialog
      width="60%"
      title="详细信息"
      :visible.sync="innerVisible"
      append-to-body
    >
      <el-tabs type="border-card">
        <el-tab-pane label="工作经历">
          <div class="textList">
            <div v-for="item in 4" :key="item" class="workerItem">
              <span>这是我的工作经历</span>
              <p>
                <span class="handle">编辑</span>
                <span class="handle">删除</span>
              </p>
            </div>
          </div>
          <div class="workerEdit">
            <h4>编写工作经历</h4>
            <el-input type="textarea"></el-input>
          </div>
          <el-button type="primary" size="small">确定</el-button>
        </el-tab-pane>
        <el-tab-pane label="教育及专业培训">
          <el-table :data="EduTrainingData" border style="width: 100%">
            <el-table-column
              type="index"
              label="序号"
              width="60px"
              align="center"
            >
            </el-table-column>
            <el-table-column prop="startDate" label="开始日期" align="center">
            </el-table-column>
            <el-table-column prop="endDate" label="结束日期" align="center">
            </el-table-column>
            <el-table-column
              prop="school"
              label="所在院校(培训机构)"
              width="180px"
              align="center"
            >
            </el-table-column>
            <el-table-column prop="major" label="专业" align="center">
            </el-table-column>
            <el-table-column prop="SchoolSystem" label="学制" align="center">
            </el-table-column>
          </el-table>
        </el-tab-pane>
        <el-tab-pane label="社会关系">
          <el-table :data="SocialRelationsData" border style="width: 100%">
            <el-table-column
              type="index"
              label="序号"
              width="60px"
              align="center"
            >
            </el-table-column>
            <el-table-column prop="name" label="姓名" align="center">
            </el-table-column>
            <el-table-column
              prop="relationship"
              label="关系"
              width="70px"
              align="center"
            >
            </el-table-column>
            <el-table-column
              prop="gender"
              label="性别"
              align="center"
              width="60px"
            >
            </el-table-column>
            <el-table-column
              prop="workUnit"
              label="工作单位"
              width="120px"
              align="center"
            >
            </el-table-column>
            <el-table-column prop="duties" label="职务" align="center">
            </el-table-column>
            <el-table-column
              prop="address"
              label="联系地址"
              width="180px"
              align="center"
            >
            </el-table-column>
            <el-table-column prop="phone" label="联系电话" align="center">
            </el-table-column>
          </el-table>
        </el-tab-pane>
        <el-tab-pane label="证件（照片）">
          <div class="imageList">
            <div class="item" v-for="item in 4" :key="item">
              <img
                src="https://img0.baidu.com/it/u=4125279608,444434243&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=667"
                alt=""
              />
              <p>图片{{ item }}</p>
            </div>
            <div class="item">
              <div class="addimg">+</div>
              <p>添加图片</p>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="合同管理">
          <el-table :data="contractData" border style="width: 100%">
            <!-- <el-table-column
              type="index"
              label="序号"
              width="60px"
              align="center"
            >
            </el-table-column> -->
            <el-table-column
              prop="count"
              label="次数"
              width="60px"
              align="center"
            >
            </el-table-column>
            <el-table-column prop="contractNum" label="合同编号" align="center">
            </el-table-column>
            <el-table-column
              prop="contractType"
              label="合同类型"
              align="center"
            >
            </el-table-column>
            <el-table-column prop="symbol" label="标志" align="center">
            </el-table-column>
            <el-table-column prop="SigningDate" label="签订日期" align="center">
            </el-table-column>
            <el-table-column prop="limitY" label="限(年)" align="center">
            </el-table-column>
            <el-table-column prop="limitM" label="限(月)" align="center">
            </el-table-column>
            <el-table-column prop="startDate" label="生效日期" align="center">
            </el-table-column>
            <el-table-column prop="endDate" label="结束日期" align="center">
            </el-table-column>
          </el-table>
        </el-tab-pane>
      </el-tabs>
    </el-dialog>

    <el-dialog
      width="60%"
      title="快速发卡"
      :visible.sync="innerCardVisible"
      append-to-body
    >
      <el-form
        :inline="true"
        :model="fastSendCardForm"
        class="demo-form-inline"
      >
        <div class="fastSendCardFormItem">
          <el-form-item label-width="100px" label="编号">
            <el-input
              v-model="fastSendCardForm.num"
              placeholder="输入编号"
            ></el-input>
          </el-form-item>
          <el-form-item label-width="100px" label="姓名">
            <el-input
              v-model="fastSendCardForm.name"
              placeholder="输入姓名"
            ></el-input>
          </el-form-item>
          <el-form-item label-width="100px" label="部门编号">
            <el-input
              v-model="fastSendCardForm.departmentNum"
              placeholder="输入部门编号"
            ></el-input>
          </el-form-item>
          <el-form-item label-width="100px" label="部门名称">
            <el-input
              v-model="fastSendCardForm.departmentName"
              placeholder="输入部门名称"
            ></el-input>
          </el-form-item>
          <el-form-item label-width="100px" label="卡号(指纹)">
            <el-input
              v-model="fastSendCardForm.cardNum"
              placeholder="输入卡号"
            ></el-input>
          </el-form-item>
          <el-form-item label-width="100px" label="记录号">
            <el-input
              v-model="fastSendCardForm.logNum"
              placeholder="输入记录号"
            ></el-input>
          </el-form-item>
          <el-form-item label-width="100px" label="状态">
            <el-radio v-model="fastSendCardForm.status" label="1"
              >有效</el-radio
            >
            <el-radio v-model="fastSendCardForm.status" label="2"
              >无效</el-radio
            >
          </el-form-item>
          <el-form-item label-width="100px" label="组别">
            <el-input
              v-model="fastSendCardForm.group"
              placeholder="输入组别"
            ></el-input>
          </el-form-item>
          <el-form-item label-width="100px" label="开始时间">
            <el-date-picker
              v-model="fastSendCardForm.startTime"
              type="datetime"
              placeholder="选择开始时间"
            >
            </el-date-picker>
          </el-form-item>
          <el-form-item label-width="100px" label="结束时间">
            <el-date-picker
              v-model="fastSendCardForm.endTime"
              type="datetime"
              placeholder="选择结束时间"
            >
            </el-date-picker>
          </el-form-item>
          <el-form-item label-width="80px" label="物理卡号">
            <el-input
              v-model="fastSendCardForm.PhysicsCardNum"
              placeholder="输入物理卡号"
            ></el-input>
          </el-form-item>
        </div>
      </el-form>
      <div class="fastSendCardBtns">
        <el-button type="primary" plain>保存</el-button>
        <el-button type="success" plain>连接端口</el-button>
        <el-button type="success" plain>IC读卡</el-button>
        <el-button type="info" plain>关闭</el-button>
      </div>
    </el-dialog>

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
      innerVisible: false,
      innerCardVisible: false,
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
      checkAttInfoForm: {
        Shift: "",
        calendarPlan: "",
        aotuShift: "",
        dailyFormula: "",
        PayrollAccount: "",
      },

      //教育和专业培训表
      EduTrainingData: [
        {
          startDate: "2021-1-1",
          endDate: "2021-1-1",
          school: "江南大学",
          major: "人工智能",
          SchoolSystem: "5年制",
        },
      ],
      //社会关系表
      SocialRelationsData: [
        {
          name: "王小锤",
          relationship: "父子",
          gender: "男",
          workUnit: "五金厂",
          duties: "销售",
          address: "中山路220号",
          phone: "13000000001",
        },
      ],

      //合同管理表
      contractData: [
        {
          count: "1",
          contractNum: "011111",
          contractType: "临时合同",
          symbol: "xx",
          SigningDate: "2021-10-15",
          limitY: "2025",
          limitM: "6",
          startDate: "2021-10-16",
          endDate: "2022-10-16",
        },
      ],

      //快速发卡弹窗数据内容
      fastSendCardForm: {
        num: "",
        name: "",
        departmentNum: "",
        departmentName: "",
        cardNum: "",
        logNum: "",
        status: "1",
        group: "",
        startTime: "",
        endTime: "",
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
    showDetail() {
      this.innerVisible = true;
    },
    showCard() {
      this.innerCardVisible = true;
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

// 内部弹窗样式
.textList {
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 0px 12px;
  box-sizing: border-box;
  max-height: 150px;
  overflow: auto;
  .workerItem {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ccc;
  }
  p {
    margin: 6px;
    padding: 6px;
    .handle {
      cursor: pointer;
      margin-left: 6px;
    }
    .handle:hover {
      color: brown;
    }
  }
  .workerItem:last-child {
    border-bottom: none;
  }
}

.workerEdit {
  h4 {
    margin: 8px 0;
  }
  margin-bottom: 4px;
}

.imageList {
  //照片
  display: flex;
  justify-content: flex-start;
  align-items: center;
  .item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-right: 16px;
    img {
      width: 90px;
      height: 98px;
      margin-bottom: 4px;
    }
  }
  .addimg {
    width: 90px;
    height: 98px;
    text-align: center;
    line-height: 98px;
    font-size: 32px;
    cursor: pointer;
    margin-bottom: 4px;
    border: 1px dashed #ccc;
  }
}

//快速发卡弹窗
.fastSendCardFormItem .el-form-item {
  width: 320px !important;
}

.fastSendCardBtns{
  display: flex;
  justify-content: right;
}
</style>