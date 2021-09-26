<template>
  <div class="top">
    <div class="left">
      <img src="../../assets/logo.png" alt="" />
      <div class="welcomeText">标点科技</div>
    </div>
    <div class="right">
      <img src="../../assets/head.jpg" alt="" />
      <div class="logOutBtn" @click="loginOut">
        <i class="iconfont icon-tuichudenglu"></i>
        <div class="logoutText">退出登录</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{}
    },
    methods:{
        loginOut(){
            this.$router.push('/login')
        }
    }
};
</script>

<style>
.top {
  width: 100%;
  height: 60px;
  background-color: #1c2431;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  box-sizing: border-box;
}

.top .left,
.top .right {
  display: flex;
  justify-content: center;
  align-items: center;
}
.top .left img {
  width: 28px;
  height: 28px;
}

.top .left .welcomeText {
  color: #fff;
  font-size: 16px;
  margin-left: 10px;
}

.right img {
  width: 36px;
  height: 36px;
  border-radius: 50%;
}
.logOutBtn{
    font-size: 12px;
    color: #fff;
    margin-left: 10px;
    cursor: pointer;
    text-align: center;
}

.logoutText{
    font-size: 10px;
}

</style>