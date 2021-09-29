<template>
  <el-dialog
    title="提示"
    :visible.sync="dialogVisible"
    width="40%"
    :before-close="handleClose"
  >
    <el-form label-width="80px" :model="formData" ref="formData">
      <el-form-item label="部门编号">
        <el-input v-model="formData.DeptIdNum"></el-input>
      </el-form-item>
      <el-form-item label="部门名称">
        <el-input v-model="formData.DeptName"></el-input>
      </el-form-item>
      <el-form-item label="负责人">
        <el-input v-model="formData.DeptPic"></el-input>
      </el-form-item>
      <el-form-item label="编制人数">
        <el-input v-model="formData.plantNum"></el-input>
      </el-form-item>
      <el-form-item label="实际人数">
        <el-input v-model="formData.actualNum"></el-input>
      </el-form-item>
      <el-form-item label="上级部门">
        <el-input v-model="formData.superiorDept"></el-input>
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
  },
  data() {
    return {
      dialogVisible: false,
      formData: {
        DeptIdNum:'',
        DeptName:'',
        DeptPic:'',
        plantNum:'',
        actualNum:'',
        superiorDept:'',
      },
    };
  },
  created() {},
  methods: {
    changeShow() {
      this.dialogVisible = this.showDialogs;
    },
    handleClose() {
      this.dialogVisible = false;
      this.$emit("closeDialog", false);
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
          this.$emit("closeDialog", false);
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
  },
  components: {},
  computed: {},
};
</script>
<style lang='less' scoped>
</style>