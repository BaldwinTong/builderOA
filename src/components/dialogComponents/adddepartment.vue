<template>
  <el-dialog
    title="提示"
    :visible.sync="dialogVisible"
    width="40%"
    :before-close="handleClose"
  >
    <el-form
      label-width="80px"
      :rules="rulesFrom"
      :model="formData"
      ref="formData"
    >
      <el-form-item label="部门编号" prop="DeptIdNum">
        <el-input v-model="formData.DeptIdNum"></el-input>
      </el-form-item>
      <el-form-item label="部门名称" prop="DeptName">
        <el-input v-model="formData.DeptName"></el-input>
      </el-form-item>
      <el-form-item label="负责人" prop="DeptPic">
        <el-input v-model="formData.DeptPic"></el-input>
      </el-form-item>
      <el-form-item label="编制人数" prop="plantNum">
        <el-input v-model="formData.plantNum"></el-input>
      </el-form-item>
      <el-form-item label="实际人数" prop="actualNum">
        <el-input v-model="formData.actualNum"></el-input>
      </el-form-item>
      <el-form-item label="上级部门" prop="superiorDept">
        <el-select
          v-model="formData.superiorDept"
          filterable
          placeholder="请选择"
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
      <el-form-item>
        <el-button type="primary" @click="submitForm('formData')"
          >确定</el-button
        >
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

<script>
export default {
  props: {
    showDialogs: {
      type: Boolean,
      default: true,
    },
    treeData: {
      type: Array,
      default: () => {},
    },
  },
  data() {
    return {
      dialogVisible: false,
      formData: {
        DeptIdNum: "",
        DeptName: "",
        DeptPic: "",
        plantNum: "",
        actualNum: "",
        superiorDept: "",
      },
      rulesFrom: {
        DeptIdNum: [
          { required: true, message: "请输入部门编号", trigger: "blur" },
        ],
        DeptName: [
          { required: true, message: "请输入部门名称", trigger: "blur" },
        ],
        DeptPic: [
          { required: true, message: "请输入部门负责人姓名", trigger: "blur" },
        ],
        plantNum: [
          { required: true, message: "请输入编制人数", trigger: "blur" },
        ],
        actualNum: [
          { required: true, message: "请输入实际人数", trigger: "blur" },
        ],
        superiorDept: [
          { required: true, message: "请输入上级", trigger: ["change"] },
        ],
      },
      options: [{ value: "无", label: "无" }],
      value: "",
    };
  },
  created() {
    this.getDeptNameList(this.treeData);
  },
  methods: {
    changeShow() {
      this.dialogVisible = this.showDialogs;
    },
    handleClose() {
      this.dialogVisible = false;
      this.$emit("closeDialog", false);
    },
    getDeptNameList(list) {
      if (list.length > 0) {
        list.forEach((item) => {
          let obj = {};
          obj.value = item.label;
          obj.label = item.label;
          this.options.push(obj);
        });
      }
    },

    submitForm(formName) {
      let obj = JSON.parse(JSON.stringify(this.formData))
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$refs.formData.resetFields();
          this.options= [{ value: "无", label: "无" }]
          this.$emit("closeDialog", false, obj);
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  },
  watch: {
    showDialogs() {
      this.changeShow();
    },
    treeData(newValue){
      this.getDeptNameList(newValue);
      
    }

  },
  components: {},
  computed: {},
};
</script>
<style lang='less' scoped>
</style>