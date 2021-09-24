<template>
  <div class="page">
    <div class="login">
      <div class="top">
        <img src="../assets/logo.png" alt="" />
        <div class="title_text">标点科技欢迎您</div>
      </div>
      <div class="content">
        <el-form
          class="formBox"
          :model="LoginForm"
          :rules="rules"
          ref="LoginForm"
        >
          <el-form-item class="formItem" prop="userName">
            <el-input placeholder="请输入账号" v-model="LoginForm.userName">
              <i slot="prefix" class="el-input__icon el-icon-s-custom"></i>
            </el-input>
          </el-form-item>
          <el-form-item class="formItem" prop="password">
            <el-input
              placeholder="请输入密码"
              type="password"
              v-model="LoginForm.password"
              @keyup.native.enter="enterKey"
            >
              <i slot="prefix" class="el-input__icon el-icon-lock"></i>
            </el-input>
          </el-form-item>
        </el-form>
        <el-button
          type="primary"
          class="btn"
          round
          @click="submitForm('LoginForm')"
          >登录</el-button
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      LoginForm: {
        userName: "",
        password: "",
      },
      rules: {
        userName: [{ required: true, message: "请输入账号", trigger: "blur" }],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
    };
  },
  methods: {
      submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.Login();
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    enterKey() {
      this.Login();
    },
    Login() {
      this.$router.push("/home");
    },
  },
};
</script>

<style>
.page {
  width: 100%;
  height: 100%;
  position: fixed;
  background: rgb(28, 36, 49);
  text-align: center;
}

.login {
  width: 500px;
  height: 300px;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 16px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.login .top {
  display: flex;
  justify-content: center;
  align-items: center;
}

.login .top img {
  width: 45px;
  height: 45px;
  margin-right: 10px;
}

.login .top .title_text {
  font-size: 18px;
  color: #fff;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}
.formItem {
  width: 260px;
  margin-top: 15px;
}
.btn {
  width: 260px;
}
.el-input__icon {
  color: black;
  font-size: 18px;
}
.btn {
  width: 260px;
}
.el-textarea__inner,
.el-input__inner {
  color: #fff;
}
</style>