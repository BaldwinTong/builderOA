<template>
  <div>
    <el-container class="container">
      <el-header>
        <div class="crumbs">
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>硬件管理</el-breadcrumb-item>
            <el-breadcrumb-item>硬件档案</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <el-tree
            :data="treeData"
            :props="defaultProps"
            @node-click="handleNodeClick"
          ></el-tree>
        </el-aside>
        <el-main>
          <p class="title">硬件档案</p>
          <div class="fileContent">
            <div class="file-item">
              <p class="little-title">硬件基本资料</p>
              <div class="write-item">
                <div class="items-left">
                  <p class="label">出厂机号(必填)</p>
                  <input type="text" class="inpt" v-model="mechineNum" />
                </div>
                <div class="items-right">
                  <span>机器有效</span>
                  <el-checkbox v-model="checked"></el-checkbox>
                  <span class="desc">如果不选，将无法对机器进行读写操作</span>
                </div>
              </div>
            </div>

          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      treeData: [
        {
          label: "一级 1",
          children: [
            {
              label: "二级 1-1",
              children: [
                {
                  label: "三级 1-1-1",
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
      checked: true,
      mechineNum:'02'
    };
  },
  created() {},
  methods: {
    handleNodeClick(data) {
      console.log(data);
    },
  },
  computed: {},
};
</script>
<style lang='less' scoped>
.crumbs {
  height: 60px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
}

.container {
  height: 100% !important;
  padding: 0 8px;
  box-sizing: border-box;
}

.el-header {
  background-color: #fff;
  color: #333;
  line-height: 60px;
}

.el-aside {
  background-color: #fff;
  color: #333;
  text-align: center;
  line-height: 200px;
  padding: 8px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 8px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  padding: 12px;
  box-sizing: border-box;
  .title{
    width: 100%;
    text-align: center;
    font-size: 28px;
  }
  .fileContent{
    width: 100%;
    min-height: 90px;
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 14px;
    box-sizing: border-box;
    margin-top: 20px;
    position: relative;
    .little-title{
      width: 100px;
      height: 24px;
      line-height: 24px;
      position: absolute;
      top: -12px;
      left: 10px;
      background-color: #e9eef3;
      text-align: center;
      font-size: 14px;
    }
    .write-item{
      display: flex;
      align-items: center;
      font-size: 14px;
      .items-left{
        display: flex;
        align-items: center;
        .label{
          width: 125px;
          text-align: right;
          color: red;
        }
        .inpt{
          margin-left: 10px;
          padding: 0 4px;
          box-sizing: border-box;
        }
      }
      .items-right{
        margin-left: 48px;
        span{
          margin-right: 6px;
        }
        .desc{
          color: #070782;
          margin-left: 12px;
        }
      }
    }
  }
}

body > .el-container {
  margin-bottom: 40px;
}
</style>